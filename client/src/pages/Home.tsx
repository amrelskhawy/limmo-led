import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Leaf, 
  TrendingDown, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Factory, 
  Store,
  ChevronDown,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Reduce energy consumption by up to 80% compared to traditional lighting"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable solutions that minimize environmental impact"
    },
    {
      icon: TrendingDown,
      title: "Lower Costs",
      description: "Significant savings on electricity bills and maintenance"
    },
    {
      icon: Clock,
      title: "Long Lasting",
      description: "50,000+ hours lifespan means fewer replacements"
    }
  ];

  const categories = [
    {
      icon: Building2,
      title: "Office Solutions",
      description: "Perfect lighting for productive workspaces",
      category: "office"
    },
    {
      icon: Factory,
      title: "Industrial Lighting",
      description: "Robust solutions for demanding environments",
      category: "industrial"
    },
    {
      icon: Store,
      title: "Retail Spaces",
      description: "Enhance product displays and ambiance",
      category: "retail"
    }
  ];

  const stats = [
    { value: "10K+", label: "Installations" },
    { value: "500+", label: "Happy Clients" },
    { value: "80%", label: "Energy Savings" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Hero_LED_office_installation_ae691311.png"
            alt="Modern LED office lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <Badge variant="secondary" className="mb-6 gap-1" data-testid="badge-hero-new">
            <Sparkles className="h-3 w-3" />
            Professional LED Solutions
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Illuminate Your Future
            <br />
            <span className="text-primary">with Smart LED Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Transform your organization with energy-efficient, sustainable LED lighting solutions. 
            Professional-grade quality designed for modern workspaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="/products">
              <Button size="lg" variant="default" className="gap-2" data-testid="button-hero-explore">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/50" data-testid="button-hero-quote">
                Get a Quote
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose LuminaTech?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading the industry with innovative, sustainable lighting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solutions for Every Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored LED lighting solutions for diverse organizational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-category-${category.category}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <Link href={`/products?category=${category.category}`}>
                    <Button variant="ghost" className="gap-2" data-testid={`button-category-${category.category}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Commitment to Quality
              </h2>
              <p className="text-lg text-muted-foreground">
                Every product is backed by industry-leading standards and certifications
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Energy Star certified products for maximum efficiency",
                "5-year warranty on all LED fixtures",
                "ISO 9001 quality management certified",
                "Free consultation and lighting design support",
                "Professional installation services available",
                "24/7 customer support and maintenance"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Lighting?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a free consultation and discover how our LED solutions can benefit your organization
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="gap-2" data-testid="button-cta-contact">
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
