import AppointmentsTable from '@/components/DataTable';
import { columns, data } from './Columns';

const index = () => {
    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-4">Citas</h2>
            <div className="overflow-auto max-w-[90%]">
                <AppointmentsTable columns={columns} data={data} />
            </div>
        </div>
    );
};

export default index;
