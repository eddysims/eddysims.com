import { useToastPrivate } from "@/providers/ToastProvider/hooks/useToastPrivate";

import { styles } from "./styles";

import type { Toast as TToast } from "@/providers/ToastProvider/ToastProvider";

type ToastProps = {
  readonly toast: TToast;
};

export function Toast({ toast }: ToastProps) {
  const { removeToast } = useToastPrivate();
  const handleClose = () => removeToast(toast.id);

  return (
    <div className={styles.toast(toast.variation)}>
      {toast.message}
      <button onClick={handleClose}>[X]</button>
    </div>
  );
}
