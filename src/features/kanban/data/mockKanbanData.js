//Ejemplo de mockData.js normalizado

const mockBoardData = {
  boards: [{ id: 1, name: "Default Board", columnIds: [1, 2, 3, 4] }],
  columns: [
    { id: 1, boardId: 1, name: "Backlog", order_index: 0, cardIds: [] },
    { id: 2, boardId: 1, name: "To Do", order_index: 1, cardIds: [1, 2] },
    { id: 3, boardId: 1, name: "In Progress", order_index: 2, cardIds: [3] },
    { id: 4, boardId: 1, name: "Done", order_index: 3, cardIds: [] },
  ],
  cards: [
    {
      id: 1,
      boardId: 1,
      columnId: 2,
      title: "Configurar proyecto",
      description: "Crear app React y API",
      priority: "HIGH",
      due_date: null,
      order_index: 0,
    },
    {
      id: 2,
      boardId: 1,
      columnId: 2,
      title: "Diseñar modelos",
      description: "Tablas y relaciones",
      priority: "MEDIUM",
      due_date: null,
      order_index: 1,
    },
    {
      id: 3,
      boardId: 1,
      columnId: 3,
      title: "Drag & Drop",
      description: "Probar movimientos",
      priority: "HIGH",
      due_date: null,
      order_index: 0,
    },
  ],
};

export default mockBoardData;
