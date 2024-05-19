import { Button } from '@/components/ui/button';
export const columns = [
    {
        Header: 'Nombre',
        accessorKey: 'nombre',
    },
    {
        Header: 'Dirección',
        accessorKey: 'direccion',
    },
    {
        Header: 'Teléfono',
        accessorKey: 'telefono',
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
        nombre: 'Clinica 1',
        direccion: 'Calle 1',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 2',
        direccion: 'Calle 2',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 3',
        direccion: 'Calle 3',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 4',
        direccion: 'Calle 4',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 5',
        direccion: 'Calle 5',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 6',
        direccion: 'Calle 6',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 7',
        direccion: 'Calle 7',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 8',
        direccion: 'Calle 8',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 9',
        direccion: 'Calle 9',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 10',
        direccion: 'Calle 10',
        telefono: '123456',
    },
    {
        nombre: 'Clinica 11',
        direccion: 'Calle 11',
        telefono: '123456',
    },
];
