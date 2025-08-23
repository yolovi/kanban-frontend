//TODO:
// import { createSlice } from "@reduxjs/toolkit";
// import { kanbanData } from "../../features/kanban/data/kanbanData";

// const initialState = kanbanData; // mock inicial; luego se puede cambiar a lectura desde localStorage (persitencia)

// const boardSlice = createSlice({
//   name: "board",
//   initialState,
//   reducers: {
//     initializeBoard(state, action) {
//       return action.payload || state; // por si quieres cargar otro board
//     },
//     moveCard(state, action) {
//       const { activeId, sourceColId, destColId, destIndex } = action.payload;

//       if (!activeId || !sourceColId || !destColId || destIndex === undefined) return;

//       // 1) quitar de origen
//       const fromTasks = state.columns[sourceColId].taskIds;
//       const idx = fromTasks.indexOf(activeId);
//       if (idx === -1) return;
//       fromTasks.splice(idx, 1);

//       // 2) insertar en destino
//       const toTasks = state.columns[destColId].taskIds;
//       const safeIndex = Math.min(Math.max(destIndex, 0), toTasks.length);
//       toTasks.splice(safeIndex, 0, activeId);
//     },
//   },
// });

// export const { initializeBoard, moveCard } = boardSlice.actions;
// export default boardSlice.reducer;
