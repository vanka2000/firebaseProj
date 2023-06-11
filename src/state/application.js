import { create } from 'zustand'

export const useApplication = create((set) => ({
  formSent: false,
  loading: false,
  sendData: async (data) => {

  }
}))
