import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

export const featureUser = SequelizeModule.forFeature([User]);
