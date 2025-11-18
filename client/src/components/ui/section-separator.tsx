import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionSeparatorProps {
  className?: string;
  variant?: "line" | "dots" | "gradient";
}

export function SectionSeparator({
  className,
  variant = "line",
}: SectionSeparatorProps) {
  const variants = {
    line: "h-px bg-gradient-to-r from-transparent via-border to-transparent",
    dots: "flex items-center justify-center gap-2",
    gradient:
      "h-24 bg-gradient-to-b from-transparent via-border/20 to-transparent",
  };

  if (variant === "dots") {
    return (
      <motion.div
        className={cn("flex items-center justify-center gap-2 py-8", className)}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary/40 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn("w-full", variants[variant], className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  );
}
