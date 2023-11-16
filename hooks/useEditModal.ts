import { create } from "zustand";

interface EditModalState {
    isOpoen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useEditModal = create<EditModalState>((set) => ({
    isOpoen: true,
    onOpen: () => set({ isOpoen: true }),
    onClose: () => set({ isOpoen: false }),
}));
 
export default useEditModal;