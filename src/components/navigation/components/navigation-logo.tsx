import { Home } from "lucide-react";
import Link from "next/link";

export function NavigationLogo() {
  return (
    <div className="mt-4 text-center">
      <Link
        href="/"
        className="text-border inline-flex flex-col items-center justify-center select-none"
      >
        <Home className="size-4" />
        <div className="inline-flex text-2xl lowercase">
          <span className="font-bold">Eddy</span> Sims
        </div>
      </Link>
    </div>
  );
}
