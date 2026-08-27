import { RoomOption, ActivityOption } from "./types";
import { maxQualityImageUrl } from "./lib/imageQuality";

const hq = maxQualityImageUrl;

export const ROOM_OPTIONS: RoomOption[] = [
  {
    id: "panorama-villa",
    name: "The Panorama Villa",
    category: "Villa Collection",
    description: "4-Bedroom architectural masterpiece with high-vaulted cedar ceilings, breathtaking volcano views, a private heated plunge pool, and a fully equipped kosher kitchenette with double sinks.",
    pricePerNight: 1250,
    maxGuests: 10,
    imageUrl: hq("https://lh3.googleusercontent.com/aida-public/AB6AXuC2V45QNe6DQ1DEDmLO7m8jPqLG58f0avovDMayKnWhV-kiKdgcH3gctFSmZyumpxchvrUq_A1EAAQwt_RA7hVRY-IYrpugqrPNUaNGZKSsm4rpcJD-EM_VqxvDkaIluHdG2GenbiMJP63PAezahoHJGWbHzaSzhJ6dAHCxmFJO68FK9r74O8LmEWZHLB4u-i_l5aothd4UnzQ_iZ2BYTTdNQ3mrBozLrFCpw14FOOsOl_sjHOH9EYW6HbLyJWOvoeg6FCSiYaU2bA6"),
    features: ["Private Heated Pool", "Fully Equipped Kosher Kitchen", "Panoramic Balcony", "On-site Butler", "Shabbat Lamp Configurations"]
  },
  {
    id: "cloud-forest-suite",
    name: "Cloud Forest Suite",
    category: "Suites",
    description: "An intimate, quiet retreat for couples featuring high-quality oak and linen textures, a private outdoor rain shower, and an expansive garden terrace directly overlooking the valley.",
    pricePerNight: 620,
    maxGuests: 2,
    imageUrl: hq("https://lh3.googleusercontent.com/aida-public/AB6AXuAq8g4bRQ6vFRjsbXZ3L3POEB9Kj3NR4niDIuQeOi9gxE6N5GTSmIGKmmYLKz--LxYDeBRj4QmlctqS4DFm33ZWRAXncSb9UU65FQzf1VCPC_zCp5rdU9Xm1PP9YfZBcF7AswJkZGFslA21FPX4FjTZZedmSi6QIWSbs35HdGpNrLlg66yUYwbh6f8jabR6SL7V8XEwqUJIzjO2SzdxivQVRivPDC7ARCpsqvZ20pFUxEy03VpnSUyr9XCc8WW-ivkmUTWpe-dPVONZ"),
    features: ["Private Garden Terrace", "Outdoor Rain Shower", "Separable Twin/King Bedding", "Premium Kosher Espresso Bar", "Luxury Linen Linings"]
  }
];

export const ACTIVITY_OPTIONS: ActivityOption[] = [
  {
    id: "volcano",
    name: "Irazú Volcano Expedition",
    price: 180,
    description: "Guided private tour exploring the breathtaking active crater, volcanic ash fields, and misty peak heights of Cartago, with custom packed Glatt Kosher lunch boxes.",
    imageUrl: hq("https://lh3.googleusercontent.com/aida-public/AB6AXuANK9rsm8K6n4iL8wxPtoOT7EYvCCAqOx4VTGvmHMhgu_KtvCByYw-Q-ggAGyAczCWMbtTPMUUAXFB7-7uNy2SmVAboJaL8pr2X4LCM7K9Y9KdISHfx4Xu_pilN_Ex_kte08-ayznqSyjJ-Cd6aRSucbjn6tuP1COj-Lls9X1r1tnTN0is1kDq6dXqH9SQ41cfvQzsxz5SubN4jXQV1ngBpzRdWm2OW7Tq7jJIkrad8kHJU_ak4PNPTySJb6Sr5qQ9bb3ueIih-TljQ"),
    isPrivate: true,
    category: "Adventure"
  },
  {
    id: "waterfalls",
    name: "Secret Rainforest Waterfalls Hike",
    price: 120,
    description: "Explore hidden lush cascades plunging into vibrant turquoise pools, accompanied by professional naturalists. Includes customized paths based on guest stamina.",
    imageUrl: hq("https://lh3.googleusercontent.com/aida-public/AB6AXuD2hNA9HeAmj4BqPhOwLQC1eRoWfAxzou_4T_xg-zqlhGwXDqD5U0UyixRDImGgg5Gn8Wa4QpUwepAG-XVOA9TQTOiKv4sa14heW7Z7jEyTqdO_3D3bdH2g3jzU1Oybii8L2j4K6CHs4GTlaX1zDXD54D0zr3dJ4kNxecfKhWUTGFCyQb9CgQj5OqGzTCfZM88Fr3b5h9KIA8i37ASqmtHw_nXVmC8JXw8LpkZsbKRhs8uS_Yop9NVb1QFzc9Pmfu65i-dONxI4Ns48"),
    isPrivate: true,
    category: "Nature"
  },
  {
    id: "canopy",
    name: "Jungle Canopy Zipline Tour",
    price: 150,
    description: "Fly securely above the cloud forest canopies. Exceptional safety measures and breathtaking birds-eye views of the emerald-colored valley below.",
    imageUrl: hq("https://lh3.googleusercontent.com/aida-public/AB6AXuC_v3ha99zBFSjQZsZlsg0p_pNYNbZhG1k3GBL4n_7XWqjSl8Yq1B8uvvr-UUy2rnJ1PUj7Ohy2UWUBakA0dAtH6jxyTx8ohBzA4Xi7hVoaSuI-ERr1hdV4qn_8KL4toFiXeW3NHDQbp7lE0-yxR2oyxRt0uijKu4-1lcUqlrkObsK8ZZi2b536DBNAJMfNYeSUlinHzSkwTL-wk6DSole-AzuR6Ko2pJ1bRgh0NLXFe_aUTV0ePlwkVhgvH3coeTONwJBTARtyClUf"),
    isPrivate: false,
    category: "Adrenaline"
  },
  {
    id: "sunset-sail",
    name: "Private Sunset Catamaran Cruise",
    price: 290,
    description: "Settle onto clean teak decks of a private luxury yacht at sunset. Includes complete on-board Glatt Kosher hors d'oeuvres and wine pairing options.",
    imageUrl: hq("https://lh3.googleusercontent.com/aida-public/AB6AXuBW57tk1v5yYmILjD_TFfPcoSqflF_I1DJ6gz9AdAdu_KSHbd-faNxN5qDhJ3_BvicK3FogMPsUCvIKQxuTRxtQ9IJ3wtyDg0U8qXkJWu-nPrMAunOxWx0Q5xJ3vCB2a_hwXKvQP0YkvrIbQn4gyet4IdC-Ol3o_L4C482SiJ3tD7F2UZAFUYdtH0yIZHPLwMpkn-1Y_D6N8TFVEaSuuCJ6EcAWEGmB9k6ke9PG4JZnhLsmpO8GPjK7dXzN8iZLPe8xNmPA5uFlP7b3"),
    isPrivate: true,
    category: "Leisure"
  }
];

export const KASHRUT_TIERS = [
  { id: "glatt-standard", name: "Glatt Kosher (CRC / OU)", description: "Full Mashgiach Temidi, Pas Yisrael, Chalav Yisrael standard." },
  { id: "beit-yosef", name: "Beit Yosef Standard", description: "Strict Sephardic Beit Yosef meat standards under high supervision." },
  { id: "chassidish", name: "Chassidishe Shechita / Super-Strict", description: "Highest Hassidishe kashrut standards, custom hashgacha verification." }
];

export const FAMILY_SERVICES = [
  { id: "kids-camp", name: "Rainforest Kid's Camp", pricePerDay: 45, icon: "child_care", description: "Guided butterfly hikes, botanical art, and tropical nature exploration." },
  { id: "nanny", name: "Private Nanny Service", pricePerDay: 80, icon: "family_restroom", description: "On-demand, professionally trained luxury childcare." },
  { id: "teen-lounge", name: "Teen Lounge Access", pricePerDay: 20, icon: "sports_esports", description: "Billiards, arcade, gaming consoles, and guided teen hiking treks." }
];
