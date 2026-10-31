import Column from "./Column";
import type { Task } from "../types/task";
import { COLUMNS } from "../constants/columns";

interface BoardProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  markDone: (id: string) => void;
}

function Board({ tasks, onEdit, onDelete, markDone }: BoardProps) {
  return (
    <section className="md:grid-cols-3 p-4 grid gap-4 rounded-2xl bg-white/5">
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={tasks.filter((t) => t.status === column.id)}
          onEdit={onEdit}
          onDelete={onDelete}
          markDone={markDone}
        />
      ))}
    </section>
  );
}

export default Board;
