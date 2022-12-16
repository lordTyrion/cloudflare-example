import { dbConfig } from './knexfile';
import knex from 'knex';

const environment: string = process.env.ENVIRONMENT || 'dev';
const config = dbConfig[environment];
console.log(JSON.stringify(config));

const connection = knex(config);
export { connection };
// export const connection = Knex(config);
