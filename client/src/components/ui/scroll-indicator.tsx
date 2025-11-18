import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  text?: string;
}

export function ScrollIndicator({
  className,
  text = "Scroll to explore",
}: ScrollIndicatorProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-2 text-muted-foreground cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      onClick={() => {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
      }}
    >
      {text && (
        <span className="text-sm font-medium tracking-wide uppercase">
          {text}
        </span>
      )}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </motion.div>
  );
}
