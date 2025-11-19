import { Product } from "@shared/schema";

// Static products (should match Products.tsx)
export const products: Product[] = [
  {
    id: "1",
    name: "LED Panel Pro 600",
    category: "office",
    description:
      "Premium LED panel light perfect for modern office spaces. Delivers uniform, flicker-free illumination with exceptional energy efficiency.",
    price: 12999,
    features: [
      "Ultra-slim design (9mm thickness)",
      "Flicker-free technology for eye comfort",
      "Dimmable with optional controller",
      "Easy installation with mounting kit included",
      "5-year manufacturer warranty",
    ],
    specifications:
      "Dimensions: 600x600mm\nMaterial: Aluminum frame with PMMA diffuser\nBeam Angle: 120°\nCRI: >80\nOperating Temperature: -20°C to 45°C\nCertifications: CE, RoHS, Energy Star",
    imageUrl: "/images/Office_LED_panel_product_ee1cc884.png",
    wattage: "40W",
    lumens: "4,000 lm",
    colorTemperature: "4000K (Neutral White)",
    lifespan: "50,000 hours",
  },
  {
    id: "2",
    name: "Industrial High Bay 200W",
    category: "industrial",
    description:
      "Powerful high-bay LED fixture designed for warehouses, factories, and large commercial spaces. Maximum brightness with minimum energy consumption.",
    price: 24999,
    features: [
      "IP65 waterproof rating",
      "Impact-resistant polycarbonate lens",
      "Wide 120° beam angle",
      "Instant on/off, no warm-up time",
      "Aluminum heat sink for optimal cooling",
      "Adjustable mounting bracket",
    ],
    specifications:
      "Dimensions: 320mm diameter x 250mm height\nMaterial: Die-cast aluminum housing\nBeam Angle: 120°\nCRI: >70\nOperating Temperature: -40°C to 50°C\nCertifications: CE, RoHS, UL, DLC Listed",
    imageUrl: "/images/Industrial_high_bay_light_f7aed0f7.png",
    wattage: "200W",
    lumens: "26,000 lm",
    colorTemperature: "5000K (Daylight)",
    lifespan: "60,000 hours",
  },
  {
    id: "3",
    name: "Outdoor Floodlight 150W",
    category: "outdoor",
    description:
      "Heavy-duty LED floodlight for outdoor applications. Weather-resistant construction ensures reliable performance in all conditions.",
    price: 18999,
    features: [
      "IP66 weatherproof rating",
      "Tempered glass lens",
      "Adjustable bracket for precise aiming",
      "Surge protection built-in",
      "Corrosion-resistant finish",
      "Wide voltage range compatibility",
    ],
    specifications:
      "Dimensions: 380x280x90mm\nMaterial: Die-cast aluminum with powder coating\nBeam Angle: 110°\nCRI: >75\nOperating Temperature: -40°C to 55°C\nCertifications: CE, RoHS, IP66, ETL Listed",
    imageUrl: "/images/Outdoor_LED_floodlight_73573a0e.png",
    wattage: "150W",
    lumens: "19,500 lm",
    colorTemperature: "5700K (Cool White)",
    lifespan: "50,000 hours",
  },
  {
    id: "4",
    name: "Retail Track Spotlight 30W",
    category: "retail",
    description:
      "Elegant track-mounted spotlight ideal for retail displays and galleries. Adjustable beam angle and dimming for perfect product highlighting.",
    price: 8999,
    features: [
      "360° horizontal and 90° vertical rotation",
      "Adjustable beam angle (15°-60°)",
      "High CRI for accurate color rendering",
      "Smooth dimming from 10-100%",
      "Anti-glare optics",
      "Quick installation on standard tracks",
    ],
    specifications:
      "Dimensions: 180mm length x 90mm diameter\nMaterial: Aluminum body with UV-resistant finish\nBeam Angle: Adjustable 15°-60°\nCRI: >90\nOperating Temperature: -10°C to 40°C\nCertifications: CE, RoHS, Energy Star",
    imageUrl: "/images/Retail_track_spotlight_18d0dfb4.png",
    wattage: "30W",
    lumens: "2,400 lm",
    colorTemperature: "3000K (Warm White)",
    lifespan: "50,000 hours",
  },
  {
    id: "5",
    name: "LED Tube Light T8 120cm",
    category: "office",
    description:
      "Direct replacement for traditional fluorescent tubes. Plug-and-play installation with significant energy savings.",
    price: 3999,
    features: [
      "Direct replacement for T8 fluorescent tubes",
      "No ballast required (ballast bypass)",
      "Shatterproof polycarbonate housing",
      "Instant start, no flickering",
      "Mercury-free, environmentally friendly",
      "Universal mounting brackets included",
    ],
    specifications:
      "Dimensions: 1200mm length x 26mm diameter\nMaterial: Polycarbonate with aluminum PCB\nBeam Angle: 180°\nCRI: >80\nOperating Temperature: -20°C to 45°C\nCertifications: CE, RoHS, FCC",
    imageUrl: "/images/LED_tube_light_591d8eb3.png",
    wattage: "18W",
    lumens: "2,160 lm",
    colorTemperature: "4000K (Neutral White)",
    lifespan: "50,000 hours",
  },
  {
    id: "6",
    name: "Smart Downlight 12W",
    category: "office",
    description:
      "Smart LED downlight with wireless control capabilities. Perfect for modern smart offices and conference rooms.",
    price: 6999,
    features: [
      "WiFi and Bluetooth connectivity",
      "App control for brightness and scheduling",
      "Voice assistant compatible (Alexa, Google)",
      "Adjustable color temperature (2700K-6500K)",
      "Group control for multiple lights",
      "Energy monitoring via app",
    ],
    specifications:
      "Dimensions: 90mm cutout diameter, 95mm outer diameter\nMaterial: Aluminum heat sink with PC diffuser\nBeam Angle: 120°\nCRI: >85\nOperating Temperature: -10°C to 40°C\nCertifications: CE, RoHS, FCC, Energy Star",
    imageUrl: "/images/Smart_LED_downlight_9e0dceb0.png",
    wattage: "12W",
    lumens: "1,200 lm",
    colorTemperature: "2700K-6500K (Tunable)",
    lifespan: "50,000 hours",
  },
];
