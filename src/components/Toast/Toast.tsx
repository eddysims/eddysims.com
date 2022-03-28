import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";

import styles from "./Toast.module.css";

export interface ToastProps {
  readonly message: string;
  readonly variation?: "success" | "error";
}

export interface ToastRef {
  add(props: ToastProps): void;
}

export function Toast({ message, variation = "success" }: ToastProps) {
  const [open, setOpen] = useState(true);
  const timer = 5000;

  setTimeout(() => {
    setOpen(false);
  }, timer);

  const toastClass = classnames(styles.toast, styles[variation]);
  const timerClass = classnames(styles.timer, styles[variation]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={toastClass}
          initial={{ opacity: 0, translateY: "50%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          exit={{ opacity: 0, translateY: "10%" }}
          transition={{ duration: 0.5 }}
        >
          {message}
          <motion.div
            className={timerClass}
            initial={{ opacity: 1, width: "100%" }}
            animate={{ opacity: 0.5, width: "0%" }}
            transition={{ duration: timer / 1000, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
