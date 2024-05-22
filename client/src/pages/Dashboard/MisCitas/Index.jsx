import DataTable from '@/components/DataTable';
import { columns } from './Columns';
import { useEffect, useState } from 'react';
import { getAppointmentsByUserId } from '@/services/index';
import userStore from '../../../store/userStore';
const Index = () => {
    const [myAppointments, setMyAppointments] = useState([]);
    const { user } = userStore();
    useEffect(() => {
        const fetchMyAppointments = async () => {
            const appointments = await getAppointmentsByUserId(user.id);
            setMyAppointments(appointments);
        };
        fetchMyAppointments();
    }, []);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Mis Citas</h2>
            <DataTable columns={columns} data={myAppointments} />
        </div>
    );
};

export default Index;
