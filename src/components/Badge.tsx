import { cn } from "@/lib/utils";
import { BadgeLabelType } from "@/types";

const labelColors: Record<BadgeLabelType, string> = {
  individual: "bg-valhalla-100",
  couple: "bg-info-100",
  family: "bg-kenyan-copper-100",
  child: "bg-success-100",
  group: "bg-warning-100",
  pro: "bg-primary-100",
};

type BadgeProps = {
  className?: string;
  type: BadgeLabelType;
};
export const Badge = ({ type, className }: BadgeProps) => {
  console.log({ type });
  return (
    <h4
      className={cn(
        `text-label-regular w-fit first-letter:capitalize px-1 rounded-sm ${labelColors[type]}`,
        className
      )}
    >
      {type}
    </h4>
  );
};
