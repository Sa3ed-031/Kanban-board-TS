export type Status = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: Status;
  dueDate?: string;
  createdAt: string;
}

export type NewTask = Omit<Task, "id" | "status" | "createdAt">;
export type TaskUpdate = Partial<NewTask> & { id: string };

export interface Column {
  id: Status;
  title: string;
}

// discriminated union, every action has different type, and different payload.
export type TaskAction =
  | { type: "ADD_TASK"; payload: NewTask }
  | { type: "UPDATE_TASK"; payload: TaskUpdate }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "MOVE_TASK"; payload: { id: string; status: Status } };
