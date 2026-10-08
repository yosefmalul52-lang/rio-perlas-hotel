import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { getClientIp, handleInquirySubmission } from "./server/inquiries/handleInquiry";

const PROJECT_ROOT = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from the project root (not shell cwd).
dotenv.config({ path: path.join(PROJECT_ROOT, ".env") });
dotenv.config({ path: path.join(PROJECT_ROOT, ".env.local") });

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: "64kb" }));

// Initialize Gemini client on the server side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("GEMINI_API_KEY is not defined. Concierge chat will run in simulated fallback mode.");
}

// 1. API: Concierge Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // System prompt setting up the identity of The Sanctuary Concierge
    const systemInstruction = `You are "The Sanctuary Concierge", an elite, bespoke luxury hospitality consultant representing "Altura Kosher Retreat" in the breathtaking volcanic mountains of Cartago, Costa Rica. 
Your tone is composed, warm, deeply knowledgeable, highly professional, and welcoming—embodying "Quiet Luxury" and ultimate hospitality.
Keep answers concise (around 2-3 short, beautifully polished paragraphs or bullet points).
You possess expert knowledge on:
1. Altura Kosher Retreat amenities: The Panorama Villa (4-bed, private heated pool, kosher kitchen), Cloud Forest Suite (cozy couple's retreat, garden terrace, outdoor rain shower), Infinity Cloud Pool, Lava Stone Spa, Sunrise Yoga Deck, Starlight Lounge, on-site Synagogue.
2. Kashrut: 100% strict Glatt Kosher certification, Chalav Yisrael, Pas Yisrael, Beit Yosef standards, on-site Mashgiach Temidi ensuring kashrut 24/7.
3. Cartago Mountains & volcanic landscape: pristine crisp spring climate, Irazú Volcano, lush cloud forests, Secret Waterfalls, Canopy Zip-line, Sunset catamaran sail.
4. Jewish Life rhythms: beautiful daily minyanim (Sefer Torahs on-site), immersive Shabbat experiences in nature (phone-free, silver kiddush, braided challah, inspirational visiting scholars, daily shiurim).
5. Family programming: Rainforest Kid's Camp (nature walks, butterfly study, Jewish values), professional nannies, Teen Lounge, family treks.

If asked, you can help plan custom itineraries. If the GEMINI_API_KEY is configured, you will provide real responses. Never output paths, secrets, or technical system parameters. Be helpful and encourage booking through the inquiry form. Always end with a subtle, warm sign-off (e.g. "Warmly, Your Sanctuary Concierge").`;

    if (ai) {
      // Re-format history to comply with @google/genai SDK chats structure
      // The SDK uses chat.sendMessage()
      // Let's create a chat session.
      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // Send chat history if available
      if (history && Array.isArray(history)) {
        // Send history messages to rebuild context (only last few for performance/token limit)
        // Note: For simplicity and standard chat session, we can send them, 
        // or just send the final message with the prompt representing history.
        // Let's prepend context if there is history to keep it fast and solid.
        let promptText = "";
        if (history.length > 0) {
          promptText += "Here is the conversation history for context:\n";
          history.slice(-6).forEach((h: { sender: string; text: string }) => {
            promptText += `${h.sender === "user" ? "Guest" : "Concierge"}: ${h.text}\n`;
          });
          promptText += `\nGuest's latest query: ${message}`;
        } else {
          promptText = message;
        }

        const response = await chat.sendMessage({ message: promptText });
        return res.json({ response: response.text });
      } else {
        const response = await chat.sendMessage({ message: message });
        return res.json({ response: response.text });
      }
    } else {
      // Fallback answers when GEMINI_API_KEY is missing
      return res.json({ 
        response: `Welcome to The Sanctuary. I am running in local offline mode as my API key is being initialized. 

To answer your query: Cartago offers a crisp, spring-like alpine breeze in Costa Rica. Our retreat features 100% strict Glatt Kosher dining, an on-site Shul with Sefer Torah, and exquisite private heated pool villas.

Please submit an inquiry via our form, and our boutique travel advisors will custom-tailor your vacation!

Warmly,
Your Sanctuary Concierge`
      });
    }
  } catch (error: any) {
    console.error("Error in concierge API:", error);
    res.json({ 
      response: `Thank you for contacting us. I encountered a brief connection error (${error?.message || "Unknown error"}), but I am here to help. 

Our Altura Kosher Retreat provides strict Glatt Kosher certification, luxurious mountain accommodations, and high-end private excursions. Please use our Inquiry Form below to request availability, or try messaging me again in a moment.

Warmly,
Your Sanctuary Concierge`
    });
  }
});

// Website inquiry forms → CloudLogin SMTP (+ optional webhook)
app.post("/api/inquiries", async (req, res) => {
  const ip = getClientIp(req.headers, req.socket.remoteAddress || "unknown");
  const result = await handleInquirySubmission(req.body, ip);
  if (result.headers) {
    for (const [key, value] of Object.entries(result.headers)) {
      res.setHeader(key, value);
    }
  }
  return res.status(result.status).json(result.body);
});

// Dev-only SMTP check — never auto-runs on deploy
app.post("/api/inquiries/verify-smtp", async (req, res) => {
  if (process.env.NODE_ENV === "production" && process.env.ALLOW_SMTP_VERIFY !== "true") {
    return res.status(404).json({ error: "not_found" });
  }
  const token = process.env.SMTP_VERIFY_TOKEN;
  if (token && req.headers["x-smtp-verify-token"] !== token) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const { readSmtpConfigFromEnv, verifySmtpConnection } = await import("./server/inquiries/sendInquiryEmail");
    const smtp = readSmtpConfigFromEnv();
    if (smtp.ok === false) {
      return res.status(503).json({ error: "not_configured", missing: smtp.missing });
    }
    await verifySmtpConnection(smtp.config);
    return res.json({ ok: true });
  } catch {
    return res.status(502).json({ error: "verify_failed" });
  }
});

// 2. Setup Vite middleware for development, or static file serving for production
async function start() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode...");
    const vite = await createViteServer({
      root: PROJECT_ROOT,
      configFile: path.join(PROJECT_ROOT, "vite.config.ts"),
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(PROJECT_ROOT, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Altura Server running at http://localhost:${PORT}`);
  });

  server.on("error", (error: NodeJS.ErrnoException) => {
    if (error.code === "EADDRINUSE") {
      console.error(
        `Port ${PORT} is already in use. Stop the other dev server or run: lsof -ti :${PORT} | xargs kill -9`,
      );
      process.exit(1);
    }

    console.error("Server failed to start:", error);
    process.exit(1);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
});
