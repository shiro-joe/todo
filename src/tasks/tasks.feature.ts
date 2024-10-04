import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from 'src/models/task.model';

export const featureTask = SequelizeModule.forFeature([Task]);
