import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dtos/create.dto';
import { ObjectId } from 'mongoose';
import { UpdateDTO } from './dtos/update.dto';
import { ParseObjectIdPipe } from 'src/comon/pipes/objectIdValidation.pipe';

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
    @Param('id', ParseObjectIdPipe)
    id: ObjectId,
  ) {
    return this.tasksService.findOne(id);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseObjectIdPipe)
    id: ObjectId,
    @Body() updated: UpdateDTO,
  ) {
    return this.tasksService.update(id, updated);
  }

  @Delete('delete/:id')
  delete(
    @Param('id', ParseObjectIdPipe)
    id: ObjectId,
  ) {
    return this.tasksService.delete(id);
  }
}
