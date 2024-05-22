import { Router } from 'express';
import { Doctor, User } from '../models/index.js';
import sequelize from '../config/db.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const doctors = await sequelize.query(
            'SELECT d.id, u.name FROM doctors AS d JOIN users AS u ON d.userId = u.id LIMIT 0, 25;',
            {
                type: sequelize.QueryTypes.SELECT,
            },
        );
        res.json(doctors);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = Doctor.findOne({
            where: {
                id,
            },
        });
        res.json(doctor);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', (req, res) => {
    const { body } = req;
    try {
        const newDoctor = Doctor.create(body);
        res.json(newDoctor);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        Doctor.update(body, {
            where: {
                id,
            },
        });
        res.json({ message: 'Doctor updated' });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        Doctor.destroy({
            where: {
                id,
            },
        });
        res.json({ message: 'Doctor deleted' });
    } catch (error) {
        console.log(error);
    }
});

export default router;
