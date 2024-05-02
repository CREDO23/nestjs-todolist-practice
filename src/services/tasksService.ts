import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/Task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[];

  create(title: string, body: string) {
    const task = new Task(this.tasks.length, title, body);

    this.tasks.push(task);
  }
  findAll() {
    return this.tasks;
  }
}
