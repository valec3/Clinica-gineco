import RegisterForm from './pages/Auth/RegisterForm';
import LoginForm from './pages/Auth/LoginForm';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Patients, Appointments, Clinics, MyAppointments } from './pages';

function App() {
    return (
        <div className="App ">
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
                            element={<div>Configuración</div>}
                        />
                        <Route path="perfil" element={<div>Perfil</div>} />
                        <Route path="mis-citas" element={<MyAppointments />} />
                        <Route path="inicio" element={<div>Inicio</div>} />
                    </Route>
                    <Route path="*">404 Not Found</Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
