import { Task } from 'src/domain/entities/task';

export interface GetAllTasksRepository {
  getAllTasks: () => Promise<GetAllTasksRepository.Response>;
}

export namespace GetAllTasksRepository {
  export type Response = Task[];
}
