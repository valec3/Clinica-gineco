import { useNavigate } from 'react-router-dom';
import { YapeQR } from '@/assets';
const ReservaPago = () => {
    const yapeNumber = '987-654-321';
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const file = event.target.file.files[0];
        console.log({ file });
        navigate('/dashboard/mis-citas');
    };

    return (
        <section className="flex flex-col items-center justify-center px-8 py-10 bg-pink-100 min-h-screen">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
                Reserva y Pago
            </h2>
            <p className="text-center text-gray-700 mb-6">
                Para confirmar tu reserva, realiza el pago a través de YAPE.
                Escanea el código QR o usa el número proporcionado.
            </p>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md text-center">
                <img
                    src={YapeQR}
                    alt="QR Code de YAPE"
                    className="mx-auto mb-4"
                />
                <p className="text-gray-700 mb-4">
                    Número de YAPE:{' '}
                    <span className="font-bold">{yapeNumber}</span>
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                >
                    <div className="mb-4 w-full">
                        <label
                            htmlFor="file"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Sube tu comprobante de pago
                        </label>
                        <input
                            type="file"
                            id="file"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ReservaPago;
