import RegisterForm from './pages/Auth/RegisterForm';
import LoginForm from './pages/Auth/LoginForm';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import {
    Patients,
    Appointments,
    Clinics,
    MyAppointments,
    Reserva,
    Inicio,
    Configuracion,
    Perfil,
    Reporte,
    ClinicasUser,
    IndividualClinic,
} from './pages';
import ReservaPago from './pages/Reserva/ReservaPago';
import userStore from './store/userStore';
import InfoAppoinment from './pages/Dashboard/Citas/InfoAppoinment';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
    const { user, setUser } = userStore((state) => state);
    useEffect(() => {
        if (user.access_token) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json',
                        },
                    },
                )
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user, setUser]);
    return (
        <div className="App h-screen w-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/auth/login" />} />
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="login" element={<LoginForm />} />
                        <Route path="register" element={<RegisterForm />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route
                            path=""
                            element={<Navigate to="/dashboard/inicio" />}
                        />
                        <Route path="pacientes" element={<Patients />} />
                        <Route path="citas" element={<Appointments />} />
                        <Route path="citas/:id" element={<InfoAppoinment />} />
                        <Route path="reporte" element={<Reporte />} />
                        <Route path="clinicas" element={<Clinics />} />
                        <Route
                            path="configuracion"
                            element={<Configuracion />}
                        />
                        <Route path="perfil" element={<Perfil />} />
                        <Route path="mis-citas" element={<MyAppointments />} />
                        <Route path="inicio" element={<Inicio />} />
                        <Route path="clinicas-red" element={<ClinicasUser />} />
                        <Route
                            path="clinicas/:id"
                            element={<IndividualClinic />}
                        />
                    </Route>
                    <Route path="reserva" element={<Reserva />} />
                    <Route path="reserva/pago" element={<ReservaPago />} />
                    <Route path="*">404 Not Found</Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
