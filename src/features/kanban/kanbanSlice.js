import { createSlice } from "@reduxjs/toolkit";
import initialBoard from "./data/mockKanbanData";

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: initialBoard,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      console.log(action);
    },
    moveCard: (state, action) => {
      const { cardId, targetColumnId, newIndex } = action.payload;
      const card = state.cards.find((c) => c.id === cardId);
      if (card) {
        card.columnId = targetColumnId;
        card.orderIndex = newIndex;
      }
    },
    // Añadir más reducers: updateCard, deleteCard, addColumn...
  },
});

export const { addCard, moveCard } = kanbanSlice.actions;
export default kanbanSlice.reducer;
