import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.25 }}
    >
      <button className={className} {...props}>
        {children}
      </button>
    </motion.div>
  );
}
