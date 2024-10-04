import { Sequelize } from "sequelize-typescript";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseService {
    constructor(private sequelize: Sequelize) {
        this.sequelizeSync();
    }
    async sequelizeSync() {
        await this.sequelize.sync();
    }
}