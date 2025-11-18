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
import type { Product } from "@shared/schema";

export default function Products() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1]);
  const initialCategory = params.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

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
                          src={product.imageUrl}
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
