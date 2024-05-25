import { Router } from 'express';
import patientController from '../controllers/patients.js';

const router = Router();

router.get('/', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.get('/doctor/:doctorId', patientController.getPatientsByDoctor);
