import { Task } from 'src/domain/entities/task';

export interface UpdateTaskRepository {
  updatedTask: (
    id: UpdateTaskRepository.Request,
  ) => Promise<UpdateTaskRepository.Response>;
}

export namespace UpdateTaskRepository {
  export type Request = string;
  export type Response = Task | string;
}
