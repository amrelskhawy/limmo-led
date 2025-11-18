import { useQuery } from "@tanstack/react-query";
import { Link, useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Thermometer,
} from "lucide-react";
import type { Product } from "@shared/schema";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const [, setLocation] = useLocation();
  const productId = params?.id;

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", productId],
    enabled: !!productId,
  });

  const { data: allProducts } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const relatedProducts =
    allProducts
      ?.filter((p) => p.category === product?.category && p.id !== product?.id)
      .slice(0, 3) || [];

  const handleRequestQuote = () => {
    if (product) {
      setLocation(
        `/contact?productId=${product.id}&productName=${encodeURIComponent(
          product.name
        )}`
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Skeleton className="w-full aspect-square" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product not found
          </h1>
          <Link href="/products">
            <Button variant="default">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { icon: Zap, label: "Wattage", value: product.wattage },
    { icon: Zap, label: "Lumens", value: product.lumens },
    {
      icon: Thermometer,
      label: "Color Temperature",
      value: product.colorTemperature,
    },
    { icon: Clock, label: "Lifespan", value: product.lifespan },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/products">
          <Button
            variant="ghost"
            className="gap-2 mb-8"
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="sticky top-24 h-fit">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-muted aspect-square">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    data-testid="img-product"
                  />
                  <Badge
                    className="absolute top-6 left-6"
                    data-testid="badge-category"
                  >
                    {product.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                data-testid="text-product-name"
              >
                {product.name}
              </h1>
              <p
                className="text-lg text-muted-foreground"
                data-testid="text-product-description"
              >
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <Card key={index} data-testid={`card-spec-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <spec.icon className="h-4 w-4 text-primary" />
                      <div className="text-sm text-muted-foreground">
                        {spec.label}
                      </div>
                    </div>
                    <div className="font-semibold text-foreground">
                      {spec.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`feature-${index}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Specifications
                </h3>
                <div
                  className="text-muted-foreground whitespace-pre-line"
                  data-testid="text-specifications"
                >
                  {product.specifications}
                </div>
              </CardContent>
            </Card>

            <div className="sticky bottom-6 bg-card border border-card-border rounded-md p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="default"
                  className="flex-1 gap-2"
                  onClick={handleRequestQuote}
                  data-testid="button-request-quote"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    data-testid="button-contact"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="py-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group hover-elevate active-elevate-2 transition-all duration-300 overflow-hidden"
                  data-testid={`card-related-${relatedProduct.id}`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted aspect-square">
                      <img
                        src={relatedProduct.imageUrl}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <Link href={`/products/${relatedProduct.id}`}>
                        <Button
                          variant="ghost"
                          className="w-full gap-2"
                          data-testid={`button-related-${relatedProduct.id}`}
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
