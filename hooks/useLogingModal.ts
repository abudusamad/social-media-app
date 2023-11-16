import { create } from "zustand";
interface LoginModalState {
    isOPen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useLoginModal = create<LoginModalState>((set) => ({
    isOPen: false,
    onOpen: () => set({ isOPen: true }),
    onClose: () => set({ isOPen: false }),
}));
 
export default useLoginModal;