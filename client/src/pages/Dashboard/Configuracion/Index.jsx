const Index = () => {
    return (
        <section className="flex flex-col items-center justify-center px-8 py-10 ">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-pink-400 mb-4 text-center">
                    Configuración
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="firstName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Nombre"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="lastName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Apellido
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Apellido"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo Electrónico"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Teléfono"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="specialty"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Especialidad
                        </label>
                        <input
                            type="text"
                            id="specialty"
                            placeholder="Especialidad"
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
                        <input
                            type="text"
                            id="clinic"
                            placeholder="Clínica"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Index;
