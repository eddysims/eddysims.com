import { MergeExclusive } from "type-fest";

type BaseButtonProps = {
  label: string;
  size?: "base" | "small";
  variation?: "primary" | "ghost";
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  external?: boolean;
  /**
   * Creates a download link out.
   */
  download?: boolean;
  onClick?(): void;
};

type ButtonButtonProps = BaseButtonProps & {
  onClick(): void;
};

export type ButtonProps = MergeExclusive<LinkButtonProps, ButtonButtonProps>;
