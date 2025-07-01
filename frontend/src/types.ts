export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export interface CreateTaskRequest {
  name: string;
  completed: boolean;
}

export interface UpdateTaskRequest {
  name?: string;
  completed?: boolean;
}

export interface ApiResponse<T> {
  data: T;
}
