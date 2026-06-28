import { motion } from "motion/react";

type PulseAvatarProps = {
  src: string;
  alt: string;
};

export default function PulseAvatar({ src, alt }: PulseAvatarProps) {
  return (
    <motion.div
      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
      animate={{ scale: [1, 1.06, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 rounded-full object-cover shrink-0"
      />
    </motion.div>
  );
}
