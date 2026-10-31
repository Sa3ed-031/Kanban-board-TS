import type { Task, TaskAction } from "../types/task";

export function tasksReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          ...action.payload,
          id: crypto.randomUUID(),
          status: "todo",
          createdAt: new Date().toISOString(),
        },
      ];

    case "DELETE_TASK":
      return state.filter((t) => t.id !== action.payload.id);

    case "UPDATE_TASK":
      return state.map((t) => {
        if (t.id === action.payload.id) return { ...t, ...action.payload };
        else return t;
      });

    case "MOVE_TASK":
      return state.map((t) => {
        if (t.id === action.payload.id)
          return { ...t, status: action.payload.status };
        else return t;
      });

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustive: never = action;
      return state;
    }
  }
}
