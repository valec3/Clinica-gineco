import DataTable from '@/components/DataTable';
import { columns, data } from './Columns';
const Index = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Mis Citas</h2>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Index;
