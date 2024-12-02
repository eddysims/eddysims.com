import { useFormContext } from "react-hook-form";

import { cn } from "@/utils/cva";

type TextareaProps = {
  name: string;
  label?: string;
};

export function Textarea({ name, label }: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && (
        <label
          className="mb-1 inline-flex cursor-pointer text-sm font-bold"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className={input}>
        <textarea
          id={name}
          className="h-full w-full resize-none bg-transparent outline-none"
          {...register(name)}
          rows={5}
        />
      </div>
      {errors?.[name]?.message &&
        typeof errors?.[name]?.message === "string" && (
          <div className="mt-2 text-sm text-red-400">
            {errors?.[name]?.message}
          </div>
        )}
    </div>
  );
}

const input = cn(
  "w-full rounded border border-gray-300 bg-slate-50 p-3 text-sm tracking-wide text-slate-900 outline-none transition-colors",
  "focus-within:bg-white focus-within:ring-1 focus-within:ring-slate-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900",
);
