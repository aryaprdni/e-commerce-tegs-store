import { create } from 'zustand'

interface StoreState {
    email: string;
    setEmail: (email: string) => void;
    clearEmail: () => void;
}

export const useStore = create<StoreState>((set) => ({
    email: '',
    setEmail: (email) => set({ email }),
    clearEmail: () => set({ email: '' }),
}));