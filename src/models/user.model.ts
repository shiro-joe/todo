"use strict"

import { Column, Model, Table } from "sequelize-typescript";

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
}