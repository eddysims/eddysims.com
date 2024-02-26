import { Toast } from "@/providers/ToastProvider/components/Toast";
import { useToastPrivate } from "@/providers/ToastProvider/hooks/useToastPrivate";

import { styles } from "./styles";

export function ToastContainer() {
  const { toasts } = useToastPrivate();

  return (
    <div className={styles}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
