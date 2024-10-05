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

  async addTask(
    userId: number,
    categoryId: number,
    title: string,
    content: string,
    deadline: number,
  ): Promise<void> {
    this.taskModel.create({
      userId: userId,
      categoryId: categoryId,
      title: title,
      content: content,
      deadline: deadline,
    });
  }

  async deleteTask(userId: number, title: string): Promise<void> {
    this.taskModel.destroy({
      where: {
        userId: userId,
        title: title,
      },
    });
  }
}
