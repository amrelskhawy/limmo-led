import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  productId: z.string().optional(),
  productName: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [location] = useLocation();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const params = new URLSearchParams(location.split("?")[1]);
  const productId = params.get("productId") || "";
  const productName = params.get("productName") || "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: productName
        ? `I'm interested in learning more about the ${productName}.`
        : "",
      productId: productId,
      productName: productName,
    },
  });

  useEffect(() => {
    if (productName) {
      form.setValue(
        "message",
        `I'm interested in learning more about the ${productName}.`
      );
      form.setValue("productId", productId);
      form.setValue("productName", productName);
    }
  }, [productName, productId, form]);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md mx-6">
            <CardContent className="p-12 text-center">
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.h2
                className="text-2xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Thank You!
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Your message has been sent successfully. Our team will get back
                to you within 24 hours.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  onClick={() => setIsSuccess(false)}
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection
            className="text-center max-w-3xl mx-auto"
            animation="fadeInUp"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions about our LED solutions? We're here to help. Fill
              out the form below and our team will get back to you within 24
              hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection
              className="lg:col-span-2"
              animation="fadeInLeft"
              delay={0.2}
            >
              <Card>
                <CardContent className="p-8">
                  <Form {...form}>
                    <motion.form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {productName && (
                        <div className="p-4 bg-primary/10 rounded-md border border-primary/20 mb-6">
                          <p className="text-sm text-foreground">
                            <span className="font-semibold">
                              Product Inquiry:
                            </span>{" "}
                            {productName}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  {...field}
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@company.com"
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Acme Corp"
                                  {...field}
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+1 (555) 000-0000"
                                  {...field}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your lighting needs..."
                                className="min-h-32"
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={contactMutation.isPending}
                          data-testid="button-submit"
                        >
                          {contactMutation.isPending
                            ? "Sending..."
                            : "Send Message"}
                        </Button>
                      </motion.div>
                    </motion.form>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card data-testid="card-contact-email">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "hsl(var(--primary) / 0.2)",
                          }}
                        >
                          <Mail className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Email Us
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            For general inquiries
                          </p>
                          <a
                            href="mailto:info@luminatech.com"
                            className="text-primary hover:underline"
                            data-testid="link-contact-email"
                          >
                            info@luminatech.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card data-testid="card-contact-phone">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "hsl(var(--primary) / 0.2)",
                          }}
                        >
                          <Phone className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Call Us
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Mon-Fri, 9AM-6PM EST
                          </p>
                          <a
                            href="tel:+1-555-0123"
                            className="text-primary hover:underline"
                            data-testid="link-contact-phone"
                          >
                            +1 (555) 012-3456
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card data-testid="card-contact-address">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "hsl(var(--primary) / 0.2)",
                          }}
                        >
                          <MapPin className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Visit Us
                          </h3>
                          <p
                            className="text-sm text-muted-foreground"
                            data-testid="text-contact-address"
                          >
                            123 Innovation Drive
                            <br />
                            Tech Park, CA 94025
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className="bg-primary text-primary-foreground"
                    data-testid="card-urgent-contact"
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">
                        Need Immediate Assistance?
                      </h3>
                      <p className="text-sm text-primary-foreground/90 mb-4">
                        Our sales team is available 24/7 for urgent inquiries
                      </p>
                      <a href="tel:+1-555-0123">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="secondary"
                            size="sm"
                            className="w-full"
                            data-testid="button-call-now"
                          >
                            Call Now
                          </Button>
                        </motion.div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
