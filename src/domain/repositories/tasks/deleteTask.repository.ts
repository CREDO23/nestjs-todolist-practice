export interface DeleteTaskRepository {
  deleteTask: (
    id: DeleteTaskRepository.Request,
  ) => Promise<DeleteTaskRepository.Response>;
}

export namespace DeleteTaskRepository {
  export type Request = number;
  export type Response = boolean | string;
}
