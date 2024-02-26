import { useToastPrivate } from "@/providers/ToastProvider/hooks/useToastPrivate";

import { Icon } from "@/components/common/Icon";

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
      <button onClick={handleClose} className={styles.close}>
        <Icon icon="x" />
      </button>
    </div>
  );
}
