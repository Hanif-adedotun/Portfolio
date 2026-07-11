import { motion, useReducedMotion } from "motion/react";

type PulseAvatarProps = {
  src: string;
  alt: string;
};

export default function PulseAvatar({ src, alt }: PulseAvatarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
      initial={shouldReduceMotion ? false : { scale: 0.96, opacity: 0.85 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.35,
              ease: [0.23, 1, 0.32, 1],
            }
      }
    >
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 rounded-full object-cover shrink-0"
      />
    </motion.div>
  );
}
