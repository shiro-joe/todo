import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from 'src/models/task.model';
import { Category } from 'src/models/category.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {
    console.log('TasksServiceのコンストラクタ呼び出し');
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll({
      include: {
        model: Category,
        attributes: ['name'],
      },
    });
  }

  async selectByUserId(userId: number): Promise<Task[]> {
    return this.taskModel.findAll({
      include: {
        model: Category,
        attributes: ['name'],
      },
      where: {
        userId: userId,
      },
    });
  }

  async selectByUserIdAndCategoryId(
    userId: number,
    categoryId: number,
  ): Promise<Task[]> {
    return this.taskModel.findAll({
      include: {
        model: Category,
        attributes: ['name'],
      },
      where: {
        userId: userId,
        categoryId: categoryId,
      },
    });
  }
}
