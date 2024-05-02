import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from 'src/entities/Task.entity';
import { TasksService } from 'src/services/tasksService';

Controller('tasks');
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() task: Task) {
    this.tasksService.create(task.title, task.body);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
}
