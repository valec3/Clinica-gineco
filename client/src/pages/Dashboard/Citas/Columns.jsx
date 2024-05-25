import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// columns de la citas
export const columns = [
    {
        header: 'Razón',
        accessorKey: 'reason',
    },
    {
        header: 'Fecha',
        accessorKey: 'date',
        cell: (row) => new Date(row.date).toLocaleDateString(),
    },
    {
        header: 'Hora',
        accessorKey: 'time',
    },
    {
        header: 'Pago',
        accessorKey: 'pago',
    },
    {
        header: 'Acciones',
        accessorKey: 'id',
        cell: (row) => (
            <div className="flex gap-2 w-fit">
                <Link to={`/dashboard/citas/${row.getValue('id')}`}>
                    <Button
                        variant="secondary"
                        className="bg-yellow-300 text-black font-bold hover:bg-yellow-400"
                    >
                        Revisar
                    </Button>
                </Link>
                <Button
                    variant="danger"
                    className="bg-red-400 text-white font-bold hover:bg-red-500"
                >
                    Eliminar
                </Button>
            </div>
        ),
    },
];
