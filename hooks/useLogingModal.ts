import { create } from "zustand";
interface LoginModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useLoginModal = create<LoginModalState>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
 
export default useLoginModal;