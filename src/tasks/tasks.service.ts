import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from 'src/models/task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {
    console.log('TasksServiceのコンストラクタ呼び出し');
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll();
  }
}
