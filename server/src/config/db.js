import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('db_gineco', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    define: {
        timestamps: false,
    },
});
console.log('Conectado a la base de datos');
export default sequelize;
