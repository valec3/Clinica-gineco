import { Router } from 'express';
import { Clinic } from '../models/index.js';
const router = Router();

router.get('/', async (req, res) => {
    try {
        const clinics = await Clinic.findAll();
        res.json(clinics);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const clinic = Clinic.findOne({
            where: {
                id,
            },
        });
        res.json(clinic);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', (req, res) => {
    const { body } = req;
    try {
        const newClinic = Clinic.create(body);
        res.json(newClinic);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        Clinic.update(body, {
            where: {
                id,
            },
        });
        res.json({ message: 'Clinic updated' });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        Clinic.destroy({
            where: {
                id,
            },
        });
        res.json({ message: 'Clinic deleted' });
    } catch (error) {
        console.log(error);
    }
});

export default router;
