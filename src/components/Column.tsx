import type { Column as ColumnType, Task } from "../types/task";
import TaskCard from "./TaskCard";

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  markDone: (id: string) => void;
}

function Column({ column, tasks, onEdit, onDelete, markDone }: ColumnProps) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4">
      {/* 1. عنوان العمود، وجنبه عدد المهام (تلميح: tasks.length) */}
      <div className="flex items-center justify-between gap-2">
        <h2>{column.title}</h2>
        <span>{tasks.length}</span>
      </div>

      {/* 2. البطاقات (map) */}
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            markDone={markDone}
          />
        ))}
      </div>

      {/* 3. إذا ما في مهام: نص "No tasks yet" */}
      {tasks.length === 0 && <span>No tasks yet.</span>}
    </section>
  );
}

export default Column;
