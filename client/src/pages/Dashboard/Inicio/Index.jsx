import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@/assets';

const Index = () => {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col items-center justify-center px-8 py-10 ">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-2xl">
                <img
                    src={HomeIcon}
                    alt="Welcome"
                    className="w-full h-48 object-cover"
                />
                <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-pink-400 mb-4">
                        Bienvenido
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Bienvenido a la aplicación de citas médicas. Para
                        comenzar, selecciona una opción del menú de la
                        izquierda.
                    </p>
                    <div className="text-left mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Beneficios de nuestra aplicación:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Reserva de citas fácil y rápida.</li>
                            <li>Acceso a historiales médicos.</li>
                            <li>Recordatorios de citas.</li>
                            <li>Atención médica de calidad.</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate('/reserva')}
                        className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                    >
                        Reservar cita
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Index;
