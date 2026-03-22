"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateCardProps {
  children: React.ReactNode;
  index: number;
}

const AnimateCard = ({ children, index }: AnimateCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 * index }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateCard;
