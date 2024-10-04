'use strict'

import { Module } from "@nestjs/common";
import { databaseProvider } from "./database.provider";
import { DatabaseService } from "./database.service";


@Module({
    imports: [databaseProvider],
    providers: [DatabaseService],
})
export class DatabaseModule{}