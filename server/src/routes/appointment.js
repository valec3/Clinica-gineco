import { Router } from 'express';
import appointmentController from '../controllers/appointments.js';
const router = Router();

router.get('/', appointmentController.getAll);
router.get('/:id', appointmentController.getById);
router.post('/', appointmentController.create);
router.put('/:id', appointmentController.update);
router.delete('/:id', appointmentController.delete);
router.get('/doctor/:id', appointmentController.getByDoctorId);
router.get('/user/:id', appointmentController.getByUserId);

export default router;
