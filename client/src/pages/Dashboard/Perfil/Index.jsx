import userStore from '@/store/userStore';
const Index = () => {
    const user = userStore((state) => state.user);
    return (
        <section className="flex flex-col items-center justify-center px-8 py-10 ">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg">
                <div className="flex flex-col items-center mb-6">
                    <img
                        src={user.avatar}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {user.name}
                    </h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Teléfono
                    </label>
                    <p className="text-gray-700">{user.phone}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Dirección
                    </label>
                    <p className="text-gray-700">{user.address}</p>
                </div>
                <button className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Editar Perfil
                </button>
            </div>
        </section>
    );
};

export default Index;
