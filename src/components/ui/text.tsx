export function Text({ children }: React.PropsWithChildren) {
  return (
    <p className="mb-4 leading-relaxed text-neutral-800 last:mb-0 dark:text-neutral-100">
      {children}
    </p>
  );
}
