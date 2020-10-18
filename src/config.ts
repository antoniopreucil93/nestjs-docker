import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: `db`,
  port: 5432,
  username: `postgres`,
  password: `postgres`,
  database: `nest_docker`,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logger: 'debug',
  keepConnectionAlive: true,
};
