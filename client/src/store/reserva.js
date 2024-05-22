import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const reservaStore = create(
    persist(
        (set) => ({
            reserva: null,
            setReserva: (reserva) => set({ reserva }),
            logout: () => set({ reserva: null }),
        }),
        {
            name: 'reserva-storage',
        },
    ),
);

export default reservaStore;
