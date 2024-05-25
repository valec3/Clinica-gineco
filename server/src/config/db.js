import { Sequelize } from 'sequelize';
import { DB_CONFIG } from './env.js';
const sequelize = new Sequelize(
    DB_CONFIG.DATABASE,
    DB_CONFIG.USER,
    DB_CONFIG.PASSWORD,
    {
        host: DB_CONFIG.HOST,
        dialect: 'mysql',
        port: DB_CONFIG.PORT,
    },
);
console.log('Conectado a la base de datos');
export default sequelize;
