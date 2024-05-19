const PatientModal = ({ open, setOpen }) => {
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('fixed')) {
            setOpen(false);
        }
        console.log(e.target);
    };
    console.log(open);
    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center ${
                open ? 'block' : 'hidden'
            }`}
            onClick={handleClickOutside}
        >
            <div className="bg-white p-4 rounded-lg w-full m-8 md:w-1/2 relative">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Crear paciente
                </h2>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            name="apellido"
                            id="apellido"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            name="telefono"
                            id="telefono"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-pink-400 p-2 text-white rounded-md">
                            Guardar
                        </button>
                        <button
                            className="bg-gray-300 p-2 text-black rounded-md"
                            onClick={() => setOpen(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientModal;
