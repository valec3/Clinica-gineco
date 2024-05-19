import { create } from 'zustand';

const initUser = {
    name: 'John Doe',
    email: 'John@gmail.com',
    phone: '123-456-7890',
    avatar: 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    role: 'user',
    address: '123 Fake St, City, Country',
};

const useStore = create((set) => ({
    user: initUser,
    setState: (newState) => set((state) => ({ ...state, ...newState })),
    logout: () => set({ user: null }),
}));

export default useStore;
