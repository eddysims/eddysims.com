import { MergeExclusive } from "type-fest";

type BaseButtonProps = {
  label: string;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  external?: boolean;
  onClick?(): void;
};

type ButtonButtonProps = BaseButtonProps & {
  onClick(): void;
};

export type ButtonProps = MergeExclusive<LinkButtonProps, ButtonButtonProps>;
