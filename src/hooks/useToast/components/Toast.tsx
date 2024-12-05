type ToastProps = {
  title: string;
};

export function Toast({ title }: ToastProps) {
  return <div className="font-semibold">{title}</div>;
}
