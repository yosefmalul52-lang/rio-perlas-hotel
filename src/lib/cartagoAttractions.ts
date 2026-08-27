/** Cartago-area attraction images (Wikimedia Commons, stored locally). */
export const cartagoAttractionImages = {
  irazu: "/images/cartago-attractions/irazu-volcano.webp",
  turrialba: "/images/cartago-attractions/turrialba-volcano.webp",
  orosiValley: "/images/cartago-attractions/orosi-valley.webp",
  basilica: "/images/cartago-attractions/basilica-cartago.webp",
  lankester: "/images/cartago-attractions/lankester-garden.webp",
  guayabo: "/images/cartago-attractions/guayabo.webp",
  ujarras: "/images/cartago-attractions/ujarras-ruins.webp",
  lakeCachi: "/images/cartago-attractions/lake-cachi.webp",
  orosiChurch: "/images/cartago-attractions/orosi-church.webp",
  lasRuinas: "/images/cartago-attractions/las-ruinas-cartago.webp",
  tapanti: "/images/cartago-attractions/tapanti-park.webp",
  catie: "/images/cartago-attractions/catie-turrialba.webp",
} as const;

export type CartagoAttractionId = keyof typeof cartagoAttractionImages;

/** Google Maps search links — location + place info for each attraction. */
export const cartagoAttractionGoogleMaps: Record<CartagoAttractionId, string> = {
  irazu:
    "https://www.google.com/maps/search/?api=1&query=Parque%20Nacional%20Volc%C3%A1n%20Iraz%C3%BA%20Cartago%20Costa%20Rica",
  turrialba:
    "https://www.google.com/maps/search/?api=1&query=Parque%20Nacional%20Volc%C3%A1n%20Turrialba%20Costa%20Rica",
  orosiValley:
    "https://www.google.com/maps/search/?api=1&query=Valle%20de%20Orosi%20Cartago%20Costa%20Rica",
  basilica:
    "https://www.google.com/maps/search/?api=1&query=Bas%C3%ADlica%20de%20Nuestra%20Se%C3%B1ora%20de%20los%20%C3%81ngeles%20Cartago%20Costa%20Rica",
  lankester:
    "https://www.google.com/maps/search/?api=1&query=Jard%C3%ADn%20Bot%C3%A1nico%20Lankester%20Para%C3%ADso%20Cartago%20Costa%20Rica",
  guayabo:
    "https://www.google.com/maps/search/?api=1&query=Monumento%20Nacional%20Guayabo%20Turrialba%20Costa%20Rica",
  ujarras:
    "https://www.google.com/maps/search/?api=1&query=Ruinas%20de%20Ujarr%C3%A1s%20Cartago%20Costa%20Rica",
  lakeCachi:
    "https://www.google.com/maps/search/?api=1&query=Lago%20Cach%C3%AD%20Orosi%20Cartago%20Costa%20Rica",
  orosiChurch:
    "https://www.google.com/maps/search/?api=1&query=Iglesia%20Colonial%20de%20Orosi%20Cartago%20Costa%20Rica",
  lasRuinas:
    "https://www.google.com/maps/search/?api=1&query=Ruinas%20de%20la%20Parroquia%20Santiago%20Ap%C3%B3stol%20Cartago%20Costa%20Rica",
  tapanti:
    "https://www.google.com/maps/search/?api=1&query=Parque%20Nacional%20Tapant%C3%AD%20Macizo%20de%20la%20Muerte%20Cartago%20Costa%20Rica",
  catie:
    "https://www.google.com/maps/search/?api=1&query=CATIE%20Turrialba%20Cartago%20Costa%20Rica",
};
