export type ContentStatus = "confirmed" | "needs_confirmation" | "internal_only";

export type ResortLocale = "en" | "he";

type Localized<T> = Record<ResortLocale, T>;

export const resortPageCopy = {
  hero: {
    eyebrow: { en: "The Resort", he: "הריזורט" },
    titleLine1: { en: "A complete resort experience,", he: "חוויית ריזורט מלאה," },
    titleLine2: { en: "surrounded by nature", he: "מוקפת בטבע" },
    body: {
      en: "Thermal waters, tropical gardens, wellness spaces, waterfalls, and places to gather create a Passover stay with room for every part of the day.",
      he: "מים תרמיים, גנים טרופיים, מרחבי וולנס, מפלים ומקומות להתכנס יוצרים שהיית פסח עם מקום לכל חלק ביום.",
    },
    cta: { en: "Explore the Resort", he: "גלו את הריזורט" },
  },
  highlights: {
    eyebrow: { en: "Resort Highlights", he: "מתקני הריזורט" },
    title: { en: "Space to relax. Plenty to enjoy.", he: "מרחב לנוח. הרבה במה ליהנות." },
    nav: [
      { id: "water", label: { en: "Pools & Thermal Water", he: "בריכות ומים תרמיים" } },
      { id: "agua-caliente", label: { en: "Agua Caliente", he: "אגווה קליינטה" } },
      { id: "spa", label: { en: "Spa & Wellness", he: "ספא ווולנס" } },
      { id: "nature", label: { en: "Waterfalls & Lake", he: "מפלים ואגם" } },
      { id: "prayer", label: { en: "Prayer & Gathering", he: "תפילה והתכנסות" } },
      { id: "events", label: { en: "Events & Activities", he: "אירועים ופעילויות" } },
      { id: "amenities", label: { en: "Guest Amenities", he: "שירותי אירוח" } },
    ],
  },
  water: {
    id: "water",
    eyebrow: { en: "Pools & Thermal Water", he: "בריכות ומים תרמיים" },
    title: { en: "Different ways to enjoy the water", he: "דרכים שונות ליהנות מהמים" },
    description: {
      en: "The resort offers two distinct swimming experiences: a warm thermal-water pool and a refreshing cold-water pool. Six smaller thermal pools create additional places to slow down, unwind, and enjoy the surrounding tropical gardens.",
      he: "הריזורט מציע שתי חוויות שחייה שונות: בריכה עם מים תרמיים חמים ובריכה עם מים קרים מרעננים. שש בריכות תרמיות קטנות מוסיפות מקומות להאט, לנוח וליהנות מהגנים הטרופיים.",
    },
    stats: [
      { en: "2 Swimming Pools", he: "2 בריכות שחייה" },
      { en: "6 Thermal Mini Pools", he: "6 בריכות תרמיות קטנות" },
      { en: "Warm & Cold Water", he: "מים חמים וקרים" },
    ],
    image: "/images/passover/resort/pool-main-8k.jpg",
    imageAlt: {
      en: "Swimming pool surrounded by tropical gardens at Pura Shalom",
      he: "בריכת שחייה מוקפת גנים טרופיים בפורה שלום",
    },
    status: "confirmed" as const,
  },
  aguaCaliente: {
    id: "agua-caliente",
    eyebrow: { en: "Agua Caliente", he: "אגווה קליינטה" },
    title: {
      en: "Natural thermal waters of Cartago",
      he: "מים תרמיים טבעיים של קרטגו",
    },
    description: {
      en: "Agua Caliente is the historic name for Cartago’s natural thermal mineral waters — among the earliest spa traditions in Costa Rica. Set in this highland landscape, the resort continues that living-water experience with warm thermal pools surrounded by tropical gardens.",
      he: "אגווה קליינטה הוא השם ההיסטורי למים המינרליים התרמיים של קרטגו — אחת ממסורות הספא הקדומות בקוסטה ריקה. הריזורט שוכן בנוף ההררי הזה וממשיך את חוויית המים החיים עם בריכות תרמיות חמות בין גנים טרופיים.",
    },
    details: [
      {
        en: "Historic thermal mineral springs of the Cartago region",
        he: "מעיינות תרמיים מינרליים היסטוריים באזור קרטגו",
      },
      {
        en: "Warm living water for rest and renewal",
        he: "מים חיים חמים למנוחה ולהתחדשות",
      },
      {
        en: "A natural part of the highland Passover stay",
        he: "חלק טבעי משהיית הפסח בהרים",
      },
    ],
    image: "/images/passover/resort/thermal-mini-pool.webp",
    imageAlt: {
      en: "Small thermal pool set among tropical forest and flowing water",
      he: "בריכה תרמית קטנה בין יער טרופי ומים זורמים",
    },
    status: "confirmed" as const,
  },
  spa: {
    id: "spa",
    eyebrow: { en: "Spa & Wellness", he: "ספא ווולנס" },
    title: { en: "Time to slow down", he: "זמן להאט" },
    description: {
      en: "The resort’s wellness facilities include treatment and massage rooms, a sauna, and a Turkish bath. Together, they create a calm setting for rest and renewal throughout the holiday.",
      he: "מתקני הוולנס כוללים חדרי עיסוי וטיפולים, סאונה וחמאם טורקי. יחד הם יוצרים סביבה רגועה למנוחה ולהתחדשות לאורך החג.",
    },
    details: [
      { en: "Massage & Treatment Rooms", he: "חדרי עיסוי וטיפולים" },
      { en: "Sauna", he: "סאונה" },
      { en: "Turkish Bath", he: "חמאם טורקי" },
      { en: "Quiet Wellness Areas", he: "אזורי וולנס שקטים" },
    ],
    image: "/images/passover/resort/spa-building.webp",
    imageAlt: {
      en: "Spa building with arched entrances set in tropical gardens",
      he: "מבנה הספא עם כניסות מקושתות בין גנים טרופיים",
    },
    status: "confirmed" as const,
  },
  nature: {
    id: "nature",
    eyebrow: { en: "Nature & Outdoor Life", he: "טבע וחיים בחוץ" },
    title: { en: "Nature is part of the resort", he: "הטבע הוא חלק מהריזורט" },
    description: {
      en: "Tropical gardens, mountain trails, natural waterfalls, and a peaceful lake shape the experience throughout the property. Guests can explore, pause, and spend time outdoors without leaving the resort setting.",
      he: "גנים טרופיים, שבילי הרים, מפלים טבעיים ואגם שקט מעצבים את החוויה בכל שטח הריזורט. אפשר לחקור, לעצור ולבלות בחוץ בלי לצאת ממסגרת המלון.",
    },
    foci: [
      {
        id: "waterfalls",
        title: { en: "Natural Waterfalls", he: "מפלים טבעיים" },
        body: {
          en: "Flowing water and lush vegetation create one of the resort’s most distinctive natural settings.",
          he: "מים זורמים וצמחייה עשירה יוצרים אחד מהנופים הטבעיים הייחודיים של הריזורט.",
        },
        image: "/images/passover/resort/resort-waterfall.webp",
        imageAlt: {
          en: "Natural waterfall surrounded by moss and tropical foliage",
          he: "מפל טבעי מוקף טחב וצמחייה טרופית",
        },
      },
      {
        id: "lake",
        title: { en: "Lake & Sport Fishing", he: "אגם ודיג ספורטיבי" },
        body: {
          en: "The resort lake offers a peaceful outdoor setting, with sport fishing available as part of the property’s leisure experience.",
          he: "אגם הריזורט מציע מרחב חיצוני שקט, עם אפשרות לדיג ספורטיבי כחלק מחוויית הפנאי במקום.",
        },
        image: "/images/passover/resort/resort-lake.webp",
        imageAlt: {
          en: "Resort lake with walking path and mountain forest beyond",
          he: "אגם הריזורט עם שביל הליכה ויער הרים ברקע",
        },
      },
      {
        id: "gardens",
        title: { en: "Gardens & Trails", he: "גנים ושבילים" },
        body: {
          en: "Landscaped gardens, tropical paths, and mountain scenery connect the different areas of the resort.",
          he: "גנים מטופחים, שבילים טרופיים ונופי הרים מחברים בין אזורי הריזורט.",
        },
        image: "/images/passover/resort/resort-gardens.webp",
        imageAlt: {
          en: "Tropical gardens and cabin beside a quiet garden pond",
          he: "גנים טרופיים ובקתה ליד בריכת גן שקטה",
        },
      },
    ],
    status: "confirmed" as const,
  },
  prayer: {
    id: "prayer",
    eyebrow: { en: "Prayer & Community", he: "תפילה וקהילה" },
    title: {
      en: "Space for prayer, learning, and connection",
      he: "מרחב לתפילה, לימוד וחיבור",
    },
    description: {
      en: "A dedicated prayer and meditation centre provides space for up to 120 guests, creating a natural home for daily services, learning, and moments of reflection throughout Passover.",
      he: "מרכז תפילה ומדיטציה ייעודי מציע מקום לכ־120 אורחים — בית טבעי לתפילות יומיות, לימוד ורגעי התבוננות לאורך הפסח.",
    },
    details: [
      { en: "Prayer & Meditation Centre", he: "מרכז תפילה ומדיטציה" },
      { en: "Space for up to 120 guests", he: "מקום לכ־120 אורחים" },
      {
        en: "Suitable for services, learning, and community gatherings",
        he: "מתאים לתפילות, לימוד והתכנסויות קהילתיות",
      },
    ],
    status: "confirmed" as const,
  },
  events: {
    id: "events",
    eyebrow: { en: "Events & Program", he: "אירועים ותוכנית" },
    title: {
      en: "Designed for a full holiday program",
      he: "מתוכנן לתוכנית חג מלאה",
    },
    description: {
      en: "The resort includes a conference centre for up to 130 guests, an outdoor stage, and flexible gathering areas for lectures, performances, activities, and evening programs.",
      he: "הריזורט כולל מרכז כנסים לכ־130 אורחים, במה חיצונית ואזורי התכנסות גמישים להרצאות, הופעות, פעילויות ותוכניות ערב.",
    },
    items: [
      {
        title: { en: "Conference Centre", he: "מרכז כנסים" },
        body: { en: "Capacity for up to 130 guests", he: "קיבולת לכ־130 אורחים" },
      },
      {
        title: { en: "Outdoor Stage", he: "במה חיצונית" },
        body: {
          en: "A dedicated setting for performances and evening programs",
          he: "מקום ייעודי להופעות ולתוכניות ערב",
        },
      },
      {
        title: { en: "Gathering Spaces", he: "מרחבי התכנסות" },
        body: {
          en: "Indoor and outdoor areas for activities and time together",
          he: "חללים בפנים ובחוץ לפעילויות ולזמן משותף",
        },
      },
    ],
    image: "/images/passover/resort/conference-centre.webp",
    imageAlt: {
      en: "Covered gathering hall with timber beams and stone flooring",
      he: "אולם התכנסות מקורה עם קורות עץ ורצפת אבן",
    },
    status: "confirmed" as const,
  },
  activities: {
    id: "activities",
    eyebrow: { en: "At Your Own Pace", he: "בקצב שלכם" },
    title: { en: "Move, explore, or simply pause", he: "לנוע, לחקור, או פשוט לעצור" },
    description: {
      en: "The day can be as active or as quiet as you choose, with outdoor experiences and peaceful spaces available across the resort.",
      he: "היום יכול להיות פעיל או שקט — לפי הבחירה שלכם — עם חוויות בחוץ ומרחבים רגועים בכל הריזורט.",
    },
    items: [
      { en: "Agua Caliente thermal springs", he: "מעיינות אגווה קליינטה" },
      { en: "Yoga Areas", he: "אזורי יוגה" },
      { en: "Sport Fishing", he: "דיג ספורטיבי" },
      { en: "Nature Walks", he: "הליכות בטבע" },
      { en: "Waterfall Visits", he: "ביקור במפלים" },
      { en: "Meditation Spaces", he: "אזורי מדיטציה" },
      { en: "Garden Paths", he: "שבילי גן" },
      { en: "Outdoor Relaxation Areas", he: "אזורי מנוחה בחוץ" },
      { en: "Birdwatching", he: "צפייה בציפורים" },
    ],
    status: "confirmed" as const,
  },
  amenities: {
    id: "amenities",
    eyebrow: { en: "Resort Amenities", he: "שירותי הריזורט" },
    title: { en: "Everything within reach", he: "הכול בהישג יד" },
    description: {
      en: "The resort brings together the practical comforts and shared spaces needed for a complete Passover stay.",
      he: "הריזורט מאגד נוחות מעשית ומרחבים משותפים לשהיית פסח מלאה.",
    },
    items: [
      { title: { en: "WiFi throughout the resort", he: "WiFi ברחבי הריזורט" } },
      { title: { en: "On-site reception", he: "קבלה פעילה בשטח" } },
      { title: { en: "Guest parking", he: "חניה לאורחים" } },
      {
        title: { en: "Two central dining spaces", he: "שני חללי אוכל מרכזיים" },
        body: {
          en: "Additional hospitality areas support the Passover dining program.",
          he: "אזורי אירוח נוספים תומכים בתוכנית האוכל של הפסח.",
        },
      },
      { title: { en: "Poolside hospitality areas", he: "אזורי אירוח ליד הבריכה" } },
      { title: { en: "Indoor gathering spaces", he: "מרחבי התכנסות מקורים" } },
      { title: { en: "Outdoor gathering spaces", he: "מרחבי התכנסות בחוץ" } },
      { title: { en: "Relaxation and meditation areas", he: "אזורי מנוחה ומדיטציה" } },
      {
        title: { en: "Dining & Hospitality Spaces", he: "חללי אוכל ואירוח" },
        body: {
          en: "Two central dining spaces and additional hospitality areas support the resort’s full Passover dining program.",
          he: "שני חללי אוכל מרכזיים ואזורי אירוח נוספים תומכים בתוכנית האוכל המלאה של הפסח.",
        },
        linkLabel: { en: "Explore Passover Dining", he: "לעמוד האוכל של הפסח" },
        linkTo: "/dining",
      },
    ],
    status: "confirmed" as const,
  },
} as const;

export function loc<T>(value: Localized<T>, language: ResortLocale): T {
  return value[language] ?? value.en;
}

/** Flat inventory for verification — all shown on /year-round */
export const resortFacilitiesShown = [
  "Agua Caliente historic thermal mineral waters (Cartago region)",
  "2 swimming pools (warm thermal + cold)",
  "6 thermal mini pools",
  "Spa centre",
  "Sauna",
  "Massage & treatment rooms",
  "Turkish bath",
  "Natural waterfalls",
  "Lake",
  "Sport fishing",
  "Nature trails",
  "Tropical gardens",
  "Relaxation & meditation areas",
  "Prayer & meditation centre (~120)",
  "Conference centre (~130)",
  "Outdoor stage",
  "Yoga areas",
  "Two central dining spaces",
  "Poolside hospitality areas",
  "WiFi throughout",
  "On-site reception",
  "Guest parking",
  "Birdwatching / local vegetation",
  "Indoor & outdoor public gathering spaces",
] as const;
