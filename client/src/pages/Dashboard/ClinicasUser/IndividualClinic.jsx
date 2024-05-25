const IndividualClinic = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Clinica A</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <img
                        src="https://www.sanna.pe/public/Images/Clinicas/20190403133420_7hejSBa3uo.png"
                        alt="Clinica A"
                        className="w-full h-56 object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-lg font-bold mb-2">Descripción:</h3>
                    <p>
                        La clinica Sanna es una de las mejores clínicas del país
                        y cuenta con los mejores médicos especialistas en
                        diferentes áreas de la medicina. Contamos con la mejor
                        tecnología y equipos médicos de última generación.
                        Atendemos todo tipo de enfermedades y realizamos
                        cirugías de alta complejidad.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Médicos:</h3>
                    <ul>
                        <li>Dr. Juan Pérez</li>
                        <li>Dra. María González</li>
                        <li>Dr. Pedro Rodríguez</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">
                        Horario de Atención:
                    </h3>
                    <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    <p>Sábados: 8:00 AM - 12:00 PM</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Ubicación:</h3>
                    <p>Dirección: Calle Principal #123, Ciudad, País</p>
                    <p>Teléfono: +123 456 789</p>
                    <p>Email: info@clinicax.com</p>
                </div>
            </div>
        </div>
    );
};

export default IndividualClinic;
