import { clinics } from './Index';
import { useParams } from 'react-router-dom';
const IndividualClinic = () => {
    const { id } = useParams();
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">{clinics[id].name}</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <img
                        src={clinics[id].image}
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
                        {clinics[id].doctors.map((doctor, idx) => (
                            <li key={idx}>{doctor.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">
                        Horario de Atención:
                    </h3>
                    <p>
                        {Object.keys(clinics[id].schedule).map((day, idx) => (
                            <p key={idx}>
                                {day}: {clinics[id].schedule[day]}
                            </p>
                        ))}
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Ubicación:</h3>
                    <p>
                        <strong>Dirección:</strong>{' '}
                        {clinics[id].location.address}
                    </p>
                    <p>
                        <strong>Teléfono:</strong> {clinics[id].location.phone}
                    </p>
                    <p>
                        <strong>Email:</strong> {clinics[id].location.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IndividualClinic;
