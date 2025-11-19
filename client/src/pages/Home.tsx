import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { SectionSeparator } from "@/components/ui/section-separator";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";
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
  Sparkles,
} from "lucide-react";

export default function Home() {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: Zap,
      title: t.home.benefits.energyEfficient.title,
      description: t.home.benefits.energyEfficient.description,
    },
    {
      icon: Leaf,
      title: t.home.benefits.ecoFriendly.title,
      description: t.home.benefits.ecoFriendly.description,
    },
    {
      icon: TrendingDown,
      title: t.home.benefits.costSavings.title,
      description: t.home.benefits.costSavings.description,
    },
    {
      icon: Clock,
      title: t.home.benefits.longLasting.title,
      description: t.home.benefits.longLasting.description,
    },
  ];

  const categories = [
    {
      icon: Building2,
      title: t.home.applications.office.title,
      description: t.home.applications.office.description,
      category: "office",
    },
    {
      icon: Factory,
      title: t.home.applications.industrial.title,
      description: t.home.applications.industrial.description,
      category: "industrial",
    },
    {
      icon: Store,
      title: t.home.applications.retail.title,
      description: t.home.applications.retail.description,
      category: "retail",
    },
  ];

  const stats = [
    { value: "15+", label: t.home.stats.yearsExperience },
    { value: "500+", label: t.home.stats.happyClients },
    { value: "1000+", label: t.home.stats.projectsCompleted },
    { value: "80%", label: t.home.stats.energySaved },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src="/images/Hero_LED_office_installation_ae691311.png"
            alt="Modern LED office lighting"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 gap-1"
              data-testid="badge-hero-new"
            >
              <Sparkles className="h-3 w-3" />
              {t.home.heroSubtitle}
            </Badge>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t.home.heroTitle}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.home.heroDescription}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="default"
                  className="gap-2"
                  data-testid="button-hero-explore"
                >
                  {t.home.exploreProducts}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-background/50"
                  data-testid="button-hero-quote"
                >
                  {t.home.cta.button}
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16" animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.home.whyChooseUs}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.footer.description}
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className="hover-elevate active-elevate-2 transition-all duration-300 h-full"
                  data-testid={`card-benefit-${index}`}
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "hsl(var(--primary) / 0.2)",
                      }}
                    >
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      <SectionSeparator variant="line" />

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <StaggeredGrid
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            staggerDelay={0.1}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                data-testid={`stat-${index}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.home.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.home.cta.description}
            </p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="default"
                  className="gap-2"
                  data-testid="button-cta-contact"
                >
                  {t.home.getStarted}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
