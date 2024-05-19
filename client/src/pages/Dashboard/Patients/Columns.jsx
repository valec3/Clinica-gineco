import { Button } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';

export const columns = [
    {
        header: 'Nombre',
        accessorKey: 'name',
    },
    {
        header: 'Edad',
        accessorKey: 'age',
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

export const data = [
    {
        id: 1,
        name: 'Juan Perez',
        age: 20,
    },
    {
        id: 2,
        name: 'Maria Lopez',
        age: 30,
    },
    {
        id: 3,
        name: 'Pedro Sanchez',
        age: 40,
    },
];
