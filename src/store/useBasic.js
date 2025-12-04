import { create } from "zustand";

export const useBasic = create((set, get) => ({
  count: 0,
  increase: () => {
    const c = get().count;
    set({count: c+1});
  },
  decrease: () => {
    const c = get().count;
    set({count: c-1});
  },
}))