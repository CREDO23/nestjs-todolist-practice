import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ITask } from './interfaces/task.interface';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dtos/create.dto';
import { ObjectId } from 'mongoose';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() task: CreateTaskDTO) {
    return this.tasksService.create(task.title, task.body);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: ObjectId,
  ) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id')
    id: ObjectId,
    @Body() updated: Partial<Omit<ITask, 'id'>>,
  ) {
    return this.tasksService.update(id, updated);
  }

  @Delete(':id')
  delete(
    @Param('id')
    id: ObjectId,
  ) {
    return this.tasksService.delete(id);
  }
}
