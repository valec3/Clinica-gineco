import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initUser = {
    name: 'John Doe',
    email: 'John@gmail.com',
    phone: '123-456-7890',
    avatar: 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    role: 'admin',
    address: '123 Fake St, City, Country',
};

const userStore = create(
    persist(
        (set) => ({
            user: initUser,
            setUser: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: 'user-storage',
        },
    ),
);

export default userStore;
