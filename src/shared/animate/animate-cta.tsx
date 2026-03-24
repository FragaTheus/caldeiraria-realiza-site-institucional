import { motion } from "framer-motion";

const AnimateCtaHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="justify-self-end lg:order-last lg:col-span-2 "
    >
      {children}
    </motion.div>
  );
};

export default AnimateCtaHeader;
