"use client";

import { sendGAEvent } from "@next/third-parties/google";
import NextLink from "next/link";

import { Icon } from "@/components/common/Icon";
import type { Icons } from "@/components/common/Icon";

type SocialLinkProps = {
  readonly href: string;
  readonly icon: Icons;
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
      onClick={handleClick}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={icon} />
    </NextLink>
  );
}
