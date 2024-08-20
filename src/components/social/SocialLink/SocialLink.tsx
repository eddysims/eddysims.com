"use client";

import { sendGAEvent } from "@next/third-parties/google";
import NextLink from "next/link";

import { Icon, type IconNames } from "@/components/ui/Icon";

type SocialLinkProps = {
  readonly href: string;
  readonly icon: IconNames;
};

export function SocialLink({ href, icon }: SocialLinkProps) {
  const handleClick = () => {
    sendGAEvent({
      event: "social_link_clicked",
      value: icon,
      label: "social_link",
    });
  };

  return (
    <NextLink
      aria-label={`Visit my ${icon}`}
      onClick={handleClick}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={icon} size="lg" />
    </NextLink>
  );
}
