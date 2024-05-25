import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAppointmentById } from '@/services';

const InfoAppointment = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        const fetchAppointment = async () => {
            const appointmentData = await getAppointmentById(id);
            setAppointment(appointmentData);
        };
        fetchAppointment();
    }, [id]);

    return (
        <section className="max-w-4xl mx-auto p-6 bg-pink-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-pink-500 mb-6">
                Información de la Cita
            </h2>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-pink-500 mb-4">
                    Detalles de la Cita
                </h3>
                <p className="mb-2">
                    <strong>Razón:</strong> {appointment.reason}
                </p>
                <p className="mb-2">
                    <strong>Fecha:</strong>{' '}
                    {new Date(appointment.date).toLocaleDateString()}
                </p>
                <p className="mb-2">
                    <strong>Hora:</strong> {appointment.time}
                </p>
                <p className="mb-2">
                    <strong>Estado:</strong> {appointment.status}
                </p>
                {appointment.payment_image && (
                    <div className="mt-4">
                        <strong>Imagen de Pago:</strong>
                        <img
                            src={appointment.payment_image}
                            alt="Imagen de Pago"
                            className="mt-2 rounded-md w-[200px] aspect-[3/4] object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-pink-500 mb-4">
                    Información del Doctor
                </h3>
                <p className="mb-2">
                    <strong>Especialidad:</strong>{' '}
                    {appointment.doctor?.speciality}
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-500 mb-4">
                    Información del Paciente
                </h3>
                <p className="mb-2">
                    <strong>Nombre:</strong> {appointment.user?.name}
                </p>
                <p className="mb-2">
                    <strong>Email:</strong> {appointment.user?.email}
                </p>
                <p className="mb-2">
                    <strong>Dirección:</strong> {appointment.user?.address}
                </p>
            </div>
        </section>
    );
};

export default InfoAppointment;
