'use strict';

import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Category } from './category.model';
import { Task } from './task.model';

@Table
export class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @HasMany(() => Category, 'userId')
  categories: Category[];

  @HasMany(() => Task, 'userId')
  tasks: Task[];
}
