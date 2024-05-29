// src/store/useStore.ts
import create from 'zustand';

// Определяем интерфейс для состояния
interface StoreState {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

// Создаем хранилище Zustand с начальными значениями и функцией для обновления состояния
const useStore = create<StoreState>((set) => ({
    searchTerm: '',
    setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

export default useStore;
