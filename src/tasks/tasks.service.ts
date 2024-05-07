import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ITask } from './interfaces/task.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskModel } from './task.schema';
import { ObjectId } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: TaskModel) {}
  private tasks: ITask[];

  async create(title: string, body: string): Promise<Task> {
    const task = { title, body, done: false };

    return await this.taskModel.create(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async findOne(id: ObjectId): Promise<Task> {
    const task = await this.taskModel.findById(id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async update(
    id: ObjectId,
    updated: Partial<Omit<ITask, 'id'>>,
  ): Promise<Task | null> {
    const task = await this.findOne(id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return await this.taskModel.findByIdAndUpdate(id, updated, { new: true });
  }

  async delete(id: ObjectId): Promise<Task | null> {
    const task = await this.findOne(id);

    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    return await this.taskModel.findByIdAndDelete(id);
  }
}
