import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import './models/index.js';
import userRouter from './routes/user.js';
import appointmentRouter from './routes/appointment.js';
import clinicRouter from './routes/clinic.js';
const app = express();

app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/users', userRouter);
app.use('/appointments', appointmentRouter);
app.use('/clinics', clinicRouter);
app.listen(3000, () => {
    try {
        sequelize.authenticate();
        // //sequelize.sync({ force: true }); //NO EJECUTAR ESTA LINEA
        console.log('Conectado a la base de datos');
        console.log('Servidor escuchando en http://localhost:3000');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
});
