import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Icon } from "@/components/ui/Icon";

import { styles } from "./styles";

import type { Toast as TToast } from "@/providers/ToastProvider/ToastProvider";

type ToastProps = {
  readonly toast: TToast;
};

export function Toast({ toast }: ToastProps) {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          key={toast.id}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <div className={styles.content}>{toast.message}</div>
          <button onClick={handleClose} className={styles.close} type="button">
            <Icon icon="close-line" size="sm" />
          </button>

          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5 }}
            onAnimationComplete={handleClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
