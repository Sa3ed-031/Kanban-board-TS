import type { Task } from "../types/task";
import PriorityBadge from "./PriorityBadge";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  markDone: (id: string) => void;
}

function TaskCard({ task, onEdit, onDelete, markDone }: TaskCardProps) {
  return (
    <div className="wfit p-4 flex flex-col items-start gap-3 rounded-xl bg-[#1A223C]">
      {/* 1. العنوان، و PriorityBadge جنبه */}
      <div className="flex items-center justify-center gap-2">
        <h3>{task.title}</h3>
        <PriorityBadge priority={task.priority} />
      </div>

      {/* 2. الوصف، بس إذا موجود (تلميح: task.description && ...) */}
      {task.description && <span>{task.description}</span>}

      {/* 3. تاريخ التسليم، بس إذا موجود */}
      {task.dueDate && <span className="text-slate-400">{task.dueDate}</span>}

      {/* 4. زرين: Edit و Delete */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-1 px-2 font-bold rounded-lg cursor-pointer active:scale-95 text-red-700 bg-red-200"
          onClick={() => {
            onDelete(task.id);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="p-1 px-2 font-bold rounded-lg cursor-pointer active:scale-95 text-blue-700 bg-blue-200"
          onClick={() => {
            onEdit(task);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="p-1 px-2 font-bold rounded-lg cursor-pointer active:scale-95 text-green-700 bg-green-200"
          onClick={() => {
            markDone(task.id);
          }}
        >
          Mark Done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
