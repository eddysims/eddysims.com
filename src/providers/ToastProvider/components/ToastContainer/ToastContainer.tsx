import { Toast } from "@/providers/ToastProvider/components/Toast";
import { useToastPrivate } from "@/providers/ToastProvider/hooks/useToastPrivate";

export function ToastContainer() {
  const { toasts } = useToastPrivate();

  return (
    <div>
      TOASTS:
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
