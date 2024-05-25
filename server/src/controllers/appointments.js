import { Appointment } from '../models/index.js';
import { uploadImage } from '../utils/uploadImage.js';
const appointmentController = {};

appointmentController.getAll = async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        console.log(error);
    }
};

appointmentController.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await Appointment.findOne({
            where: {
                id,
            },
        });
        res.json(appointment);
    } catch (error) {
        console.log(error);
    }
};

appointmentController.create = async (req, res) => {
    const { body, file } = req;
    if (file) {
        const { path } = file;
        const { secure_url } = await uploadImage(path);
        body.payment_image = secure_url;
    }
    try {
        const newAppointment = await Appointment.create(body);
        res.json(newAppointment);
    } catch (error) {
        console.log(error);
    }
};

appointmentController.update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await Appointment.update(body, {
            where: {
                id,
            },
        });
        res.json({ message: 'Appointment updated' });
    } catch (error) {
        console.log(error);
    }
};

appointmentController.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await Appointment.destroy({
            where: {
                id,
            },
        });
        res.json({ message: 'Appointment deleted' });
    } catch (error) {
        console.log(error);
    }
};

appointmentController.getByDoctorId = async (req, res) => {
    const { doctorId } = req.params;
    try {
        const appointments = await Appointment.findAll({
            where: {
                doctorId,
            },
        });
        res.json(appointments);
    } catch (error) {
        console.log(error);
    }
};

appointmentController.getByUserId = async (req, res) => {
    const { id: userId } = req.params;
    try {
        const appointments = await Appointment.findAll({
            where: {
                userId,
            },
        });
        res.json(appointments);
    } catch (error) {
        console.log(error);
    }
};

export default appointmentController;
