import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredGrid } from "@/components/ui/staggered-grid";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "Pioneering cutting-edge LED technology to create sustainable lighting solutions for the future.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Building lasting relationships through exceptional service and tailored solutions.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Maintaining the highest standards in every product we deliver to our clients.",
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description:
        "Committed to reducing environmental impact through energy-efficient solutions.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: "Company Founded",
      description: "Started with a vision to revolutionize commercial lighting",
    },
    {
      year: "2017",
      event: "First Major Installation",
      description: "Completed 100,000 sq ft office lighting project",
    },
    {
      year: "2019",
      event: "ISO Certification",
      description: "Achieved ISO 9001 quality management certification",
    },
    {
      year: "2021",
      event: "10,000+ Installations",
      description: "Reached milestone of serving 500+ organizations",
    },
    {
      year: "2023",
      event: "Sustainability Award",
      description: "Recognized for environmental leadership in lighting",
    },
    {
      year: "2025",
      event: "Global Expansion",
      description: "Serving organizations across 20+ countries",
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
              Illuminating the Path to a
              <span className="text-primary"> Brighter Future</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              At LuminaTech, we're more than just a lighting company. We're
              innovators, problem-solvers, and partners in creating sustainable,
              efficient spaces for organizations worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Founded in 2015, LuminaTech emerged from a simple observation:
                  organizations were spending too much on outdated lighting
                  technology while compromising both efficiency and
                  sustainability.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our founders, a team of electrical engineers and
                  sustainability advocates, set out to change this. They
                  envisioned a world where every workspace could benefit from
                  intelligent, energy-efficient LED lighting without breaking
                  the budget.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Today, we've grown from a small startup to a leading provider
                  of commercial LED solutions, serving over 500 organizations
                  and completing more than 10,000 installations worldwide. Our
                  commitment to innovation, quality, and customer satisfaction
                  has remained unwavering.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Every product we design is built with the future in
                  mind—combining cutting-edge technology with sustainable
                  practices to help organizations reduce their carbon footprint
                  while improving their bottom line.
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
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16" animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className="hover-elevate active-elevate-2 transition-all duration-300 h-full"
                  data-testid={`card-value-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "hsl(var(--primary) / 0.2)",
                      }}
                    >
                      <value.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16" animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A decade of innovation and growth
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="flex gap-8 group"
                  data-testid={`milestone-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-16 h-16 bg-primary text-primary-foreground rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {milestone.year}
                    </motion.div>
                    {index !== milestones.length - 1 && (
                      <motion.div
                        className="w-0.5 flex-1 bg-border mt-4"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: "top" }}
                      />
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <Card className="mb-8 hover-elevate transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To empower organizations with innovative, sustainable LED lighting
              solutions that enhance productivity, reduce costs, and protect our
              planet for future generations.
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
                "We believe that great lighting shouldn't come at the cost of
                our environment. Every installation we complete is a step toward
                a more sustainable future."
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
