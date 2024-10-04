'use strict';

import { Column, Model, Table } from 'sequelize-typescript';

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
}
