import { Task } from 'src/domain/entities/task';

export interface CreateTaskRepository {
  createTask: (
    task: CreateTaskRepository.Request,
  ) => Promise<CreateTaskRepository.Response>;
}

export namespace CreateTaskRepository {
  export type Request = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = Task | string;
}
