type ErrorMessageProps = {
  /**
   * The message to display
   */
  readonly label: string;
};

export function ErrorMessage({ label }: ErrorMessageProps) {
  return (
    <div className="text-xs text-red-500 tracking-wider uppercase font-bold">
      {label}
    </div>
  );
}
