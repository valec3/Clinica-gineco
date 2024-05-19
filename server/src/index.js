import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import './models/index.js';
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    try {
        sequelize.authenticate();
        // // sequelize.sync({ force: true }); NO EJECUTAR ESTA LINEA
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
});
