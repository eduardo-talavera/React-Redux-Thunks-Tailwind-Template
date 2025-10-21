import { createSlice } from '@reduxjs/toolkit';


interface UIState {
  showSideMenu: boolean;
}

const initialState: UIState = {
  showSideMenu: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSideMenu: (state) => {
      state.showSideMenu = true;
    },
    closeSideMenu: (state) => {
      state.showSideMenu = false;
    }
  },
});

export const { openSideMenu, closeSideMenu } = uiSlice.actions;
export default uiSlice.reducer;
