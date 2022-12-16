import { IKnexConfig } from '../utils/interfaces';

export const dbConfig: IKnexConfig = {
  dev: {
    client: 'pg',
    connection: {
      database: 'public',
      user: 'postgres',
      password: 'xzt8ger6fxq*VQE3fcz',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
