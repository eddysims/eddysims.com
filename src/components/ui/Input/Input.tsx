import { useFormContext } from "react-hook-form";

import { cn } from "@/utils/cva";

type InputProps = {
  name: string;
  label?: string;
  type?: "text" | "email";
  isHoneyPot?: boolean;
};

export function Input({ name, label, type = "text", isHoneyPot }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn(isHoneyPot && "hidden")}>
      {label && (
        <label
          className="mb-1 inline-flex cursor-pointer text-sm font-bold"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className={input({ isHoneyPot })}>
        <input
          hidden={isHoneyPot}
          id={name}
          className="h-full w-full bg-transparent outline-none"
          type={type}
          {...register(name)}
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

const input = ({ isHoneyPot }: Pick<InputProps, "isHoneyPot">) =>
  cn(
    "h-10 w-full rounded border border-gray-300 bg-slate-50 px-3 text-sm tracking-wide text-slate-900 outline-none transition-colors",
    "focus-within:bg-white focus-within:ring-1 focus-within:ring-slate-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900",
    {
      hidden: isHoneyPot,
    },
  );
