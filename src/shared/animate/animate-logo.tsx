import { motion } from "framer-motion";

const AnimateLogo = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:col-span-2"
    >
      {children}
    </motion.div>
  );
};

export default AnimateLogo;
