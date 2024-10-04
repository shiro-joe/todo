import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/models/category.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {
    console.log('CategoriesServiceのコンストラクタ呼び出し');
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }
}
