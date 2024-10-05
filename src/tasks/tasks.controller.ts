import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
    console.log('TasksControllerのコンストラクタ呼び出し');
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
}
