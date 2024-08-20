import { cn } from "@/utils/cva";

import { Icon, type IconNames } from "@/components/ui/Icon";

type DetailsProps = {
  label: string;
  icon: IconNames;
};

export function Details({ label, icon }: DetailsProps) {
  return (
    <div className={styles.details}>
      <span className={styles.icon}>
        <Icon icon={icon} size="sm" />{" "}
      </span>
      {label}
    </div>
  );
}

const styles = {
  details: cn("flex items-center gap-2"),
  icon: cn("-mt-0.5"),
};
