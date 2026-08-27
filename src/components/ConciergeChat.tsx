import React from "react";
import { ChatMessage } from "../types";
import { MessageSquare, Send, Sparkles, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ConciergeChatProps {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

export default function ConciergeChat({ chatHistory, setChatHistory }: ConciergeChatProps) {
  const { t, isRtl } = useLanguage();
  const [userInput, setUserInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setChatHistory((prev) => {
      if (prev.length === 0) {
        return [
          {
            sender: "concierge",
            text: t.chat.welcome,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ];
      }
      if (prev.length === 1 && prev[0].sender === "concierge") {
        return [{ ...prev[0], text: t.chat.welcome }];
      }
      return prev;
    });
  }, [t.chat.welcome, setChatHistory]);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const currentTimestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      timestamp: currentTimestamp,
    };

    setChatHistory((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory.map((h) => ({ sender: h.sender, text: h.text })),
        }),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();

      const conciergeMsg: ChatMessage = {
        sender: "concierge",
        text: data.response || t.chat.emptyResponse,
        timestamp: currentTimestamp,
      };

      setChatHistory((prev) => [...prev, conciergeMsg]);
    } catch (error) {
      console.error("Concierge Chat API error:", error);

      const errorMsg: ChatMessage = {
        sender: "concierge",
        text: t.chat.errorFallback,
        timestamp: currentTimestamp,
      };
      setChatHistory((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(userInput);
  };

  return (
    <div className="py-24 max-w-4xl mx-auto px-4 bg-surface select-text min-h-screen flex flex-col">
      <div className="text-center mb-8">
        <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest font-semibold">{t.chat.eyebrow}</span>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-3">{t.chat.title}</h1>
        <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          {t.chat.subtitle}
        </p>
      </div>

      <div className="flex-1 bg-surface-container border border-surface-container-high rounded shadow-xl flex flex-col overflow-hidden h-[580px]">
        <div className="bg-primary-container p-4 md:px-6 flex justify-between items-center text-on-primary">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-pura-green flex items-center justify-center rounded-full text-on-primary font-semibold text-sm">
                SC
              </div>
              <span className="absolute bottom-0 end-0 w-3 h-3 bg-pura-green border-2 border-primary-container rounded-full" />
            </div>
            <div>
              <h4 className="font-headline-sm text-sm text-on-primary tracking-wide uppercase">{t.chat.conciergeName}</h4>
              <span className="text-[10px] text-gold-soft uppercase tracking-widest font-label-caps">{t.chat.conciergeRole}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-primary/40 px-3 py-1 rounded-full text-[10px] font-label-caps tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-secondary-fixed-dim" /> {t.chat.poweredBy}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface/30">
          {chatHistory.map((msg, i) => {
            const isConcierge = msg.sender === "concierge";
            return (
              <div
                key={i}
                className={`flex gap-4 max-w-3xl ${isConcierge ? "chat-concierge-row me-auto" : "chat-user-row ms-auto"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs shrink-0 select-none ${
                    isConcierge ? "bg-pura-green text-on-primary" : "bg-primary-container text-on-primary"
                  }`}
                >
                  {isConcierge ? "C" : "G"}
                </div>

                <div className="space-y-1 max-w-[85%]">
                  <div
                    className={`p-4 rounded shadow-sm leading-relaxed whitespace-pre-wrap font-body-md text-sm ${
                      isConcierge
                        ? "bg-surface-container text-primary border border-surface-container-high"
                        : "bg-primary text-on-primary"
                    }`}
                  >
                    {msg.text}
                  </div>

                  <span className={`block text-[10px] text-on-surface-variant font-mono ${!isConcierge ? "text-end" : ""}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-4 max-w-xl chat-concierge-row me-auto">
              <div className="w-8 h-8 rounded-full bg-pura-green text-on-primary flex items-center justify-center font-semibold text-xs select-none">
                C
              </div>
              <div className="space-y-1">
                <div className="p-4 bg-surface-container text-primary border border-surface-container-high rounded shadow-sm text-xs italic flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-pura-gold rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-pura-gold rounded-full animate-bounce delay-200" />
                    <span className="w-2 h-2 bg-pura-gold rounded-full animate-bounce delay-300" />
                  </span>
                  {t.chat.loading}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="px-6 py-3 border-t border-surface-container-high bg-surface-container-low flex gap-2.5 overflow-x-auto horizontal-scroll-container">
          <HelpCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
          {t.chat.suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(suggestion)}
              className="text-xs bg-bg-card border border-surface-container-high text-primary hover:border-secondary hover:text-secondary px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm hover:shadow transition-all font-body-md cursor-pointer shrink-0"
              disabled={isLoading}
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form onSubmit={handleFormSubmit} className="p-4 border-t border-surface-container-high bg-surface-container flex gap-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t.chat.placeholder}
            className="flex-1 bg-bg-card border border-surface-container-high rounded px-4 py-3 text-sm font-body-md text-primary focus:outline-none focus:ring-1 focus:ring-pura-green outline-none shadow-inner text-start"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="btn-cta p-3 rounded shadow hover:shadow-lg transition-colors flex items-center justify-center cursor-pointer"
            disabled={isLoading || !userInput.trim()}
          >
            <Send className={`w-4 h-4 ${isRtl ? "scale-x-[-1]" : ""}`} />
          </button>
        </form>
      </div>
    </div>
  );
}
