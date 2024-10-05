import { Module } from '@nestjs/common';
import { featureCategory } from './categories.feature';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [featureCategory],
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [CategoriesService],
})
export class CategoriesModule {
  constructor() {
    console.log('CategoriesModuleのコンストラクタ呼び出し');
  }
}
