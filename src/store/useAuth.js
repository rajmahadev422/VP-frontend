import { create } from "zustand";

export const useAuth = create((set, get) => ({
  userId: '1234',

  login: (formValues) => {
    console.log(formValues);
  },
  register: () => {

  }
}))