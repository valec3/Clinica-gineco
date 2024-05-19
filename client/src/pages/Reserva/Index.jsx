import { useNavigate } from 'react-router-dom';

const Index = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const date = event.target.date.value;
        const time = event.target.time.value;
        const clinic = event.target.clinic.value;
        const doctor = event.target.doctor.value;
        const reason = event.target.reason.value;
        console.log({ date, time, clinic, doctor, reason });
        navigate('/reserva/pago');
    };
    const navigate = useNavigate();
    return (
        <section className="flex flex-col justify-center items-center px-8 py-10 bg-pink-100 min-h-screen">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Reserva</h2>
            <p className="text-center text-gray-700 mb-6 font-semibold">
                Bienvenido a la aplicación de citas médicas. Para comenzar,
                completa el formulario de reserva.
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
            >
                <div className="mb-4">
                    <label
                        htmlFor="date"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Fecha
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="time"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Hora
                    </label>
                    <input
                        type="time"
                        id="time"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="clinic"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Clínica
                    </label>
                    <select
                        id="clinic"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="1">Clínica 1</option>
                        <option value="2">Clínica 2</option>
                        <option value="3">Clínica 3</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="doctor"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Médico
                    </label>
                    <select
                        id="doctor"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="1">Dr. Pérez</option>
                        <option value="2">Dr. Gómez</option>
                        <option value="3">Dra. González</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="reason"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Motivo de la consulta
                    </label>
                    <textarea
                        id="reason"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Reservar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Index;
