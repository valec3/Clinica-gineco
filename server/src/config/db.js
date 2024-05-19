import sequelize from 'sequelize';

const db = new sequelize('clinica_gi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
