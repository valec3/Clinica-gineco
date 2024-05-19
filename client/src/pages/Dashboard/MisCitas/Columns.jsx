export const columns = [
    {
        Header: 'Fecha',
        accessorKey: 'date',
    },
    {
        Header: 'Hora',
        accessorKey: 'time',
    },
    {
        Header: 'Estado',
        accessorKey: 'status',
        cell: (row) => (
            <span
                className={`px-4 py-2 rounded-full text-xs font-bold ${
                    row.getValue('status') === 'Pendiente'
                        ? 'bg-yellow-300 text-black'
                        : row.getValue('status') === 'Confirmada'
                        ? 'bg-green-300 text-black'
                        : 'bg-red-300 text-black'
                }`}
            >
                {row.getValue('status')}
            </span>
        ),
    },
];

export const data = [
    {
        date: '12/12/2021',
        time: '10:00 am',
        status: 'Pendiente',
    },
    {
        date: '12/12/2021',
        time: '10:00 am',
        status: 'Pendiente',
    },
    {
        date: '12/12/2021',
        time: '10:00 am',
        status: 'Pendiente',
    },
    {
        date: '12/12/2021',
        time: '10:00 am',
        status: 'Cancelada',
    },
    {
        date: '12/12/2021',
        time: '10:00 am',
        status: 'Confirmada',
    },
    {
        date: '12/12/2021',
        time: '10:00 am',
        status: 'Pendiente',
    },
];
