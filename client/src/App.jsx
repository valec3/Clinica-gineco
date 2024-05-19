import RegisterForm from './pages/Auth/RegisterForm';
import LoginForm from './pages/Auth/LoginForm';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {
    Patients,
    Appointments,
    Clinics,
    MyAppointments,
    Reserva,
    Inicio,
    Configuracion,
    Perfil,
} from './pages';
import ReservaPago from './pages/Reserva/ReservaPago';

function App() {
    return (
        <div className="App h-screen w-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="login" element={<LoginForm />} />
                        <Route path="register" element={<RegisterForm />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="pacientes" element={<Patients />} />
                        <Route path="citas" element={<Appointments />} />
                        <Route path="reporte" element={<div>Reporte</div>} />
                        <Route path="clinicas" element={<Clinics />} />
                        <Route
                            path="configuracion"
                            element={<Configuracion />}
                        />
                        <Route path="perfil" element={<Perfil />} />
                        <Route path="mis-citas" element={<MyAppointments />} />
                        <Route path="inicio" element={<Inicio />} />
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
