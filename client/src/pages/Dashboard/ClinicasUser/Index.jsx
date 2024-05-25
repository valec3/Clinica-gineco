import { Link } from 'react-router-dom';
const clinics = [
    {
        id: 1,
        name: 'Clinica Sanna',
        image: 'https://www.sanna.pe/public/Images/Clinicas/20190403133420_7hejSBa3uo.png',
    },
    {
        id: 2,
        name: 'Clinica Javier Prado',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Clinica_Javier_Prado002.JPG',
    },
    {
        id: 3,
        name: 'Clinica C',
        image: 'https://www.sanna.pe/public/Images/Clinicas/20190403133420_7hejSBa3uo.png',
    },
    {
        id: 4,
        name: 'Clinica Sanna',
        image: 'https://www.sanna.pe/public/Images/Clinicas/20190403133420_7hejSBa3uo.png',
    },
    {
        id: 5,
        name: 'Clinica Javier Prado',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Clinica_Javier_Prado002.JPG',
    },
    {
        id: 6,
        name: 'Clinica C',
        image: 'https://www.sanna.pe/public/Images/Clinicas/20190403133420_7hejSBa3uo.png',
    },
];

const Index = () => {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Lista de Clínicas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {clinics.map((clinic) => (
                    <Link
                        key={clinic.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        to={`/dashboard/clinicas/${clinic.id}`}
                    >
                        <img
                            src={clinic.image}
                            alt={clinic.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                {clinic.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Index;
