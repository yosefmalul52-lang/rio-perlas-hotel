export const pagesEn = {
  rooms: {
    hero: {
      eyebrow: "Accommodations",
      titleLine1: "A quiet place to stay",
      titleLine2: "in the Costa Rica hills",
      body: "Rooms, junior suites, villas, and wooden cabins — each with its own pace and privacy, set among the resort’s tropical gardens and mountain air.",
      navLabel: "Browse stays",
    },
    featuresLabel: "Accommodation Details",
    verifiedFeaturesLabel: "Confirmed Room Features",
    equipmentLabel: "Equipment",
    inquireLabel: "Inquire About Availability",
    // Kept for Pesach page cards only — not shown on /rooms.
    includesLabel: "Included",
    idealForLabel: "Ideal for",
    standardsLabel: "Stay standards",
    standards: [
      "Glatt-ready living",
      "Shabbat-friendly lighting & pacing",
      "Concierge help choosing the right category",
    ],
    rooms: [
      {
        id: "luxury-suite",
        name: "Luxury Suite",
        description: "Quiet luxury for couples and small groups. Terrace, calm interiors, valley light.",
        includes: ["King or twin bedding", "Private terrace", "Kosher refreshment station"],
        idealFor: "Couples and small groups",
        image: "/images/hotel-gallery/jungle-veranda-mountain-view.webp",
        imageAlt: "Wooden cabin veranda overlooking lush jungle valleys and mountain horizons",
        imageObjectPosition: "center center",
      },
      {
        id: "family-suite",
        name: "Family Suite",
        description: "Space to gather and rest — sleeping areas that keep family life easy.",
        includes: ["Multiple sleeping areas", "Family lounge", "Child-safe terrace access"],
        idealFor: "Families with children",
        image: "/images/hotel-gallery/luxury-villa-garden-pathway.webp",
        imageAlt: "White family cabins with arched terraces in a tropical mountain garden",
        imageObjectPosition: "center center",
      },
      {
        id: "mountain-villa",
        name: "Mountain View Villa",
        description: "A private house-scale stay with room for multi-generational groups.",
        includes: ["Expansive great room", "Outdoor dining terrace", "Kosher kitchenette"],
        idealFor: "Extended families and groups",
        image: "/images/pesach/pesach-hero-villa.webp",
        imageAlt: "Luxury mountain villa with terrace and infinity pool overlooking the valley",
        imageObjectPosition: "center center",
      },
      {
        id: "private-retreat",
        name: "Private Retreat Residence",
        description: "The most secluded option — privacy, pace, and personal attention.",
        includes: ["Full private grounds", "Personalized meal scheduling", "Enhanced Shabbat setup"],
        idealFor: "Guests seeking complete privacy",
        image: "/images/hotel-gallery/private-villa-garden-entrance.webp",
        imageAlt: "Secluded private villa entrance nestled in tropical highland gardens",
        imageObjectPosition: "center center",
      },
    ],
    cta: {
      eyebrow: "Available upon request",
      title: "Tell us who you’re traveling with",
      body: "Our team will recommend the category that fits your group, standards, and season.",
      button: "Plan Your Stay",
    },
  },
  kosherJewishLife: {
    hero: {
      title: "Dining & Decor",
      body: "Pura Shalom features a refined Glatt kosher dining experience in the Costa Rica highlands — chef-driven menus, thoughtful presentation, and a traditional holiday table without compromising on kashrut.",
    },
    offer: {
      title: "We Offer",
      items: [
        "Gourmet kosher meals shaped around your stay",
        "Shabbat and Yom Tov dining with calm, elegant pacing",
        "Children’s meal adaptations when arranged in advance",
        "Outdoor terrace dining with mountain air and soft light",
        "Tea, coffee, and quiet late-evening refreshments on request",
        "Private or family-style seating coordinated before arrival",
        "Holiday décor and table settings planned with your group",
        "Personal dietary notes reviewed during inquiry",
      ],
    },
    kashrut: {
      eyebrow: "Kashrut",
      title: "Kosher supervision",
      body: "Glatt kosher standards are central to every meal. We walk through Mehadrin preferences, supervision details, and kitchen arrangements directly when you inquire — so the table stays clear and confident.",
    },
    diets: {
      eyebrow: "Care at the table",
      title: "Special diets and allergies",
      body: "Share allergies and dietary needs in advance. Our team will do its best to accommodate requests within the holiday and stay plan.",
      note: "Elevated standards and family adaptations are confirmed during inquiry.",
    },
    decor: {
      eyebrow: "Decor",
      title: "An elegant setting for every meal",
      body: "From everyday tables to holiday dining, the room is refined, calm, and prepared around your group — place settings, seasonal décor, and a composed dining presence.",
    },
    faqLink: "View frequently asked questions",
    cta: {
      title: "Plan your dining experience",
      body: "Tell us about kosher standards, meal preferences, and anything you’d like arranged at the table.",
      button: "Contact Us",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "WhatsApp — available upon request",
    },
  },
  costaRicaGuide: {
    hero: {
      eyebrow: "Costa Rica Guide",
      title: "Costa Rica Guide",
      body: "A practical introduction to the highlands, nature, and experiences around our mountain retreat, so you can arrive informed and travel with confidence.",
    },
    intro: {
      title: "Discover Costa Rica",
      body: "Beyond the coastline, Costa Rica's central highlands offer cloud forests, volcanic landscapes, and a quieter pace — ideal for families and travelers who want nature without sacrificing comfort.",
    },
    attractions: {
      eyebrow: "Attractions",
      title: "12 Recommended Attractions near Cartago",
      body: "Well-known natural and cultural sites in Cartago province — volcanoes, valleys, gardens, and colonial landmarks. Details and access can change, so we'll confirm arrangements with you when planning your stay.",
      photoCredit: "Photos via Wikimedia Commons",
      mapLinkLabel: "View on Google Maps",
      cards: [
        {
          id: "irazu",
          title: "Irazú Volcano National Park",
          body: "Costa Rica's highest volcano, with crater viewpoints and highland scenery in Cartago province.",
        },
        {
          id: "turrialba",
          title: "Turrialba Volcano National Park",
          body: "Volcanic landscapes in eastern Cartago. Access conditions can change—confirm before visiting.",
        },
        {
          id: "orosiValley",
          title: "Orosi Valley",
          body: "A scenic highland valley of coffee farms, rivers, and mountain views southeast of Cartago.",
        },
        {
          id: "basilica",
          title: "Basílica de Nuestra Señora de los Ángeles",
          body: "Costa Rica's most important pilgrimage church, located in the city of Cartago.",
        },
        {
          id: "lankester",
          title: "Lankester Botanical Garden",
          body: "A University of Costa Rica garden near Paraíso, known for orchids and tropical plant collections.",
        },
        {
          id: "guayabo",
          title: "Guayabo National Monument",
          body: "Costa Rica's largest known pre-Columbian archaeological site, near Turrialba.",
        },
        {
          id: "ujarras",
          title: "Ujarrás Ruins",
          body: "Colonial church ruins set among gardens in the Orosi Valley area.",
        },
        {
          id: "lakeCachi",
          title: "Lake Cachí",
          body: "A reservoir with scenic viewpoints in the Orosi Valley region.",
        },
        {
          id: "orosiChurch",
          title: "Iglesia de Orosi",
          body: "A historic colonial church in the Orosi Valley, still in active use.",
        },
        {
          id: "lasRuinas",
          title: "Ruinas de Santiago Apóstol",
          body: "Landmark church ruins in central Cartago, a reminder of the city's colonial past.",
        },
        {
          id: "tapanti",
          title: "Tapantí National Park",
          body: "A rainforest park south of the Orosi Valley, known for dense forest, misty trails, and waterfall scenery.",
        },
        {
          id: "catie",
          title: "CATIE Botanical Garden, Turrialba",
          body: "A tropical research and education campus in Turrialba with botanical gardens open to visitors.",
        },
      ],
    },
    routes: {
      eyebrow: "Routes & Tours",
      title: "Routes & Guided Tours",
      body: "Mountain drives, valley viewpoints, and forest trails can be woven into a relaxed itinerary, with private guides available whenever you'd like a curated outing.",
      items: [
        {
          title: "Suggested Routes",
          body: "Mountain drives, valley viewpoints, and forest trails can be woven into a relaxed itinerary. Routes are planned around your pace, interests, and schedule.",
        },
        {
          title: "Guided Tours",
          body: "Private guides lead volcano visits, rainforest walks, and scenic outings. Timing and arrangements respect your kosher schedule and family needs.",
        },
        {
          title: "Experiences Through the Hotel",
          body: "Excursions, transfers, and special requests are coordinated by our concierge, balancing adventure, rest, and the standards that matter to your family.",
        },
      ],
    },
    nature: {
      eyebrow: "Nature",
      title: "Nature & Mountains",
      body: "Crisp highland air, misty forests, and panoramic horizons define the mountain experience—a contrast to the humid tropical coast.",
    },
    families: {
      eyebrow: "Families",
      title: "Family Experiences",
      body: "Gentle nature walks, supervised activities, and unhurried outings suitable for children, teens, and multi-generational groups.",
    },
    practical: {
      eyebrow: "Before You Arrive",
      title: "Useful Information",
      body: "A few practical notes to help you arrive prepared for highland weather, nature trails, and a calm start to your stay.",
      items: [
        {
          title: "Weather & Seasons",
          body: "Highland areas are generally mild and pleasant, with tropical rains possible throughout the year. Light layers and rain-ready footwear are recommended.",
        },
        {
          title: "Before You Arrive",
          body: "Valid passport, travel insurance, comfortable walking shoes, and modest attire for nature trails. Share dietary and scheduling preferences with our team in advance.",
        },
      ],
    },
    cta: {
      title: "Plan your Costa Rica stay",
      body: "Our team will help you shape a mountain itinerary that suits your family, season, and pace.",
      button: "Plan Your Stay",
    },
  },
  diningKashrut: {
    hero: {
      eyebrow: "Culinary Excellence",
      title: "Dining & Kashrut",
      body: "A full-service Glatt kosher kitchen operating under continuous on-site supervision, where tropical ingredients meet the discipline of Mehadrin standards.",
    },
    sections: [
      {
        title: "Glatt / Mehadrin Standards",
        body: "Every ingredient, every preparation, every service is governed by strict Glatt kosher protocols. Mehadrin options are available for guests who require elevated standards.",
      },
      {
        title: "Full Kosher Kitchen",
        body: "Separate meat and dairy facilities, dedicated equipment, and a trained kitchen team operating under continuous on-site kosher supervision.",
      },
      {
        title: "Shabbat & Holidays",
        body: "Communal Shabbat meals in a refined mountain setting, with traditional menus, elegant presentation, and an atmosphere of calm observance.",
      },
      {
        title: "Luxury Fine Dining",
        body: "Chef-driven menus featuring Costa Rican produce, premium kosher proteins, and presentation worthy of a world-class retreat.",
      },
      {
        title: "Family Dining",
        body: "Flexible meal times, children's options, and private dining arrangements for families who prefer intimacy without compromising kashrut.",
      },
      {
        title: "Trust & Peace of Mind",
        body: "Kashrut is not merely a label here—it is the foundation of every meal. Our standards are communicated clearly, supervised diligently, and upheld with the discretion our guests expect.",
      },
    ],
    faqTitle: "Kashrut Questions",
    faq: [
      { q: "What level of kashrut do you maintain?", a: "We operate under strict Glatt kosher standards with mehadrin options available. Full details are provided during the booking process." },
      { q: "Is there on-site supervision?", a: "Yes. Kosher supervision is maintained on-site throughout kitchen operations, deliveries, and meal service." },
      { q: "Can you accommodate Chalav Yisrael and Pas Yisrael?", a: "Yes. These standards can be confirmed as part of your stay preferences." },
    ],
    cta: {
      title: "Discuss your dietary requirements",
      body: "Share your family's kashrut needs and we will ensure every meal reflects your standards.",
      button: "Plan Your Stay",
    },
  },
  jewishLife: {
    hero: {
      eyebrow: "Spiritual Intention",
      title: "Jewish Life",
      body: "A retreat where prayer, Shabbat, and Torah are woven into the rhythm of the mountains—not added as an afterthought.",
    },
    sections: [
      {
        title: "Daily Prayers",
        body: "Shacharit, Mincha, and Maariv in a dedicated prayer space, with a warm minyan atmosphere and essential siddurim and chumashim available.",
      },
      {
        title: "Shabbat Experience",
        body: "Candle lighting, tefillah, communal meals, and a peaceful atmosphere made for true rest in nature.",
      },
      {
        title: "Jewish Atmosphere",
        body: "From the dining room to the walking paths, the retreat is shaped for guests who live Jewish life fully and comfortably.",
      },
      {
        title: "Torah & Learning",
        body: "Shiurim, chavruta opportunities, and guest lectures on request—tailored to your group's level and interests.",
      },
      {
        title: "Prayer Space & Torah",
        body: "The estate is designed to accommodate daily tefillah and traditional Shabbat observance. Prayer arrangements and Torah reading details are coordinated in advance with each group.",
      },
      {
        title: "Holiday Experiences",
        body: "Pesach, Sukkot, and seasonal programs are crafted to combine observance with the natural beauty of Costa Rica.",
      },
      {
        title: "A Quiet Jewish Community",
        body: "Like-minded families and travelers gather here in an atmosphere of refinement and respect—where Jewish rhythm feels natural, unhurried, and deeply restorative.",
      },
    ],
    cta: {
      title: "Plan a spiritually meaningful stay",
      body: "Tell us about your minyan needs, Shabbat preferences, and learning interests.",
      button: "Plan Your Stay",
    },
  },
  experiences: {
    hero: {
      eyebrow: "Costa Rica",
      title: "Curated Experiences",
      body: "Private excursions and restorative moments—always arranged with your kosher schedule and family rhythm in mind.",
    },
    sections: [
      {
        title: "Nature & Mountains",
        body: "Cloud forests, volcanic vistas, and crisp highland air—the quieter, more soulful side of Costa Rica.",
      },
      {
        title: "Private Excursions",
        body: "Guided volcano visits, rainforest trails, and hidden waterfalls with kosher-packed meals and flexible timing.",
      },
      {
        title: "Family Adventures",
        body: "Nature walks, gentle hikes, and supervised activities designed for children and teens.",
      },
      {
        title: "Rest & Wellness",
        body: "Spa treatments, yoga decks, and quiet terraces for guests who seek restoration as much as adventure.",
      },
      {
        title: "Private Experiences",
        body: "Every itinerary is built around your group — private guides, flexible timing, and excursions arranged to honor both adventure and observance.",
      },
      {
        title: "Personal Concierge",
        body: "Every excursion, transfer, and special request is coordinated by a dedicated concierge who understands kosher travel.",
      },
    ],
    cta: {
      title: "Design your itinerary",
      body: "Our concierge will craft a week that balances adventure, rest, and observance.",
      button: "Plan Your Stay",
    },
  },
  planYourStay: {
    hero: {
      eyebrow: "Begin Your Journey",
      title: "Plan Your Stay",
      body: "Share your preferences and our team will respond with tailored guidance on rooms, kashrut, and availability.",
    },
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      country: "Country of Residence",
      guests: "Number of Guests",
      preferredDates: "Preferred Travel Period",
      preferredDatesPlaceholder: "e.g. Summer season",
      roomPreference: "Preferred Room Category",
      requirements: "Kashrut / Shabbat / Family Needs",
      message: "Additional Message",
      submit: "Submit Inquiry",
      whatsapp: "Continue on WhatsApp",
      roomOptions: ["Luxury Suite", "Family Suite", "Mountain View Villa", "Private Retreat Residence", "Not sure yet"],
      requirementOptions: ["Glatt standard", "Mehadrin preferences", "Shabbat arrangements", "Family programming", "Multiple needs"],
      success: "Thank you. Your inquiry has been received. Our team will be in touch shortly.",
    },
  },
  faq: {
    hero: {
      eyebrow: "Practical Details",
      title: "Frequently Asked Questions",
      body: "Clear answers to help you plan a luxury kosher retreat in Costa Rica with confidence.",
    },
    items: [
      { category: "Kashrut", q: "What kashrut standards do you follow?", a: "We maintain strict Glatt kosher operations with on-site supervision. Mehadrin preferences can be accommodated when arranged in advance." },
      { category: "Shabbat", q: "How is Shabbat observed at the retreat?", a: "Shabbat is central to the experience—communal meals, tefillah, and a calm, respectful atmosphere throughout the estate." },
      { category: "Families", q: "Is the retreat suitable for families?", a: "Yes. Family suites, children's programming, and flexible dining make the retreat ideal for multi-generational travel." },
      { category: "Children", q: "Are there activities for children?", a: "Supervised nature activities, family-friendly excursions, and dedicated spaces for children are available seasonally." },
      { category: "Travel", q: "How do I reach the retreat?", a: "The estate is located in the Cartago highlands. Private transfers from San José can be arranged through our concierge." },
      { category: "Rooms", q: "How many room categories are available?", a: "Four categories: Luxury Suite, Family Suite, Mountain View Villa, and Private Retreat Residence. Our team will help you choose." },
      { category: "Dining", q: "Are all meals included?", a: "Meal packages vary by season and booking type. Full details are provided during the inquiry process." },
      { category: "Booking", q: "How do I reserve?", a: "Submit an inquiry through our Plan Your Stay form or contact us directly. A dedicated advisor will guide you through the process." },
      { category: "Languages", q: "Which languages are supported?", a: "Our team communicates in English and Hebrew. Additional language support may be available on request." },
      { category: "Privacy", q: "How is guest privacy handled?", a: "We treat all personal information with discretion. Inquiry details are used solely to coordinate your stay." },
    ],
    cta: {
      title: "Still have questions?",
      body: "Our concierge team is ready to assist with any detail about your stay.",
      button: "Contact Us",
    },
  },
  contact: {
    hero: {
      eyebrow: "Reach Us",
      title: "Contact",
      body: "We welcome your questions about availability, kashrut, group arrangements, and personalized mountain retreats.",
    },
    aside: {
      title: "Speak with our team",
      intro: "Share a few details and we’ll help shape the stay that fits your group — with no obligation.",
      beforeTitle: "Before you write",
      beforeItems: [
        "Preferred dates or holiday (Pesach, Sukkot, or year-round)",
        "Number of guests and ages of children",
        "Room category interest, if you already have one",
        "Kashrut notes or dietary needs that matter for planning",
      ],
      nextTitle: "What happens next",
      nextItems: [
        "Send your inquiry through the form",
        "A team member replies personally",
        "We recommend the right stay for your group",
      ],
    },
    details: {
      phone: "Available upon request",
      email: "Available upon request",
      location: "Set in the Cartago highlands, within reach of San José and Costa Rica’s main international airport.",
      hours: "Sunday – Thursday, 9:00 – 18:00 (CST)",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      hoursLabel: "Hours",
      whatsappPlaceholder: "WhatsApp — available upon request",
    },
    map: {
      eyebrow: "Find us",
      title: "On the map",
      openMaps: "Open in Google Maps",
      phoneLabel: "Phone",
      emailLabel: "Email",
      privacy:
        "Privacy Policy — Mobile information will not be shared with third parties or partners for marketing or promotional purposes.",
    },
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      country: "Country",
      guests: "Guests",
      preferredDates: "Dates",
      roomPreference: "Room",
      requirements: "Requirements",
      message: "How may we assist you?",
      submit: "Send Message",
      whatsapp: "WhatsApp",
      roomOptions: ["General inquiry"],
      requirementOptions: ["General inquiry"],
      success: "Thank you for reaching out. We will respond shortly.",
    },
    cta: {
      title: "Prefer to speak directly?",
      body: "Connect with our concierge team for immediate assistance.",
      button: "Plan Your Stay",
    },
  },
  pesach: {
    hero: {
      eyebrow: "Pesach 2027",
      title: "Pesach in Costa Rica",
      body: "A luxury Pesach in the Costa Rica highlands — kosher hospitality, Jewish tradition, and experiences for the whole family.",
      cta: "Inquire About Pesach",
    },
    highlights: {
      eyebrow: "A Pesach Experience Like No Other",
      title: "Luxury. Tradition. Freedom.",
      body: "A festive mountain Pesach built around refined hospitality, Jewish life, and experiences the whole family can share.",
      cta: "View Full Program",
      values: [
        {
          title: "Glatt / Mehadrin Dining",
          body: "Chef-driven kosher dining for Pesach, with refined presentation — we'll walk you through menus directly.",
        },
        {
          title: "Prayer & Jewish Life",
          body: "Prayer support and Jewish life arrangements, thoughtfully shaped around your holiday stay.",
        },
        {
          title: "Kids & Teen Programs",
          body: "Programs for children and teens as part of the Pesach experience — we'll confirm the schedule closer to the holiday.",
        },
        {
          title: "Costa Rica Excursions",
          body: "Guided nature outings and Costa Rica experiences, planned for the whole family.",
        },
      ],
    },
    activities: {
      eyebrow: "Day Camp",
      title: "Day camp for children & teens",
      items: [
        { id: "kids", title: "Kids Programs" },
        { id: "sports", title: "Sports & Recreation" },
        { id: "waterfall", title: "Waterfall Hikes" },
        { id: "zipline", title: "Zip-Line Adventures" },
        { id: "volcano", title: "Volcano Excursions" },
        { id: "spa", title: "Spa & Wellness" },
        { id: "beach", title: "Beach Trips / Nature Escape" },
        { id: "evening", title: "Evening Entertainment" },
      ],
    },
    dining: {
      eyebrow: "Gourmet Kosher Cuisine",
      titleLine1: "Exceptional Food.",
      titleLine2: "Memorable Moments.",
      body: "Chef-driven kosher dining for Pesach — refined presentation, a warm atmosphere, and menus we'll confirm with you directly.",
      cta: "View Dining Experience",
      cards: [
        { id: "elegant", title: "Elegant Dining Experience" },
        { id: "chef", title: "Gourmet Chef-Prepared Meals" },
        { id: "desserts", title: "Passover Desserts" },
      ],
    },
    ribo: {
      eyebrow: "Featured Performance",
      artist: "Ishay Ribo",
      title: "Live Performance by Ishay Ribo",
      body: "A signature evening as part of our Pesach entertainment program for adults. We'll confirm performance details when you reach out.",
      imageAlt: "Ishay Ribo performing live on stage before a large audience",
      note: "Details confirmed closer to the holiday",
      cta: "Inquire About the Performance",
    },
    rooms: {
      eyebrow: "Rooms & Cabins",
      title: "Stay in refined mountain lodging",
      body: "Suites and residences designed for kosher living and holiday comfort. We'll confirm availability when you reach out.",
      availability: "Available upon request",
      cta: "Plan Your Stay",
    },
    chooseStay: {
      eyebrow: "Choose Your Stay",
      title: "Select how you’d like to celebrate",
      body: "Choose a full Pesach stay or share your own dates. We'll confirm official holiday dates with you directly.",
      fullLabel: "Full Pesach",
      fullHint: "The complete holiday stay — we'll confirm exact dates with you directly.",
      customLabel: "Custom Dates",
      customHint: "Tell us your preferred check-in and check-out dates.",
      checkIn: "Check-in",
      checkOut: "Check-out",
    },
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      country: "Country",
      adults: "Number of Adults",
      children: "Number of Children",
      stayType: "Stay Type",
      preferredDates: "Preferred Dates",
      roomPreference: "Preferred Room Category",
      specialNeeds: "Special Requirements",
      message: "Message",
      submit: "Submit Inquiry",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "WhatsApp — available upon request",
      roomOptions: ["Luxury Suite", "Family Suite", "Mountain View Villa", "Private Retreat Residence", "Not sure yet"],
      success: "Thank you. Your Pesach inquiry has been received. Our team will be in touch shortly.",
    },
    faqPreview: {
      eyebrow: "FAQ",
      title: "Pesach questions, answered calmly",
      link: "View all FAQ",
      items: [
        {
          q: "What kosher standards apply for Pesach?",
          a: "We'll go over Glatt / Mehadrin preferences with you directly when you inquire.",
        },
        {
          q: "Are children’s programs included?",
          a: "Yes, children’s programming is part of the Pesach experience when arranged in advance — we'll confirm specifics closer to the holiday.",
        },
        {
          q: "How do I choose Full Pesach vs custom dates?",
          a: "Select Full Pesach for the complete holiday stay, or Custom Dates to share your preferred check-in and check-out. We'll confirm official dates with you directly.",
        },
      ],
    },
    cta: {
      title: "Plan your Pesach 2027 stay",
      body: "Tell us about your group, preferred dates, and anything you'd like arranged for the holiday.",
      button: "Contact Us",
      secondary: "Contact Us",
    },
    homeTeaser: {
      eyebrow: "Pesach Retreat",
      title: "A luxury kosher Pesach in the mountains",
      body: "Our seasonal centerpiece: Glatt / Mehadrin dining, prayer and synagogue support, children’s programs, guided Costa Rica excursions, and evening entertainment — we'll confirm the specifics when you reach out.",
      cta: "Explore Pesach Retreat",
      imageAlt: "Festive kosher outdoor dining pavilion at a mountain retreat",
      highlights: [
        "Glatt / Mehadrin kosher meals",
        "Daily prayers and synagogue",
        "Children’s programs",
        "Guided Costa Rica excursions",
        "Evening entertainment and live performances",
      ],
    },
    confirmedNote: "We'll confirm the details when you inquire",
    programNote: "Program details are finalized closer to the holiday",
  },
  sukkot: {
    temporaryBanner: "A preview of our Sukkot program — full details are confirmed when you inquire.",
    hero: {
      eyebrow: "Seasonal Retreat",
      title: "Sukkot Retreat in Costa Rica",
      body: "A thoughtfully planned Sukkot retreat combining kosher holiday hospitality, family activities, prayer arrangements and Costa Rica experiences.",
    },
    overview: {
      eyebrow: "Overview",
      title: "Sukkot in the Costa Rica highlands",
      body: "A thoughtfully planned Sukkot retreat combining kosher holiday hospitality, family activities, prayer arrangements and Costa Rica experiences. We'll confirm the full schedule and availability once you reach out.",
    },
    meals: {
      eyebrow: "Kosher Dining",
      title: "Kosher holiday meals",
      body: "Festive kosher dining for Sukkot, shaped around your family’s preferences — standards and menus confirmed when you inquire.",
      points: [
        "Holiday hospitality with kosher care",
        "Menus shaped around your family’s needs",
        "We’ll confirm the details when you inquire",
      ],
    },
    sukkah: {
      eyebrow: "Holiday Atmosphere",
      title: "Sukkah and festive atmosphere",
      body: "A warm Sukkot atmosphere built for celebration and rest, with sukkah arrangements we’ll walk you through directly.",
      points: [
        "Festive holiday hospitality",
        "A dedicated mountain sukkah",
        "Final arrangements confirmed with our team",
      ],
    },
    prayer: {
      eyebrow: "Prayer",
      title: "Prayer arrangements",
      body: "Jewish life support for Sukkot, including prayer arrangements available on request. We’ll confirm schedules directly with you.",
      points: [
        "Prayer support available on request",
        "Schedules coordinated with your group",
        "A calm, respectful holiday rhythm",
      ],
    },
    children: {
      eyebrow: "For Children",
      title: "Children’s programs",
      body: "Family-minded holiday programming for children — we’ll confirm the exact offerings closer to the holiday.",
      points: [
        "Family-friendly holiday activities",
        "Programming suited to different ages",
        "Specifics confirmed closer to the holiday",
      ],
    },
    excursions: {
      eyebrow: "Costa Rica",
      title: "Excursions and family activities",
      body: "Costa Rica experiences planned with families and holiday timing in mind. We’ll shape the itinerary together once you reach out.",
      points: [
        "Family-oriented highland experiences",
        "Itineraries shaped around your schedule",
        "We’ll confirm plans directly with you",
      ],
    },
    adults: {
      eyebrow: "Adults",
      title: "Adult programming",
      body: "Evening programming for adults during the Sukkot retreat — we’ll go over the offerings when you inquire.",
      points: [
        "Evening hospitality for adults",
        "Programming shaped by the season",
        "We’ll confirm the details when you inquire",
      ],
    },
    rooms: {
      eyebrow: "Stay",
      title: "Rooms & cabins",
      body: "Suites, family spaces, and private residences suited to your group size and holiday needs. We’ll confirm availability directly.",
      points: [
        "Luxury and family-friendly categories",
        "Shabbat-friendly hospitality",
        "Availability confirmed when you inquire",
      ],
    },
    chooseStay: {
      eyebrow: "Choose Your Stay",
      title: "Select how you’d like to celebrate",
      body: "Choose a full Sukkot stay or share your own dates. We’ll confirm official holiday dates with you directly.",
      fullLabel: "Full Sukkot",
      fullHint: "The complete holiday stay — we’ll confirm exact dates with you directly.",
      customLabel: "Custom Dates",
      customHint: "Tell us your preferred check-in and check-out dates.",
      checkIn: "Check-in",
      checkOut: "Check-out",
    },
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      country: "Country",
      adults: "Number of Adults",
      children: "Number of Children",
      stayType: "Stay Type",
      roomPreference: "Preferred Room Category",
      specialNeeds: "Special Requirements",
      message: "Message",
      submit: "Submit Inquiry",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "WhatsApp — available upon request",
      roomOptions: ["Luxury Suite", "Family Suite", "Mountain View Villa", "Private Retreat Residence", "Not sure yet"],
      success: "Thank you. Your Sukkot inquiry has been received. Our team will be in touch shortly.",
    },
    cta: {
      title: "Begin your Sukkot inquiry",
      body: "Share your preferences and our team will guide you on availability and holiday planning — no obligation.",
      button: "Submit Inquiry",
      secondary: "Contact Us",
    },
    programNote: "We’ll confirm program details, schedules, and availability once you reach out.",
  },
  yearRound: {
    hero: {
      eyebrow: "The Resort",
      titleLine1: "Where every hour",
      titleLine2: "has room to breathe",
      body: "Thermal waters and cool pools. Quiet wellness. Gardens, trails, waterfalls, and a lake for fishing — a Passover stay shaped by nature, rest, and time together.",
      cta: "Explore the Resort",
      imageAlt: "Tropical swimming pool surrounded by gardens at the resort",
    },
    highlights: {
      eyebrow: "Resort Highlights",
      title: "Space to relax. Plenty to enjoy.",
      nav: [
        { id: "pools", label: "Pools & Thermal Water", target: "pools", status: "confirmed" as const },
        { id: "spa", label: "Wellness & Spa", target: "spa", status: "planned" as const },
        { id: "kids", label: "Kids’ Play Space", target: "kids", status: "planned" as const },
        { id: "waterfalls", label: "Waterfalls & Lake", target: "nature", status: "confirmed" as const },
        { id: "gardens", label: "Gardens & Trails", target: "nature", status: "confirmed" as const },
        { id: "fishing", label: "Sport Fishing", target: "nature", status: "confirmed" as const },
      ],
    },
    facilities: [
      {
        id: "pools",
        eyebrow: "POOLS & THERMAL WATER",
        title: "Different ways to enjoy the water",
        description:
          "The resort offers two distinct swimming experiences: a warm thermal-water pool and a refreshing cold-water pool. Six smaller thermal pools create more intimate places to slow down and enjoy the surrounding tropical gardens.",
        features: ["Cold-water swimming pool", "Hot thermal-water pool", "Six thermal mini pools"],
        images: [
          {
            src: "/images/passover/resort/pool-cold-water-1600.webp",
            srcSet:
              "/images/passover/resort/pool-cold-water-960.webp 960w, /images/passover/resort/pool-cold-water-1600.webp 1600w, /images/passover/resort/pool-cold-water-2560.webp 2560w",
            alt: "Cold-water swimming pool surrounded by tropical gardens",
            objectPosition: "center 45%",
          },
          {
            src: "/images/passover/resort/pool-hot-thermal-1600.webp",
            srcSet:
              "/images/passover/resort/pool-hot-thermal-960.webp 960w, /images/passover/resort/pool-hot-thermal-1600.webp 1600w, /images/passover/resort/pool-hot-thermal-2560.webp 2560w",
            alt: "Warm thermal-water pool in the tropical resort",
            objectPosition: "center 42%",
          },
          {
            src: "/images/passover/resort/pool-thermal-mini-1600.webp",
            srcSet:
              "/images/passover/resort/pool-thermal-mini-960.webp 960w, /images/passover/resort/pool-thermal-mini-1600.webp 1600w, /images/passover/resort/pool-thermal-mini-2560.webp 2560w",
            alt: "Small thermal pools surrounded by rainforest vegetation",
            objectPosition: "center center",
          },
        ],
        status: "confirmed" as const,
      },
      {
        id: "spa",
        eyebrow: "WELLNESS & SPA",
        title: "Time to slow down",
        description:
          "The wellness area is planned to include massage and treatment rooms, a sauna, and a Turkish bath, surrounded by the quiet atmosphere of the tropical gardens.",
        features: ["Massage and treatment rooms", "Sauna", "Turkish bath", "Quiet relaxation areas"],
        images: [
          {
            src: "/images/passover/resort/spa-exterior-1600.webp",
            srcSet:
              "/images/passover/resort/spa-exterior-960.webp 960w, /images/passover/resort/spa-exterior-1600.webp 1600w, /images/passover/resort/spa-exterior-2560.webp 2560w",
            alt: "Spa building surrounded by tropical gardens",
            objectPosition: "center 40%",
          },
          {
            src: "/images/passover/resort/spa-treatment-room-1600.webp",
            srcSet:
              "/images/passover/resort/spa-treatment-room-960.webp 960w, /images/passover/resort/spa-treatment-room-1600.webp 1600w, /images/passover/resort/spa-treatment-room-2560.webp 2560w",
            alt: "Massage and treatment room overlooking the tropical landscape",
            objectPosition: "center center",
          },
          {
            src: "/images/passover/resort/spa-sauna-turkish-bath-1600.webp",
            srcSet:
              "/images/passover/resort/spa-sauna-turkish-bath-960.webp 960w, /images/passover/resort/spa-sauna-turkish-bath-1600.webp 1600w, /images/passover/resort/spa-sauna-turkish-bath-2560.webp 2560w",
            alt: "Sauna and Turkish bath in the wellness area",
            objectPosition: "center center",
          },
        ],
        status: "planned" as const,
      },
      {
        id: "nature",
        eyebrow: "TROPICAL NATURE",
        title: "Nature is part of the stay",
        description:
          "Tropical gardens, mountain trails, natural waterfalls, and a peaceful lake shape the outdoor experience throughout the property. Guests can explore, pause, fish, and spend time outdoors without leaving the resort setting. The surrounding area is also known for its rich birdlife and biodiversity.",
        features: [
          "Natural waterfalls and lush vegetation",
          "Lake with sport fishing",
          "Tropical gardens and mountain trails",
          "131 bird species recorded in the Rio Perlas area",
        ],
        foci: [
          {
            title: "Natural Waterfalls",
            body: "Flowing water and lush vegetation create one of the resort’s most distinctive natural settings.",
          },
          {
            title: "Lake & Sport Fishing",
            body: "The resort lake offers a peaceful outdoor setting, with sport fishing available as part of the property’s leisure experience.",
          },
          {
            title: "Tropical Gardens",
            body: "Landscaped gardens and tropical paths connect the different areas of the resort.",
          },
          {
            title: "Mountain Trails",
            body: "Mountain scenery and walking trails invite guests to explore the highland landscape.",
          },
        ],
        images: [
          {
            src: "/images/passover/resort/nature-waterfall-real-1600.webp",
            srcSet:
              "/images/passover/resort/nature-waterfall-real-960.webp 960w, /images/passover/resort/nature-waterfall-real-1600.webp 1600w, /images/passover/resort/nature-waterfall-real-2560.webp 2560w",
            alt: "Natural waterfall surrounded by moss and tropical foliage",
            objectPosition: "center center",
          },
          {
            src: "/images/passover/resort/nature-lake-real-1600.webp",
            srcSet:
              "/images/passover/resort/nature-lake-real-960.webp 960w, /images/passover/resort/nature-lake-real-1600.webp 1600w, /images/passover/resort/nature-lake-real-2560.webp 2560w",
            alt: "Resort lake with walking path and mountain forest beyond — sport fishing available",
            objectPosition: "center 40%",
          },
          {
            src: "/images/passover/resort/nature-gardens-real-1600.webp",
            srcSet:
              "/images/passover/resort/nature-gardens-real-960.webp 960w, /images/passover/resort/nature-gardens-real-1600.webp 1600w, /images/passover/resort/nature-gardens-real-2560.webp 2560w",
            alt: "Tropical gardens and cabin beside a quiet garden pond",
            objectPosition: "center center",
          },
          {
            src: "/images/passover/resort/nature-garden-trail-1600.webp",
            srcSet:
              "/images/passover/resort/nature-garden-trail-960.webp 960w, /images/passover/resort/nature-garden-trail-1600.webp 1600w, /images/passover/resort/nature-garden-trail-2560.webp 2560w",
            alt: "Walking trail through tropical gardens and mountain scenery",
            objectPosition: "center 40%",
          },
        ],
        status: "confirmed" as const,
      },
      {
        id: "kids",
        eyebrow: "KIDS’ PLAY SPACE",
        title: "A place made for younger guests",
        description:
          "A planned indoor play space will give younger guests a comfortable place for creative play, reading, and age-appropriate activities throughout the Passover holiday.",
        features: [],
        images: [
          {
            src: "/images/passover/resort/kids-playroom-1600.webp",
            srcSet:
              "/images/passover/resort/kids-playroom-960.webp 960w, /images/passover/resort/kids-playroom-1600.webp 1600w, /images/passover/resort/kids-playroom-2560.webp 2560w",
            alt: "Indoor play space for younger hotel guests",
            objectPosition: "center center",
          },
        ],
        status: "planned" as const,
        statusLabel: "PLANNED FOR PASSOVER",
      },
    ],
    featured: [
      {
        id: "pool",
        number: "01",
        eyebrow: "Swimming Pools",
        title: "Water, nature, and room to unwind",
        description:
          "Spend time by the water, surrounded by tropical gardens and the calm of the Costa Rican mountains.",
        status: "confirmed" as const,
      },
      {
        id: "gardens",
        number: "02",
        eyebrow: "Gardens & Nature",
        title: "Nature is part of the stay",
        description:
          "Tropical gardens, mountain scenery, and peaceful outdoor spaces are woven throughout the resort.",
        status: "confirmed" as const,
      },
      {
        id: "gather",
        number: "03",
        eyebrow: "Places to Gather",
        title: "Space for time together",
        description:
          "Comfortable indoor and outdoor spaces create room for conversation, connection, and the rhythm of the holiday.",
        status: "confirmed" as const,
      },
      {
        id: "spa",
        number: "04",
        eyebrow: "Spa & Wellness",
        title: "Time to slow down",
        description:
          "A peaceful setting for treatments, rest, and moments of quiet during the holiday.",
        status: "needs_confirmation" as const,
      },
    ],
    more: {
      eyebrow: "More to Enjoy",
      title: "The resort, at your pace",
      body: "Move, explore, or simply find a quiet corner. The day is yours.",
      items: [
        {
          id: "fitness",
          number: "04",
          title: "Fitness",
          description: "A bright space to keep your routine moving.",
          status: "needs_confirmation" as const,
        },
      ],
    },
    location: {
      eyebrow: "Location",
      title: "Cartago highlands",
      body: "Set in the Cartago highlands, within reach of San José and Costa Rica’s main international airport.",
      status: "confirmed" as const,
    },
    chooseStay: {
      eyebrow: "Plan Your Dates",
      title: "Choose your preferred stay",
      body: "Share your preferred check-in and check-out dates — we'll confirm availability directly with you.",
      customLabel: "Custom Dates",
      customHint: "Tell us your preferred check-in and check-out dates.",
      checkIn: "Check-in",
      checkOut: "Check-out",
    },
    form: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      country: "Country",
      adults: "Number of Adults",
      children: "Number of Children",
      stayType: "Stay Type",
      roomPreference: "Preferred Room Category",
      specialNeeds: "Special Requirements",
      message: "Message",
      submit: "Submit Inquiry",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "WhatsApp — available upon request",
      roomOptions: ["Luxury Suite", "Family Suite", "Mountain View Villa", "Private Retreat Residence", "Not sure yet"],
      success: "Thank you. Your inquiry has been received. Our team will be in touch shortly.",
    },
    cta: {
      eyebrow: "Passover in Costa Rica",
      title: "Make the resort part of your Passover story",
      body: "Tell us who is traveling, and we’ll help you find the right stay.",
      button: "Plan Your Stay",
    },
  },
  holidays: {
    hero: {
      eyebrow: "Holidays & Stays",
      title: "Holidays & Stays",
      body: "Three clear pathways for celebrating and resting at Pura Shalom—Pesach, Sukkot, and year-round kosher stays in Costa Rica’s mountains.",
    },
    intro: {
      title: "Choose the stay that fits your season",
      body: "Explore our holiday retreats and flexible year-round hospitality. We'll confirm program details and availability when you reach out.",
    },
    pathways: {
      pesach: {
        eyebrow: "Featured Season",
        title: "Pesach Retreat",
        body: "A luxury Glatt kosher Pesach in the mountains—holiday dining, prayer support, family programs, excursions, and adult entertainment.",
        cta: "Explore Pesach",
        imageAlt: "Luxury Pesach table overlooking Costa Rica",
      },
      sukkot: {
        eyebrow: "Seasonal Retreat",
        title: "Sukkot Retreat",
        body: "A thoughtfully planned Sukkot stay with kosher holiday hospitality, family activities, prayer arrangements, and Costa Rica experiences.",
        cta: "Explore Sukkot",
        imageAlt: "Elegant Sukkot dining experience in Costa Rica",
      },
      yearRound: {
        eyebrow: "Anytime",
        title: "Year-Round Stays",
        body: "Kosher mountain hospitality beyond the holidays—rooms, dining, Shabbat-friendly stays, and curated highland experiences.",
        cta: "Explore Year-Round",
        imageAlt: "Luxury tropical retreat in the mountains of Costa Rica",
      },
    },
    cta: {
      title: "Not sure where to begin?",
      body: "Tell us your season and group size — our team will guide you to the right pathway.",
      button: "Contact Us",
    },
  },
  home: {
    intro: {
      title: "A luxury kosher retreat designed around your stay",
      body: "A private retreat in Costa Rica combining refined hospitality, Jewish life and thoughtfully planned experiences for families and groups.",
      bridge: "Discover our holiday retreats and year-round stays",
      values: [
        {
          title: "Kosher & Jewish Life",
          body: "Kosher dining, Shabbat, prayer and Jewish traditions are thoughtfully integrated into your stay, with final arrangements confirmed during inquiry.",
        },
        {
          title: "Luxury Mountain Hospitality",
          body: "A calm and refined stay surrounded by nature, with private-style hospitality, comfortable lodging and personal attention.",
        },
        {
          title: "Family Retreat Experience",
          body: "Programs for children and adults, guided experiences and a stay planned around the needs of your family or group.",
        },
      ],
    },
    trust: [
      { value: "Glatt", label: "Kosher Standards" },
      { value: "24/7", label: "Dedicated Concierge" },
      { value: "Private", label: "Mountain Estate" },
      { value: "Family", label: "Welcoming" },
    ],
    previews: {
      rooms: {
        eyebrow: "Accommodations",
        title: "Rooms & Residences",
        body: "From intimate suites to private villas—every space is designed for kosher living and mountain serenity.",
        link: "View Rooms",
        imageAlt: "Mountain suite terrace at a luxury kosher retreat",
      },
      dining: {
        eyebrow: "Dining & Kashrut",
        title: "Glatt Kosher Cuisine",
        body: "A full-service kitchen under permanent supervision, with Shabbat meals and chef-driven menus.",
        link: "Explore Dining",
        imageAlt: "Elegant Glatt kosher fine dining plate with mountain herbs",
      },
      jewishLife: {
        eyebrow: "Jewish Life",
        title: "Prayer, Shabbat & Torah",
        body: "Jewish life support available upon request, with Shabbat-friendly hospitality shaped around your stay.",
        link: "Discover Jewish Life",
        imageAlt: "Shabbat table setting at a kosher mountain retreat",
      },
      family: {
        eyebrow: "Family",
        title: "A Retreat for All Ages",
        body: "Family suites, children's activities, and programming that lets parents truly rest.",
        link: "Plan Your Stay",
        imageAlt: "Outdoor wellness deck for families at a mountain retreat",
      },
      experiences: {
        eyebrow: "Experiences",
        title: "Costa Rica, Curated",
        body: "Volcanic trails, cloud forests, and private excursions—always on your schedule.",
        link: "View Experiences",
        imageAlt: "Palm-lined driveway leading into Costa Rica highland estate",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions Answered",
        body: "Kashrut, Shabbat, travel, families, and booking—clear guidance before you arrive.",
        link: "Read FAQ",
      },
    },
    faqPreview: [
      { q: "What kashrut standards do you maintain?", a: "We'll confirm kosher standards when you reach out, with guidance tailored to your family's needs." },
      { q: "Is the retreat family-friendly?", a: "Yes—a family-friendly retreat experience with suites, programming, and flexible dining for all ages." },
      { q: "How do I begin planning?", a: "Submit an inquiry through our contact page and our team will guide you personally." },
    ],
    links: {
      learnMore: "Learn more",
      exploreRooms: "Explore rooms",
      viewKosherDining: "View kosher dining",
      discoverJewishLife: "Discover Jewish Life",
      planYourStay: "Plan your stay",
      viewExperiences: "View experiences",
      readFaq: "Read FAQ",
      contactUs: "Contact us",
    },
  },
} as const;
