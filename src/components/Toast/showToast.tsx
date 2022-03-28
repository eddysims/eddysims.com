import {
  forwardRef,
  MutableRefObject,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { render } from "react-dom";

import { Toast, ToastProps, ToastRef } from "./Toast";

import styles from "./Toast.module.css";

export function showToast(props: ToastProps) {
  createDocumentToast(props);
}

function createDocumentToast(props: ToastProps) {
  const targetId = "rdw-toast";
  let target = document.querySelector(`#${targetId}`);

  if (!target) {
    target = document.createElement("div");
    target.id = targetId;
    document.body.appendChild(target);
  }

  render(<ToastWrapper {...props} />, target);
}

function ToastWrapper(props: ToastProps) {
  const toastRef = useRef() as MutableRefObject<ToastRef>;

  useEffect(() => toastRef.current.add(props));

  return <ToastContainer ref={toastRef} />;
}

const ToastContainer = forwardRef(ToastInternal);

interface InternalToastProps extends ToastProps {
  readonly id?: number;
}

function ToastInternal(_: unknown, ref: Ref<ToastRef>) {
  const [toastKey, setToastKey] = useState(0);
  const [toasts, setToasts] = useState<InternalToastProps[]>([]);

  useImperativeHandle(ref, () => ({
    add: (props) => {
      setToastKey(toastKey + 1);
      setToasts([
        {
          ...props,
          id: toastKey,
        },
        ...toasts,
      ]);
    },
  }));

  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <Toast {...toast} key={toast.id} />
      ))}
    </div>
  );
}
