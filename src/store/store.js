import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import kanbanReducer from "../features/kanban/kanbanSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    kanban: kanbanReducer,
  },
});
