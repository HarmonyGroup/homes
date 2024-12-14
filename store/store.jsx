import { create } from "zustand";

const useNavStore = create((set) => ({
    showSidebar: false,
    toggleSidebar: (data) => {
        set({ showSidebar: data });
    },
}));

export default useNavStore;