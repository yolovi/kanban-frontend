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
      const { cardId, sourceColumnId, targetColumnId } = action.payload;
      const cardToMove = state.cards.find((card) => card.id === cardId);

      if (cardToMove) {
        cardToMove.columnId = targetColumnId;
      }
    },
    // Añadir más reducers: updateCard, deleteCard, addColumn...
  },
});

export const { addCard, moveCard } = kanbanSlice.actions;
export default kanbanSlice.reducer;
