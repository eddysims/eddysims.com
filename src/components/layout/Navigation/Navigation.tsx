"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/utils/cva";

import { SocialLinks } from "@/components/social/SocialLinks";
import { Icon } from "@/components/ui/Icon";

import { useEventCapture } from "@/hooks/useEventCapture";

import {
  NavigationItem,
  type NavigationItemProps,
} from "./components/NavigationItem";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const capture = useEventCapture();

  const menuItems: NavigationItemProps[] = [
    {
      label: "Eddy Sims",
      href: "/",
      caption: "Software Engineer",
    },
    {
      label: "Blog",
      href: "/blog",
      caption: "Explore my writings",
    },
    {
      label: "Contact Me",
      href: "/contact",
      caption: "Come say hi!",
    },
    {
      label: "Resume",
      href: "/pdfs/Eddy-Sims_Resume.pdf",
      caption: "Download it here",
      icon: "attachment-line",
      onClick: () => {
        capture("downloaded-resume", {
          pathname,
        });
      },
    },
    {
      label: "Storybook",
      href: "https://storybook.eddysims.com/",
      caption: "Over engineering required",
    },
  ];

  return (
    <>
      <div className={wrapper(isOpen)}>
        <nav className="flex h-full w-screen flex-col justify-center px-1 md:w-72">
          <span className="mx-5 -mt-20 mb-16 hidden text-slate-600 lg:inline-block">
            <Icon icon="menu-line" size="lg" />
          </span>
          <ul className="grid gap-12">
            {menuItems.map((item) => (
              <NavigationItem
                {...item}
                key={item.href}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  item.onClick?.();
                }}
              />
            ))}
          </ul>

          {pathname !== "/" && (
            <>
              <hr className="my-8 border-slate-800" />
              <div className="px-5">
                <SocialLinks />
              </div>
            </>
          )}
        </nav>
      </div>
      <button
        className="fixed left-5 top-8 z-50 lg:hidden"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon icon={isOpen ? "close-line" : "menu-line"} size="lg" />
      </button>
    </>
  );
}

const wrapper = (isOpen: boolean) =>
  cn(
    "fixed top-0 z-50 h-dvh min-h-dvh w-0 overflow-hidden bg-slate-900/90 backdrop-blur transition-all",
    "border-r shadow-none duration-300",
    "lg:sticky lg:top-0 lg:w-72 lg:border-0 lg:bg-transparent lg:duration-0",
    "3xl:border-r 3xl:border-slate-800",
    {
      "w-screen border-slate-800 shadow-lg md:w-72": isOpen,
      "border-transparent": !isOpen,
    },
  );
