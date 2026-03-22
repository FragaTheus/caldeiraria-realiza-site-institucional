"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Line = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={{ width: inView ? "100%" : 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`h-px bg-primary ${className}`}
    />
  );
};

export default Line;
