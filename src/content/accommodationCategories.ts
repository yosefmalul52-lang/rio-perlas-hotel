/**
 * Shared accommodation inventory for /rooms.
 * UI renders only status: "confirmed".
 * needs_confirmation entries stay in data for internal tracking.
 *
 * ---------------------------------------------------------------------------
 * PRIVATE CONTENT NOTE — not shown on the website
 *
 * Information still required from the property:
 * • Air conditioning or ceiling fans
 * • WiFi
 * • Television
 * • Minibar or refrigerator
 * • Kettle or coffee machine
 * • Safe
 * • Hairdryer and bathroom products
 * • Wardrobe or storage
 * • Desk or seating area
 * • Balcony, patio or terrace
 * • Kitchen or kitchenette
 * • Number of bedrooms and bathrooms
 * • Maximum guest capacity
 * • Accessibility features
 * • Housekeeping frequency
 *
 * Until these details are confirmed, do not present them as facts anywhere
 * on the website. Keep `equipment` empty until the hotel confirms items.
 * ---------------------------------------------------------------------------
 */

export type AccommodationStatus = "confirmed" | "needs_confirmation";

export type AccommodationDetailIcon =
  | "count"
  | "bed"
  | "bathroom"
  | "layout"
  | "setting";

export type LocalizedText = { en: string; he: string };

export type AccommodationImage = {
  src: string;
  alt: LocalizedText;
  objectPosition?: string;
};

export type AccommodationDetailItem = {
  icon: AccommodationDetailIcon;
  label: LocalizedText;
};

export type AccommodationCategory = {
  id: string;
  status: AccommodationStatus;
  navLabel: LocalizedText;
  title: LocalizedText;
  count: number;
  countLabel: LocalizedText;
  /** Verified description — one paragraph. */
  description: LocalizedText;
  /** Structural / inventory facts shown under Accommodation Details. */
  accommodationDetails: readonly AccommodationDetailItem[];
  /**
   * Confirmed in-room features only (beds, bathrooms when verified).
   * Do not use for assumed amenities. Empty = section hidden.
   */
  verifiedFeatures: readonly AccommodationDetailItem[];
  /**
   * Confirmed equipment only. Never fill with assumptions.
   * Empty = Equipment section hidden.
   */
  equipment: readonly LocalizedText[];
  layoutNotes?: LocalizedText;
  confirmationNote?: LocalizedText;
  images: readonly AccommodationImage[];
};

export const accommodationCategories: readonly AccommodationCategory[] = [
  {
    id: "wood-cabins",
    status: "confirmed",
    navLabel: { en: "Cabins", he: "בקתות" },
    title: { en: "Mountain-Side Wood Cabins", he: "בקתות עץ בצלע ההר" },
    count: 11,
    countLabel: { en: "11 cabins", he: "11 בקתות" },
    description: {
      en: "Eleven wooden cabins are positioned along the mountainside, surrounded by dense tropical vegetation and the quieter natural atmosphere of the property. Their wooden construction and hillside location give this category a character that is different from the resort’s rooms, suites and villas.",
      he: "אחת־עשרה בקתות עץ ממוקמות לאורך צלע ההר, מוקפות בצמחייה טרופית צפופה ובאווירה הטבעית השקטה יותר של הנכס. הבנייה מעץ והמיקום על המדרון מעניקים לקטגוריה אופי שונה מזה של החדרים, הסוויטות והווילות במתחם.",
    },
    accommodationDetails: [
      { icon: "count", label: { en: "Eleven wooden cabins", he: "אחת־עשרה בקתות עץ" } },
      {
        icon: "setting",
        label: {
          en: "Positioned along the mountainside",
          he: "ממוקמות לאורך צלע ההר",
        },
      },
      { icon: "layout", label: { en: "Wooden construction", he: "בנייה מעץ" } },
      {
        icon: "setting",
        label: {
          en: "Surrounded by dense tropical vegetation",
          he: "מוקפות בצמחייה טרופית צפופה",
        },
      },
      {
        icon: "setting",
        label: {
          en: "Quieter natural setting",
          he: "סביבה טבעית שקטה יותר",
        },
      },
    ],
    verifiedFeatures: [],
    equipment: [],
    confirmationNote: {
      en: "Cabin layout, bed configuration and room features are available upon request.",
      he: "פריסת הבקתה, תצורת המיטה ומאפייני החדר זמינים לפי בקשה.",
    },
    images: [
      {
        src: "/images/passover/accommodations/wood-cabins/wood-cabin-exterior-hillside-01.webp",
        alt: {
          en: "Wooden cabin with wraparound porch set into a lush tropical hillside",
          he: "בקתת עץ עם מרפסת היקפית על מדרון טרופי ירוק",
        },
        objectPosition: "center center",
      },
      {
        src: "/images/passover/accommodations/wood-cabins/room-interior-bedroom-02.webp",
        alt: {
          en: "Cabin bedroom with vaulted wood ceiling and an open doorway to the outdoors",
          he: "חדר שינה בבקתה עם תקרת עץ מקומרת ודלת הפתוחה החוצה",
        },
        objectPosition: "center center",
      },
    ],
  },
  {
    id: "standard-rooms",
    status: "confirmed",
    navLabel: { en: "Rooms", he: "חדרים" },
    title: { en: "Standard Rooms", he: "חדרים סטנדרטיים" },
    count: 6,
    countLabel: { en: "6 rooms", he: "6 חדרים" },
    description: {
      en: "Designed for a comfortable and uncomplicated stay, the Standard Rooms provide a practical base for guests who want to enjoy the resort’s gardens, mountain air, and peaceful surroundings. Each room includes a queen-size bed and a private bathroom.",
      he: "החדרים הסטנדרטיים מציעים בסיס נוח ופשוט לאורחים שרוצים ליהנות מהגנים, מאוויר ההרים ומהסביבה השקטה של המתחם. בכל חדר יש מיטת קווין וחדר רחצה פרטי.",
    },
    accommodationDetails: [
      { icon: "count", label: { en: "Six standard rooms", he: "שישה חדרים סטנדרטיים" } },
      { icon: "bed", label: { en: "Queen-size bed", he: "מיטת קווין" } },
      { icon: "bathroom", label: { en: "Private bathroom", he: "חדר רחצה פרטי" } },
      {
        icon: "setting",
        label: {
          en: "Located within the tropical resort grounds",
          he: "ממוקמים בתוך שטחי הריזורט הטרופיים",
        },
      },
    ],
    verifiedFeatures: [],
    equipment: [],
    confirmationNote: {
      en: "Additional in-room equipment is being confirmed with the property.",
      he: "פרטי ציוד נוספים בחדר מאושרים מול הנכס.",
    },
    images: [
      {
        src: "/images/passover/accommodations/standard/standard-room-exterior-row-01.webp",
        alt: {
          en: "Exterior of guest rooms with arched terraces facing a tropical lawn",
          he: "חוץ חדרי אירוח עם מרפסות מקושתות מול מדשאה טרופית",
        },
        objectPosition: "center center",
      },
      {
        src: "/images/passover/accommodations/standard/room-interior-bedroom-01.webp",
        alt: {
          en: "Bedroom interior with wooden ceiling, warm lighting, and a seating area",
          he: "פנים חדר שינה עם תקרת עץ, תאורה חמה ופינת ישיבה",
        },
        objectPosition: "center center",
      },
    ],
  },
  {
    id: "junior-suites",
    status: "confirmed",
    navLabel: { en: "Junior Suites", he: "סוויטות ג׳וניור" },
    title: { en: "Junior Suites", he: "סוויטות ג׳וניור" },
    count: 16,
    countLabel: { en: "16 suites", he: "16 סוויטות" },
    description: {
      en: "The resort includes sixteen Junior Suites arranged across two separate buildings. Each building contains eight suites, with four suites located on each floor. This layout provides a more spacious accommodation category while keeping guests close to the resort’s tropical gardens and shared areas.",
      he: "במתחם יש שש־עשרה סוויטות ג׳וניור, המסודרות בשני מבנים נפרדים. בכל מבנה שמונה סוויטות, וארבע סוויטות בכל קומה. הפריסה מציעה קטגוריית לינה מרווחת יותר, תוך שמירה על קרבה לגנים הטרופיים ולאזורים המשותפים.",
    },
    accommodationDetails: [
      { icon: "count", label: { en: "Sixteen Junior Suites", he: "שש־עשרה סוויטות ג׳וניור" } },
      { icon: "layout", label: { en: "Two accommodation buildings", he: "שני מבני לינה" } },
      { icon: "layout", label: { en: "Eight suites in each building", he: "שמונה סוויטות בכל מבנה" } },
      { icon: "layout", label: { en: "Four suites on each floor", he: "ארבע סוויטות בכל קומה" } },
    ],
    verifiedFeatures: [
      {
        icon: "bed",
        label: {
          en: "Queen-size and king-size bed configurations",
          he: "תצורות מיטה בגודל קווין וקינג",
        },
      },
      {
        icon: "bathroom",
        label: {
          en: "Private bathroom in every suite",
          he: "חדר רחצה פרטי בכל סוויטה",
        },
      },
    ],
    equipment: [],
    confirmationNote: {
      en: "Bed configuration varies by suite and is subject to availability.",
      he: "תצורת המיטה משתנה בין הסוויטות וכפופה לזמינות.",
    },
    images: [
      {
        src: "/images/passover/accommodations/junior-suites/junior-suite-exterior-01.webp",
        alt: {
          en: "Junior suite exterior with arched terrace openings among tropical gardens",
          he: "חוץ סוויטת ג׳וניור עם מרפסת מקושתת בין גנים טרופיים",
        },
        objectPosition: "center center",
      },
      {
        src: "/images/passover/accommodations/junior-suites/junior-suite-bedroom-new-01.webp",
        alt: {
          en: "Junior suite bedroom with vaulted wood ceiling and garden light",
          he: "חדר שינה בסוויטת ג׳וניור עם תקרת עץ מקומרת ואור מהגן",
        },
        objectPosition: "center center",
      },
    ],
  },
  {
    id: "duplex-villas",
    status: "confirmed",
    navLabel: { en: "Duplex Villas", he: "וילות דופלקס" },
    title: { en: "Duplex Villas", he: "וילות דופלקס" },
    count: 18,
    countLabel: { en: "18 villas", he: "18 וילות" },
    description: {
      en: "The eighteen Duplex Villas offer a different style of accommodation, with a two-level layout that creates greater separation between the different parts of the villa. They are suitable for guests who prefer a more spacious setting than a standard hotel room while remaining connected to the wider resort.",
      he: "שמונה־עשרה וילות הדופלקס מציעות סגנון לינה אחר, עם פריסה בשתי קומות שיוצרת הפרדה ברורה יותר בין חלקי הווילה. הן מתאימות לאורחים שמעדיפים מרחב גדול יותר מחדר מלון סטנדרטי, ועדיין נשארים מחוברים למתחם כולו.",
    },
    accommodationDetails: [
      { icon: "count", label: { en: "Eighteen Duplex Villas", he: "שמונה־עשרה וילות דופלקס" } },
      { icon: "layout", label: { en: "Two-level villa layout", he: "פריסת וילה בשתי קומות" } },
      {
        icon: "layout",
        label: {
          en: "More space than the standard room category",
          he: "מרחב גדול יותר מקטגוריית החדרים הסטנדרטיים",
        },
      },
      {
        icon: "setting",
        label: {
          en: "Located within the resort setting",
          he: "ממוקמות בתוך סביבת הריזורט",
        },
      },
    ],
    verifiedFeatures: [
      {
        icon: "bed",
        label: {
          en: "Queen-size and king-size bed configurations",
          he: "תצורות מיטה בגודל קווין וקינג",
        },
      },
      {
        icon: "bathroom",
        label: {
          en: "Private bathroom facilities",
          he: "חדרי רחצה פרטיים",
        },
      },
    ],
    equipment: [],
    confirmationNote: {
      en: "Layout and bed configuration may vary between individual villas.",
      he: "הפריסה ותצורת המיטה עשויות להשתנות בין וילות שונות.",
    },
    images: [
      {
        src: "/images/hotel-gallery/private-villa-garden-entrance.webp",
        alt: {
          en: "Secluded private villa entrance nestled in tropical highland gardens",
          he: "כניסה מבודדת לוילה פרטית בין גנים טרופיים בהרים",
        },
        objectPosition: "center center",
      },
      {
        src: "/images/passover/accommodations/duplex-villas/duplex-villa-bedroom-new-01.webp",
        alt: {
          en: "Duplex villa bedroom with wooden accents and a terrace view",
          he: "חדר שינה בוילת דופלקס עם הדגשי עץ ומבט אל המרפסת",
        },
        objectPosition: "center center",
      },
    ],
  },
  {
    id: "suite-villas",
    status: "confirmed",
    navLabel: { en: "Suite Villas", he: "וילות סוויטה" },
    title: { en: "Suite Villas", he: "וילות סוויטה" },
    count: 9,
    countLabel: { en: "9 villas", he: "9 וילות" },
    description: {
      en: "The resort features nine distinct Suite Villas, each presented as an individual accommodation unit with its own character. Rather than following one identical design, this collection offers a range of villa settings within the resort’s gardens and mountain environment.",
      he: "במתחם תשע וילות סוויטה שונות, שכל אחת מהן מוצגת כיחידת לינה עצמאית עם אופי משלה. במקום עיצוב אחיד, הקטגוריה מציעה מגוון של וילות בתוך הגנים והסביבה ההררית של הריזורט.",
    },
    accommodationDetails: [
      { icon: "count", label: { en: "Nine distinct Suite Villas", he: "תשע וילות סוויטה שונות" } },
      { icon: "layout", label: { en: "Varied villa designs", he: "עיצובי וילה מגוונים" } },
      {
        icon: "setting",
        label: {
          en: "Set within the resort’s tropical environment",
          he: "ממוקמות בסביבה הטרופית של הריזורט",
        },
      },
      {
        icon: "layout",
        label: {
          en: "Individual villa layouts available on request",
          he: "פריסות הווילות זמינות לפי בקשה",
        },
      },
    ],
    verifiedFeatures: [],
    equipment: [],
    confirmationNote: {
      en: "Individual layouts, bed arrangements and room features must be confirmed for the selected villa.",
      he: "יש לאשר פריסה, סידור מיטות ומאפייני חדר עבור הווילה שנבחרה.",
    },
    images: [
      {
        src: "/images/passover/accommodations/suite-villas/suite-villa-exterior-01.webp",
        alt: {
          en: "Suite villa exterior with arched windows and a garden entrance path",
          he: "חוץ וילת סוויטה עם חלונות מקושתים ושביל כניסה בגן",
        },
        objectPosition: "center center",
      },
      {
        src: "/images/passover/accommodations/suite-villas/suite-villa-bedroom-new-01.webp",
        alt: {
          en: "Suite villa bedroom with wooden ceiling and a seating area",
          he: "חדר שינה בוילת סוויטה עם תקרת עץ ופינת ישיבה",
        },
        objectPosition: "center center",
      },
    ],
  },
  {
    id: "additional-king-villa",
    status: "needs_confirmation",
    navLabel: { en: "King-Size Villa Room", he: "חדר וילה קינג" },
    title: { en: "Additional King-Size Villa Room", he: "יחידת וילה נוספת עם מיטת קינג" },
    count: 1,
    countLabel: { en: "1 unit", he: "יחידה אחת" },
    description: {
      en: "An additional villa room with a king-size bed appears in the inventory summary. Unit mapping (possibly 100A) still needs confirmation.",
      he: "בסיכום המלאי מופיעה יחידת וילה נוספת עם מיטת קינג. שיוך היחידה (ייתכן 100A) עדיין דורש אישור.",
    },
    accommodationDetails: [
      { icon: "count", label: { en: "One additional villa room", he: "יחידת וילה נוספת אחת" } },
      { icon: "bed", label: { en: "King-size bed", he: "מיטת קינג" } },
    ],
    verifiedFeatures: [],
    equipment: [],
    confirmationNote: {
      en: "Identity and features pending confirmation with the property.",
      he: "זהות ומאפיינים ממתינים לאישור מול הנכס.",
    },
    images: [],
  }
];

export const confirmedAccommodationCategories = accommodationCategories.filter(
  (category) => category.status === "confirmed",
);
