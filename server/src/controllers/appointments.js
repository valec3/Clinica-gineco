import { Appointment, Doctor, User } from '../models/index.js';
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
            include: [
                {
                    model: Doctor,
                    as: 'doctor',
                },
                {
                    model: User,
                    as: 'user',
                },
            ],
        });
        res.json(appointment);
    } catch (error) {
        console.log(error);
    }
};

appointmentController.create = async (req, res) => {
    const { date, time, reason, doctorId, userId, clinicId } = req.body;
    const file = req.files?.payment_image;
    let payment_image =
        'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
    try {
        if (file) {
            const { tempFilePath } = file;
            const { secure_url } = await uploadImage(tempFilePath);
            payment_image = secure_url;
        }
        const newAppointment = await Appointment.create(
            {
                date,
                time,
                reason,
                doctorId,
                userId,
                clinicId,
                payment_image,
            },
            {
                fields: [
                    'date',
                    'time',
                    'reason',
                    'doctorId',
                    'userId',
                    'clinicId',
                    'payment_image',
                ],
            },
        );
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
