type ErrorMessageProps = {
  /**
   * The message to display
   */
  readonly label: string;
};

export function ErrorMessage({ label }: ErrorMessageProps) {
  return (
    <div className="text-xs font-bold uppercase tracking-wider text-red-500">
      {label}
    </div>
  );
}
