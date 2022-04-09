import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    activateSidebar: state => {
      state.isOpen = true;
    },
    deactivateSidebar: state => {
      state.isOpen = false;
    },
  },
});

export const { deactivateSidebar, activateSidebar } = sidebarSlice.actions;
