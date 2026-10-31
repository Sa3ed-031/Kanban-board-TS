import type { Priority } from "../types/task";
import { PRIORITY_LABELS } from "../constants/columns";

const PRIORITY_STYLES: Record<Priority, string> = {
  low: "bg-green-500/15 text-green-400",
  medium: "bg-yellow-500/15 text-yellow-400",
  high: "bg-red-500/15 text-red-400",
};

interface PriorityBadgeProps {
  priority: Priority;
}

function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full ${PRIORITY_STYLES[priority]}`}
    >
      {PRIORITY_LABELS[priority]}
    </span>
  );
}

export default PriorityBadge;
