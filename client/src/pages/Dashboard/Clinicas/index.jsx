import { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable';
import { columns } from './Columns';
import { getClinics } from '@/services';
const Index = () => {
    const [clinics, setClinics] = useState([]);
    useEffect(() => {
        console.log('Fetching clinics');
        const fetchClinics = async () => {
            const clinics = await getClinics();
            console.log(clinics);
            setClinics(clinics);
        };
        fetchClinics();
    }, []);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Clinicas</h2>
            <DataTable columns={columns} data={clinics} />
        </div>
    );
};

export default Index;
