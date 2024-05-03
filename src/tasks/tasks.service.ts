import { Injectable } from '@nestjs/common';
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
    return this.tasks || 'No tasks found';
  }

  findOne(id: number) {
    if (!this.tasks) {
      return 'No tasks found';
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      return 'Task not found';
    }

    return task;
  }

  update(id: number, updated: Partial<Omit<ITask, 'id'>>): ITask | string {
    if (!this.tasks) {
      return 'No tasks found';
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      return 'Task not found';
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
      return 'No tasks found';
    }

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      return 'Task not found';
    }

    this.tasks = this.tasks.filter((task) => task.id !== id);

    return 'Task deleted successfully';
  }
}
