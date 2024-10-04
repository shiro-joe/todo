'use strict';

import { Column, Model, Table, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { Category } from './category.model';

@Table
export class Task extends Model {
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
  categoryId: number;

  @Column({
    allowNull: false,
  })
  title: string;

  @Column({
    allowNull: false,
  })
  content: string;

  @Column({
    allowNull: false,
  })
  deadline: number;

  @BelongsTo(() => User, "userId")
  user: User;

  @BelongsTo(() => Category, "categoryId")
  category: Category;
}
