import PatientsTable from '@/components/DataTable';
import { columns, data } from './Columns';
import { Button } from '@/components/ui/button';
import PatientModal from './PatientModal';
import { useState } from 'react';
const Index = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="px-2">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Lista de pacientes
                </h2>
                <Button
                    className="bg-pink-400"
                    onClick={() => setOpenModal(true)}
                >
                    Crear paciente
                </Button>
            </div>
            <PatientsTable columns={columns} data={data} />
            <PatientModal open={openModal} setOpen={setOpenModal} />
        </div>
    );
};

export default Index;
