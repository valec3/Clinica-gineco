import { User, Doctor, Appointment } from '../models';

const patientController = {};

patientController.getPatients = async (req, res) => {
    try {
        const patients = await User.findAll({
            where: {
                role: 'patient',
            },
        });
        res.json(patients);
    } catch (error) {
        console.log(error);
    }
};

patientController.getPatientById = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await User.findOne({
            where: {
                id,
                role: 'patient',
            },
        });
        res.json(patient);
    } catch (error) {
        console.log(error);
    }
};

patientController.getPatientsByDoctor = async (req, res) => {
    const { doctorId } = req.params;
    try {
        const idPatients = await Appointment.findAll({
            where: {
                doctorId,
            },
        });
        const patients = await User.findAll({
            where: {
                id: idPatients.map((idPatient) => idPatient.userId),
            },
        });
        res.json(patients);
    } catch (error) {
        console.log(error);
    }
};

export default patientController;
