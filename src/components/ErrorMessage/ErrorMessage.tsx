type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-xs text-red-500 tracking-wider uppercase font-bold">
      {message}
    </div>
  );
}
