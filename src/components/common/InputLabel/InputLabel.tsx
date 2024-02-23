type InputLabelProps = {
  /**
   * The label to display
   */
  readonly label: string;
  /**
   * The id of the associated input
   */
  readonly htmlFor?: string;
};

export function InputLabel({ label, htmlFor }: InputLabelProps) {
  return (
    <label className="block text-sm uppercase tracking-wider" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
