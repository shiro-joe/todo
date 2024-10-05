import { Module } from '@nestjs/common';
import { featureTask } from './tasks.feature';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { UsersService } from 'src/users/users.service';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [featureTask],
  providers: [TasksService, UsersService, CategoriesService],
  controllers: [TasksController],
})
export class TasksModule {
  constructor() {
    console.log('TasksModuleのコンストラクタ呼び出し');
  }
}
