import { useReducer } from "react";

import Board from "./components/Board";
import type { Task } from "./types/task";
import { tasksReducer } from "./reducers/tasksReducer";

const sampleTasks: Task[] = [
  { id: "1", title: "T1", priority: "low", status: "todo", createdAt: "" },
  {
    id: "2",
    title: "T2",
    priority: "medium",
    status: "todo",
    createdAt: "",
    description: "medium priority task.",
    dueDate: "wednesday",
  },
  {
    id: "3",
    title: "T3",
    priority: "high",
    status: "done",
    createdAt: "",
    description: "in pregress task.",
  },
  {
    id: "4",
    title: "T4",
    priority: "medium",
    status: "in-progress",
    createdAt: "",
    description: "in pregress task.",
  },
];

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, sampleTasks);

  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Kanban Board</h1>
      <Board
        tasks={tasks}
        onEdit={(t) => console.log("edit: ", t)}
        onDelete={(id) => dispatch({ type: "DELETE_TASK", payload: { id } })}
        markDone={(id) =>
          dispatch({ type: "MOVE_TASK", payload: { id, status: "done" } })
        }
      />
    </div>
  );
}

export default App;
