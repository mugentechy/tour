import { create } from 'zustand';

const useLoginModal = create((set) => ({
  isOpen: false,
  onSubmit: null,
  onOpen: (submitHandler) => set({ isOpen: true, onSubmit: submitHandler }),
  onClose: () => set({ isOpen: false, onSubmit: null }),
}));

export default useLoginModal;
