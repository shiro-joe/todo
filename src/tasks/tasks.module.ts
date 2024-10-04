import { Module } from '@nestjs/common';
import { featureTask } from './tasks.feature';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [featureTask],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {
  constructor() {
    console.log('TasksModuleのコンストラクタ呼び出し');
  }
}
