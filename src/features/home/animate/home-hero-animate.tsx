"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimateHeadline = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const AnimateTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const AnimateDescription = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const AnimateCta = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const FadeInAnimate = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export {
  AnimateHeadline,
  AnimateTitle,
  AnimateDescription,
  AnimateCta,
  FadeInAnimate,
};
