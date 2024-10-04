'use strict';

import { Column, Model, Table, HasMany, BelongsTo } from 'sequelize-typescript';
import { Task } from './task.model';
import { User } from './user.model';

@Table
export class Category extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  userId: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @HasMany(() => Task, 'categoryId')
  tasks: Task[];

  @BelongsTo(() => User, 'userId')
  user: User;
}
