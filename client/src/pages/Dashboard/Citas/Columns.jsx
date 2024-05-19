import { Button } from '@/components/ui/button';
// columns de la citas
export const columns = [
    {
        header: 'Tratamiento',
        accessorKey: 'treatment',
    },
    {
        header: 'Fecha',
        accessorKey: 'date',
    },
    {
        header: 'Hora',
        accessorKey: 'time',
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
        treatment: 'Limpieza',
        date: '2022-10-10',
        time: '10:00',
    },
    {
        id: 2,
        treatment: 'Extracción',
        date: '2022-10-10',
        time: '11:00',
    },
    {
        id: 3,
        treatment: 'Limpieza',
        date: '2022-10-10',
        time: '12:00',
    },
    {
        id: 4,
        treatment: 'Extracción',
        date: '2022-10-10',
        time: '13:00',
    },
    {
        id: 5,
        treatment: 'Limpieza',
        date: '2022-10-10',
        time: '14:00',
    },
    {
        id: 6,
        treatment: 'Extracción',
        date: '2022-10-10',
        time: '15:00',
    },
    {
        id: 7,
        treatment: 'Limpieza',
        date: '2022-10-10',
        time: '16:00',
    },
    {
        id: 8,
        treatment: 'Extracción',
        date: '2022-10-10',
        time: '17:00',
    },
    {
        id: 9,
        treatment: 'Limpieza',
        date: '2022-10-10',
        time: '18:00',
    },
    {
        id: 10,
        treatment: 'Extracción',
        date: '2022-10-10',
        time: '19:00',
    },
    {
        id: 11,
        treatment: 'Limpieza',
        date: '2022-10-10',
        time: '20:00',
    },
    {
        id: 12,
        treatment: 'Extracción',
        date: '2022-10-10',
        time: '21:00',
    },
];
