export const columns = [
    {
        Header: 'Fecha',
        accessorKey: 'date',
        cell: (row) => (
            <span>{new Date(row.getValue('date')).toLocaleDateString()}</span>
        ),
    },
    {
        Header: 'Hora',
        accessorKey: 'time',
    },
    {
        Header: 'Pago',
        accessorKey: 'pago',
    },
    {
        Header: 'Razón',
        accessorKey: 'reason',
    },
    {
        Header: 'Estado',
        accessorKey: 'status',
        cell: (row) => (
            <span
                className={`px-4 py-2 rounded-full text-xs font-bold capitalize ${
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
