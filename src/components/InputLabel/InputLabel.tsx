type InputLabelProps = {
  label: string;
  htmlFor?: string;
};

export function InputLabel({ label, htmlFor }: InputLabelProps) {
  return (
    <label className="block text-sm uppercase tracking-wider" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
