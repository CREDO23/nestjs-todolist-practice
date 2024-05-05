import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ITask } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  private tasks: ITask[];

  create(title: string, body: string): string {
    const task = { title, body, done: false };

    if (!this.tasks?.length) {
      this.tasks = [{ id: 1, ...task }];
    } else {
      this.tasks.push({ id: this.tasks.length + 1, ...task });
    }

    return 'Task created successfully';
  }

  findAll() {
    if (!this.tasks) {
      throw new HttpException(
        {
          message: 'No tasks found',
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
        { cause: 'Task not found' }, // Not serialized in the response body but can be helpful for loggind/debugging
      );
    }

    return this.tasks;
  }

  findOne(id: number) {
    if (!this.tasks) {
      throw new HttpException('No tasks found', HttpStatus.NOT_FOUND);
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return task;
  }

  update(id: number, updated: Partial<Omit<ITask, 'id'>>): ITask | string {
    if (!this.tasks) {
      throw new HttpException('No tasks found', HttpStatus.NOT_FOUND);
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updated };
      }

      return task;
    });

    return { ...task, ...updated };
  }

  delete(id: number): string {
    if (!this.tasks) {
      throw new HttpException('No tasks found', HttpStatus.NOT_FOUND);
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    this.tasks = this.tasks.filter((task) => task.id !== id);

    return 'Task deleted successfully';
  }
}
