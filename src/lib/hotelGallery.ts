import type { Language } from "../content/siteContent";

export type GalleryImage = {
  src: string;
  alt: { en: string; he: string };
  objectPosition?: string;
};

const GALLERY_BASE = "/images/hotel-gallery";

export const hotelGallery = {
  palmCanopyEntrance: {
    src: `${GALLERY_BASE}/palm-canopy-entrance-driveway.webp`,
    alt: {
      en: "Private palm-lined entrance driveway at a luxury mountain retreat",
      he: "שביל כניסה פרטי מוקף דקלים בריטריט יוקרתי בהרים",
    },
    objectPosition: "center 40%",
  },
  tropicalResortArrival: {
    src: `${GALLERY_BASE}/tropical-resort-arrival-driveway.webp`,
    alt: {
      en: "Tropical resort arrival driveway through lush palm gardens",
      he: "שביל הגעה לריזורט טרופי בין גני דקלים ירוקים",
    },
    objectPosition: "center center",
  },
  rainforestDiningPavilion: {
    src: `${GALLERY_BASE}/rainforest-dining-pavilion.webp`,
    alt: {
      en: "Rainforest dining pavilion with warm lighting and tropical surroundings",
      he: "פאביליון אוכל ביער הגשם עם תאורה חמה וסביבה טרופית",
    },
    objectPosition: "center 35%",
  },
  jungleVerandaMountainView: {
    src: `${GALLERY_BASE}/jungle-veranda-mountain-view.webp`,
    alt: {
      en: "Wooden veranda overlooking lush jungle valleys and mountain horizons",
      he: "ורנדה מעץ עם נוף לעמקי ג'ונגל ירוקים ואופק הררי",
    },
    objectPosition: "center center",
  },
  privateVillaGardenEntrance: {
    src: `${GALLERY_BASE}/private-villa-garden-entrance.webp`,
    alt: {
      en: "Private white villa entrance with manicured tropical garden",
      he: "כניסה לווילה לבנה פרטית עם גינה טרופית מטופחת",
    },
    objectPosition: "center 30%",
  },
  luxuryVillaGardenPathway: {
    src: `${GALLERY_BASE}/luxury-villa-garden-pathway.webp`,
    alt: {
      en: "Stone pathway between luxury villas in a tropical mountain garden",
      he: "שביל אבן בין וילות יוקרה בגינה טרופית בהרים",
    },
    objectPosition: "center center",
  },
  tropicalPoolRetreat: {
    src: `${GALLERY_BASE}/tropical-pool-retreat.webp`,
    alt: {
      en: "Secluded tropical pool surrounded by rainforest greenery",
      he: "בריכה טרופית מבודדת מוקפת בצמחייה של יער הגשם",
    },
    objectPosition: "center 40%",
  },
  resortPoolLoungeDeck: {
    src: `${GALLERY_BASE}/resort-pool-lounge-deck.webp`,
    alt: {
      en: "Resort pool with lounge chairs, stone deck, and mountain villas beyond",
      he: "בריכת הריזורט עם מיטות שיזוף, דק אבן ווילות בהרים ברקע",
    },
    objectPosition: "center 45%",
  },
  poolMain: {
    src: "/images/passover/resort/pool-main-8k.jpg",
    alt: {
      en: "Swimming pool surrounded by tropical gardens at Pura Shalom",
      he: "בריכת שחייה מוקפת גנים טרופיים בפורה שלום",
    },
    objectPosition: "center 42%",
  },
  kosherOutdoorDiningTerrace: {
    src: `${GALLERY_BASE}/kosher-outdoor-dining-terrace.webp`,
    alt: {
      en: "Outdoor kosher dining terrace with lantern light and rainforest views",
      he: "מרפסת אוכל כשר חיצונית עם תאורת פנסים ונוף ליער הגשם",
    },
    objectPosition: "center center",
  },
  rainforestCoveredWalkway: {
    src: `${GALLERY_BASE}/rainforest-covered-walkway.webp`,
    alt: {
      en: "Covered wooden walkway through a tranquil Costa Rica rainforest",
      he: "גשר מקורה מעץ בשביל שקט ביער הגשם של קוסטה ריקה",
    },
    objectPosition: "center center",
  },
  tropicalJungleWaterfall: {
    src: `${GALLERY_BASE}/tropical-jungle-waterfall.webp`,
    alt: {
      en: "Hidden tropical waterfall in a lush Costa Rica jungle",
      he: "מפל טרופי נסתר ביער הגשם הפורה של קוסטה ריקה",
    },
    objectPosition: "center 35%",
  },
  whiteBungalowGardenPath: {
    src: `${GALLERY_BASE}/white-bungalow-garden-path.webp`,
    alt: {
      en: "White guest bungalow with terracotta path through tropical palms",
      he: "בקתת אורחים לבנה עם שביל טרקוטה בין דקלים טרופיים",
    },
    objectPosition: "center center",
  },
  suiteBalconyJungleView: {
    src: `${GALLERY_BASE}/suite-balcony-jungle-view.webp`,
    alt: {
      en: "Private suite balcony overlooking dense Costa Rican jungle",
      he: "מרפסת סוויטה פרטית עם נוף ליער הגשם של קוסטה ריקה",
    },
    objectPosition: "center center",
  },
  bungalowStoneRampEntrance: {
    src: `${GALLERY_BASE}/bungalow-stone-ramp-entrance.webp`,
    alt: {
      en: "White bungalow entrance with stone ramp and garden greenery",
      he: "כניסה לבקתה לבנה עם רמפת אבן וגינה ירוקה",
    },
    objectPosition: "center 40%",
  },
  indoorDiningArchedWindows: {
    src: `${GALLERY_BASE}/indoor-dining-arched-windows.webp`,
    alt: {
      en: "Bright resort dining room with arched windows and tropical garden views",
      he: "חדר אוכל מואר בריזורט עם חלונות מקושתים ונוף לגן טרופי",
    },
    objectPosition: "center center",
  },
  pondCabinTropicalGardens: {
    src: `${GALLERY_BASE}/pond-cabin-tropical-gardens.webp`,
    alt: {
      en: "Wood cabin beside a garden pond framed by tropical highland foliage",
      he: "בקתה מעץ ליד בריכת גן מוקפת צמחייה טרופית בהרים",
    },
    objectPosition: "center center",
  },
  mountainVillaDriveway: {
    src: `${GALLERY_BASE}/mountain-villa-driveway.webp`,
    alt: {
      en: "Mountain villa with driveway set against a steep Costa Rican hillside",
      he: "וילה בהרים עם שביל כניסה מול מדרון ירוק בקוסטה ריקה",
    },
    objectPosition: "center 40%",
  },
} as const satisfies Record<string, GalleryImage>;

export function galleryAlt(image: GalleryImage, language: Language): string {
  return image.alt[language];
}
