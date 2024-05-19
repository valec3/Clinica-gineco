import {
    LayoutGrid,
    LogOut,
    User2,
    TextIcon,
    Settings,
    HeartPulse,
} from 'lucide-react';
import { useState } from 'react';
const optionsNav = [
    { label: 'Reporte', icon: <LayoutGrid />, path: '/reporte', role: 'admin' },
    { label: 'Pacientes', icon: <User2 />, path: '/pacientes', role: 'admin' },
    { label: 'Citas', icon: <TextIcon />, path: '/citas', role: 'admin' },
    {
        label: 'Clinicas',
        icon: <HeartPulse />,
        path: '/clinicas',
        role: 'admin',
    },
    {
        label: 'Configuración',
        icon: <Settings />,
        path: '/configuracion',
        role: 'admin',
    },
    { label: 'Inicio', icon: <LayoutGrid />, path: '/inicio', role: 'user' },
    { label: 'Perfil', icon: <User2 />, path: '/perfil', role: 'user' },
    {
        label: 'Mis citas',
        icon: <TextIcon />,
        path: '/mis-citas',
        role: 'user',
    },
];

import { useNavigate } from 'react-router-dom';
import userStore from '@/store/userStore';
const Sidebar = () => {
    const user = userStore((state) => state.user);
    const [active, setActive] = useState(
        optionsNav.find((op) => op.role === user.role).label,
    );
    const navigate = useNavigate();
    const handleChangeOption = (op) => {
        setActive(op.label);
        navigate(`/dashboard${op.path}`);
    };
    console.log(active);
    return (
        <section className="bg-white p-3 flex flex-col justify-between max-h-screen">
            <div>
                <div className="flex gap-1 items-center mb-10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpIkFeoW5yhIiLqTD2ZKJc6DC32MvZX4zJ5lkbjQS79Vh9k0hZAadiloExfwHAEpCnc8&usqp=CAU"
                        alt="logo"
                        className="size-8"
                    />
                    <h3 className="font-bold text-pink-600">GINECONECTA</h3>
                </div>
                <div className="mt-5 w-full flex flex-col gap-y-2">
                    {optionsNav.map(
                        (option, index) =>
                            option.role === user.role && (
                                <button
                                    key={index}
                                    className={`w-full flex items-center gap-2  ${
                                        active === option.label
                                            ? 'bg-pink-500 text-white'
                                            : 'bg-gray-50 text-black'
                                    } p-2 rounded-md cursor-pointer`}
                                    onClick={() => handleChangeOption(option)}
                                >
                                    {option.icon}
                                    <p className=" font-bold">{option.label}</p>
                                </button>
                            ),
                    )}
                </div>
            </div>
            <div>
                <div className="rounded-lg bg-gray-50 mb-4">
                    <img
                        src={user.avatar}
                        alt=""
                        className="size-[100px] rounded-full object-cover mx-auto mt-5"
                    />
                    <h3 className="text-center font-bold mt-2">
                        {user.name} <br />
                    </h3>
                </div>
                <button
                    className="w-fit mx-auto flex items-center gap-2 text-black p-2 rounded-md cursor-pointer  hover:text-red-500 hover:bg-red-100"
                    onClick={() => navigate('/auth/login')}
                >
                    <LogOut /> <p className=" font-bold">Cerrar sesión</p>
                </button>
            </div>
        </section>
    );
};

export default Sidebar;
