import { Button } from '@/components/ui/button';
export const columns = [
    {
        Header: 'Nombre',
        accessorKey: 'name',
    },
    {
        Header: 'Dirección',
        accessorKey: 'address',
    },
    {
        Header: 'Teléfono',
        accessorKey: 'phone',
    },
    {
        header: 'Acciones',
        accessorKey: 'actions',
        cell: (row) => (
            <div className="flex gap-2">
                <Button
                    variant="secondary"
                    className="bg-yellow-300 text-black font-bold hover:bg-yellow-400"
                >
                    Editar
                </Button>
            </div>
        ),
    },
];
