import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { useTranslation } from "@/i18n/context";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  const values = [
    {
      icon: Target,
      title: t.about.innovation.title,
      description: t.about.innovation.description,
    },
    {
      icon: Users,
      title: t.about.customerFirst.title,
      description: t.about.customerFirst.description,
    },
    {
      icon: Award,
      title: t.about.quality.title,
      description: t.about.quality.description,
    },
    {
      icon: TrendingUp,
      title: t.about.sustainability.title,
      description: t.about.sustainability.description,
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: t.about.milestones.founded.title,
      description: t.about.milestones.founded.description,
    },
    {
      year: "2017",
      event: t.about.milestones.firstProject.title,
      description: t.about.milestones.firstProject.description,
    },
    {
      year: "2019",
      event: t.about.milestones.certification.title,
      description: t.about.milestones.certification.description,
    },
    {
      year: "2021",
      event: "10,000+ " + t.home.stats.projectsCompleted,
      description: "Reached milestone of serving 500+ organizations",
    },
    {
      year: "2023",
      event: t.about.milestones.innovation.title,
      description: t.about.milestones.innovation.description,
    },
    {
      year: "2025",
      event: t.about.milestones.expansion.title,
      description: t.about.milestones.expansion.description,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-gradient-to-br from-background to-card">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection
            className="max-w-3xl mx-auto text-center"
            animation="fadeInUp"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t.about.title}
              <span className="text-primary"> - {t.about.description}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t.about.missionText}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.about.ourStory}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {t.about.ourStoryDesc1}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t.about.ourStoryDesc2}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {t.about.ourStoryDesc3}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t.about.ourStoryDesc4}
                </motion.p>
              </div>
            </AnimatedSection>
            <StaggeredGrid
              className="grid grid-cols-2 gap-6"
              staggerDelay={0.1}
            >
              <Card
                className="hover-elevate transition-all duration-300"
                data-testid="card-stat-installations"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="text-4xl font-bold text-primary mb-2"
                    data-testid="text-stat-installations"
                  >
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Installations
                  </div>
                </CardContent>
              </Card>
              <Card
                className="hover-elevate transition-all duration-300"
                data-testid="card-stat-organizations"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="text-4xl font-bold text-primary mb-2"
                    data-testid="text-stat-organizations"
                  >
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Organizations
                  </div>
                </CardContent>
              </Card>
              <Card
                className="hover-elevate transition-all duration-300"
                data-testid="card-stat-savings"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="text-4xl font-bold text-primary mb-2"
                    data-testid="text-stat-savings"
                  >
                    80%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Energy Savings
                  </div>
                </CardContent>
              </Card>
              <Card
                className="hover-elevate transition-all duration-300"
                data-testid="card-stat-support"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="text-4xl font-bold text-primary mb-2"
                    data-testid="text-stat-support"
                  >
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </StaggeredGrid>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.about.ourMission}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.about.ourMissionDesc}
            </p>
            <motion.div
              className="inline-block p-8 bg-primary/10 rounded-md"
              whileHover={{
                scale: 1.02,
                backgroundColor: "hsl(var(--primary) / 0.15)",
              }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg text-foreground italic">
                {t.about.comment}
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                — Sarah Chen, CEO & Founder
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
