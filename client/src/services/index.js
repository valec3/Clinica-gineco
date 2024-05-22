import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getUserById = async (id) => {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const registerUser = async (body) => {
    try {
        const response = await api.post('/users/register', body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const loginUser = async (body) => {
    try {
        const response = await api.post('/users/login', body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateUser = async (id, body) => {
    try {
        const response = await api.put(`/users/${id}`, body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Appointments

export const getAppointments = async () => {
    try {
        const response = await api.get('/appointments');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAppointmentById = async (id) => {
    try {
        const response = await api.get(`/appointments/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createAppointment = async (body) => {
    try {
        const response = await api.post('/appointments', body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateAppointment = async (id, body) => {
    try {
        const response = await api.put(`/appointments/${id}`, body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteAppointment = async (id) => {
    try {
        const response = await api.delete(`/appointments/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAppointmentsByDoctorId = async (id) => {
    try {
        const response = await api.get(`/appointments/doctor/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getAppointmentsByUserId = async (id) => {
    try {
        const response = await api.get(`/appointments/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Clinics

export const getClinics = async () => {
    try {
        const response = await api.get('/clinics');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default api;
