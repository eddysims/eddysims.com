import { useToastPrivate } from "@/providers/ToastProvider/hooks/useToastPrivate";

import type { Toast } from "@/providers/ToastProvider/ToastProvider";

type ToastProps = {
  readonly toast: Toast;
};

export function Toast({ toast }: ToastProps) {
  const { removeToast } = useToastPrivate();
  const handleClose = () => removeToast(toast.id);

  return (
    <div>
      FOOOOO id: {toast.id} <br />
      {toast.message}
      <br />
      {toast?.variation && <div>variation: {toast.variation}</div>}
      <button onClick={handleClose}>[X]</button>
    </div>
  );
}
