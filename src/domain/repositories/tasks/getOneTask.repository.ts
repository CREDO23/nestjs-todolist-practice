import { Task } from 'src/domain/entities/task';

export interface GetOneTaskRepository {
  getOneTask: (
    id: GetOneTaskRepository.Request,
  ) => Promise<GetOneTaskRepository.Response>;
}

export namespace GetOneTaskRepository {
  export type Request = string;
  export type Response = Task | string;
}
