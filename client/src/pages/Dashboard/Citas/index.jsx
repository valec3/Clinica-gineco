import AppointmentsTable from '@/components/DataTable';
import { columns } from './Columns';
import { useEffect, useState } from 'react';
import { getAppointments } from '@/services';
const Index = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        console.log('Fetching appointments');
        const fetchAppointments = async () => {
            const appointments = await getAppointments();
            setAppointments(appointments);
        };
        fetchAppointments();
    }, []);
    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-4">Citas</h2>
            <div className="overflow-auto max-w-[90%]">
                <AppointmentsTable columns={columns} data={appointments} />
            </div>
        </div>
    );
};

export default Index;
