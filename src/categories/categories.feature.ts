import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/models/category.model';

export const featureCategory = SequelizeModule.forFeature([Category]);
