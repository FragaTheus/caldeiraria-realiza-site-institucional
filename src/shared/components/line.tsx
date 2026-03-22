"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Line = ({ width }: { width: number | string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={{ width: inView ? width : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-px bg-primary mt-2"
    />
  );
};

export default Line;
