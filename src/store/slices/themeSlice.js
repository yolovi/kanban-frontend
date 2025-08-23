import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("darkMode") === "true";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: savedTheme || false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
      //TODO: añadir cambio de color y bgcolor de body y texto porque no es de Ant Design
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
