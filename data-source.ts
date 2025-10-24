import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv';
import { User } from './src/modules/v1/users/entities/user.entity';
import { Task } from './src/modules/v1/tasks/entities/task.entity';

dotenv.config();
 
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '8889'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ['./src/migrations/*.ts'],
    entities: [User, Task],
    synchronize: false,
});