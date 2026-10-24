/**
 * The Beauty Factory by Dr. Bhanu Kalaivani
 * Verified Brand Data, Bridal Services, Portfolio, & Wedding Enquiries
 */

export const BRAND_INFO = {
  name: "The Beauty Factory",
  founder: "Dr. Bhanu Kalaivani",
  tagline: "Bridal Makeup Studio & Academy",
  summary: "Award-winning bridal makeup artist, beauty entrepreneur, and educator delivering bespoke bridal transformations, HD & Airbrush artistry, traditional draping, and luxury wedding styling.",
  credentials: [
    { title: "Mrs. India Queen Tamil Nadu 2021", year: "2021" },
    { title: "Master of South India Makeup Artist", year: "2017 & 2018" },
    { title: "Star of South Indian Makeup Artist", year: "2019" },
    { title: "Young Entrepreneur & Skills Developer Award", year: "2020" }
  ],
  locations: "Wedding Studios & Academies with Pan-South India & Destination Bridal Travel",
  whatsapp: "+91 62387 60270",
  whatsappClean: "916238760270",
  email: "bridal@thebeautyfactory.com"
};

export const SERVICES = [
  {
    id: "muhurtham-bridal",
    title: "Muhurtham & Sacred Bridal Makeup",
    category: "bridal",
    badge: "Signature Bridal",
    description: "Flawless traditional temple bridal artistry crafted for rituals, bright mandap lighting, and long ceremonies. Sweat-resistant, long-wearing HD finish that accentuates your authentic skin tone.",
    inclusions: [
      "Custom shade matching & skin priming",
      "Traditional eye detailing & kohl artistry",
      "HD sweat-proof, transfer-resistant finish",
      "Touch-up guidance for mandap rituals"
    ],
    idealFor: "Vedic Muhurtham, Temple Weddings & Morning Ceremonies"
  },
  {
    id: "airbrush-couture",
    title: "Airbrush Bridal Transformation",
    category: "bridal",
    badge: "Premium HD",
    description: "Ultra-fine micro-mist application using luxury airbrush systems. Weightless, silicone/water-based breathable coverage that delivers a porcelain glow under 4K video cameras.",
    inclusions: [
      "Micro-fine airbrush foundation application",
      "Seamless blend with zero cakey texture",
      "16-hour long-wear waterproof longevity",
      "High-definition photography readiness"
    ],
    idealFor: "Indoor Receptions, Destination Weddings & Outdoor Celebrations"
  },
  {
    id: "reception-glam",
    title: "Reception & Sangeet Evening Glam",
    category: "evening",
    badge: "Cocktail & Evening",
    description: "Contemporary evening elegance with sculpted cheekbones, illuminated skin, dramatic or soft-smoked eye artistry, and refined lip pairing to complement your evening couture.",
    inclusions: [
      "Luminous glass-skin sculpting",
      "Custom glitter, metallic or smokey eye design",
      "Premium faux mink lash application",
      "Long-wear transfer-proof lip artistry"
    ],
    idealFor: "Receptions, Sangeet Nights & Cocktail Galas"
  },
  {
    id: "engagement-haldi",
    title: "Engagement & Pre-Wedding Artistry",
    category: "pre-wedding",
    badge: "Daytime Glow",
    description: "Soft, dewy, radiant makeovers tailored for intimate ceremonies. Accentuates natural features with fresh pastel undertones and lightweight elegance.",
    inclusions: [
      "Dewy, radiant skin preparation",
      "Soft romantic eye framing",
      "Natural flush and rosy undertones",
      "Comfort wear for day-long socializing"
    ],
    idealFor: "Engagement, Roka, Haldi & Mehendi Ceremonies"
  },
  {
    id: "hair-styling",
    title: "Bridal Hair Artistry & Poola Jada",
    category: "styling",
    badge: "Hair & Florals",
    description: "Architectural bridal hairstyles crafted by master hair artists — from intricate South Indian braids adorned with fresh jasmine (Malli) and Poola Jada to Hollywood waves and textured modern buns.",
    inclusions: [
      "Traditional Poola Jada & fresh floral placement",
      "Structured, long-lasting textured updos",
      "Soft romantic Hollywood waves or half-up styles",
      "Hair prep, volume padding, and secure setting"
    ],
    idealFor: "All Wedding Functions & Saree Ceremonies"
  },
  {
    id: "saree-draping",
    title: "Couture Saree Draping & Box Pleating",
    category: "styling",
    badge: "Precision Draping",
    description: "Expert precision draping for Kanjeevarams, Banarasis, Organzas, and bridal dupattas. Box pleating, iron pin-setting, and comfort waist sculpting that stays intact all day.",
    inclusions: [
      "Precision box pleating and pallu styling",
      "Zero-slip reinforced security pinning",
      "Double dupatta draping for bridal lehengas",
      "Comfort fit allowing easy sitting during rituals"
    ],
    idealFor: "Muhurtham Saree, Lehengas & Reception Gowns"
  }
];

export const PORTFOLIO = [
  {
    id: "look-1",
    title: "Traditional Muhurtham Radiance",
    category: "muhurtham",
    categoryLabel: "Muhurtham Bridal",
    description: "Luminous traditional South Indian bridal makeover with warm gold eye accents, defined brows, and classic crimson lip.",
    artistNotes: "Airbrush HD base, water-resistant sealing, Kanjeevaram styling with fresh jasmine Poola Jada.",
    image: "/images/hero.jpg",
    tags: ["Muhurtham", "Traditional South Indian", "Airbrush HD"]
  },
  {
    id: "look-2",
    title: "Velvet Crimson Royal Bridal",
    category: "muhurtham",
    categoryLabel: "Royal Bridal",
    description: "Deep kohl rimmed eyes with soft terracotta sculpting and heirloom gold jewelry harmony.",
    artistNotes: "Custom matte-velvet skin finish, sweat-resistant ritual wear, and antique temple jewelry alignment.",
    image: "/images/lehenga.jpg",
    tags: ["Temple Wedding", "Kohl Artistry", "Long-Wear"]
  },
  {
    id: "look-3",
    title: "Celestial Champagne Evening Glam",
    category: "reception",
    categoryLabel: "Reception & Evening",
    description: "Illuminated glass-skin finish with soft champagne shimmer lids, winged flutter lashes, and nude rose velvet lips.",
    artistNotes: "Designed for high-intensity reception chandelier lighting and 4K videography.",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=80",
    tags: ["Reception Glam", "Glass Skin", "Cathedral Train"]
  },
  {
    id: "look-4",
    title: "Heritage Silk Muhurtham Elegance",
    category: "muhurtham",
    categoryLabel: "Heritage Temple",
    description: "Pure Kanjeevaram styling with refined golden undertone match, soft contouring, and defined traditional jhumka framing.",
    artistNotes: "Breathable skin tint with targeted spot perfecting, formulated for humid wedding halls.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Kanjeevaram", "Temple Muhurtham", "Saree Draping"]
  },
  {
    id: "look-5",
    title: "Blush Rose Engagement Glow",
    category: "engagement",
    categoryLabel: "Engagement & Haldi",
    description: "Fresh, youthful dewy base with monochromatic peach-rose tones, feathered brows, and glossy hydrating lips.",
    artistNotes: "Ideal for daytime lighting, botanical garden venues, and outdoor photography.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    tags: ["Dewy Skin", "Pastel Bridal", "Daytime Ceremony"]
  },
  {
    id: "look-6",
    title: "Polki Jewel Harmony & Precision Eye Artistry",
    category: "reception",
    categoryLabel: "Jewelry Harmony",
    description: "Sophisticated balance between heavy polki emerald choker jewelry and a clean, modern sculpted face profile.",
    artistNotes: "Soft-matte neutral palette ensuring makeup complements heavy heirloom jewelry without competing.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    tags: ["Polki Harmony", "Sculpted Profile", "Modern Classic"]
  }
];

export const BRIDAL_EXPERIENCE_STEPS = [
  {
    step: "01",
    title: "Date Availability & Consultation",
    desc: "Share your wedding dates, venues, and functions. We verify atelier calendar availability and understand your personal aesthetic, wedding outfits, and ceremony timings."
  },
  {
    step: "02",
    title: "Custom Look Designing & Trial",
    desc: "We analyze your skin undertones, face architecture, and bridal outfits to curate customized makeup, hair design, and draping schemes prior to the wedding."
  },
  {
    step: "03",
    title: "Pre-Bridal Skincare Preparation",
    desc: "Receive customized pre-wedding skincare and hydration recommendations to prepare your skin canvas, ensuring effortless blending and maximum radiance."
  },
  {
    step: "04",
    title: "Wedding Day Flawless Execution",
    desc: "Dr. Bhanu Kalaivani and her senior team arrive punctually with professional lighting and luxury cosmetics kits (MAC, Dior, NARS, Charlotte Tilbury, Huda Beauty), delivering a calm, punctual, and breathtaking transformation."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Aishwarya Ramachandran",
    role: "Bride",
    event: "Muhurtham & Reception, Chennai",
    quote: "Dr. Bhanu Kalaivani is an absolute magician. My Muhurtham makeup remained immaculate from 5:00 AM rituals all the way until afternoon thali celebrations despite humid heat. The skin looked like real skin, glowing from within.",
    date: "January 2026"
  },
  {
    name: "Meghna Kothari",
    role: "Bride",
    event: "Destination Wedding, Bangalore",
    quote: "Finding an artist who understands South Indian traditions while delivering modern, sculpted makeup is rare. The Beauty Factory team was so punctual, calm, and meticulous with my saree box-pleating and hair florals. Truly a 5-star experience.",
    date: "December 2025"
  },
  {
    name: "Pooja Venkatesh",
    role: "Bride",
    event: "Cocktail & Traditional Wedding",
    quote: "Every single guest asked who did my makeup! Dr. Bhanu balanced my heavy temple jewelry with subtle, elegant eye detailing. She made me feel confident, radiant, and completely myself.",
    date: "November 2025"
  }
];

export const FAQS = [
  {
    q: "How early should I book Dr. Bhanu Kalaivani for my wedding dates?",
    a: "We recommend reserving your dates 3 to 6 months in advance, especially for auspicious wedding muhurtham dates which often book out several months ahead. Bookings are confirmed upon an advance date retainer."
  },
  {
    q: "Do you travel to wedding venues and destination locations?",
    a: "Yes. Dr. Bhanu Kalaivani and her bridal team travel across Tamil Nadu, Kerala, Karnataka, and pan-India destination venues. Outstation travel and stay logistics are coordinated directly with the bride."
  },
  {
    q: "What international makeup and skincare brands are used?",
    a: "We exclusively use dermatologically approved, high-end luxury cosmetics including MAC, Charlotte Tilbury, NARS, Dior Backstage, Huda Beauty, Bobbi Brown, Laura Mercier, and Kryolan for long-wear ritual performance."
  },
  {
    q: "Are bridal hair styling, floral setting, and saree draping included?",
    a: "Yes. Complete bridal packages include makeup, hair artistry (including traditional Poola Jada, fresh flower setting, and extensions), and precision saree draping with box pleating."
  },
  {
    q: "Can you accommodate the mother of the bride and bridesmaids?",
    a: "Yes. We offer coordinated family glam packages for mothers, sisters, and bridesmaids managed by Dr. Bhanu Kalaivani and her trained senior associate artists."
  }
];
