import DataTable from '../../../components/DataTable';
import { columns, data } from './Columns';
const index = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Clinicas</h2>
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default index;
