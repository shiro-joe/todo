'use strict';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';
import { Category } from '../models/category.model';
import { join } from 'path';

export const databaseProvider = SequelizeModule.forRoot({
  dialect: 'sqlite',
  // host: 'localhost',
  // port: 3306,
  // username: 'root',
  // password: 'root',
  // database: 'db',
  storage: join(__dirname, '..', '..', 'todo.db'),
  models: [User, Task, Category],
});
