import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { InsertProduct, Product } from "@shared/schema";

export default function Products() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1]);
  const initialCategory = params.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // const { data: products, isLoading } = useQuery<Product[]>({
  //   queryKey: ["/api/products"],
  // });

  // Static products for demo
  const products: InsertProduct[] = [
    {
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
  const isLoading = false;

  const categories = [
    { id: "all", label: t.products.allProducts },
    { id: "office", label: t.home.applications.office.title },
    { id: "industrial", label: t.home.applications.industrial.title },
    { id: "outdoor", label: "Outdoor" },
    { id: "retail", label: t.home.applications.retail.title },
  ];

  const filteredProducts =
    products?.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }) || [];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection
            className="text-center max-w-3xl mx-auto"
            animation="fadeInUp"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t.products.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t.home.heroDescription}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t.common.search + "..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search-products"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category.id)}
                      data-testid={`button-category-${category.id}`}
                    >
                      {category.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="w-full h-48 mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p
                className="text-xl text-muted-foreground"
                data-testid="text-no-products"
              >
                No products found matching your criteria
              </p>
            </div>
          ) : (
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className="group hover-elevate active-elevate-2 transition-all duration-300 overflow-hidden h-full"
                    data-testid={`card-product-${product.id}`}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden bg-muted aspect-square">
                        <img
                          src={window.location.origin + product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <Badge
                          className="absolute top-4 left-4"
                          data-testid={`badge-category-${product.id}`}
                        >
                          {product.category}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <h3
                          className="text-xl font-semibold text-foreground mb-2"
                          data-testid={`text-product-name-${product.id}`}
                        >
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Power
                            </div>
                            <div className="font-semibold text-foreground">
                              {product.wattage}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Brightness
                            </div>
                            <div className="font-semibold text-foreground">
                              {product.lumens}
                            </div>
                          </div>
                        </div>
                        <Link href={`/products/${product.id}`}>
                          <Button
                            className="w-full gap-2"
                            data-testid={`button-view-product-${product.id}`}
                          >
                            View Details
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggeredGrid>
          )}
        </div>
      </section>
    </div>
  );
}
