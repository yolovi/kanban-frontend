//Ejemplo de mockData.js normalizado

const mockBoardData = {
  boards: [{ id: 1, name: "Default Board", columnIds: [1, 2, 3, 4] }],
  columns: [
    { id: 1, boardId: 1, name: "Backlog", orderIndex: 0, cardIds: [] },
    { id: 2, boardId: 1, name: "To Do", orderIndex: 1, cardIds: [1, 2] },
    { id: 3, boardId: 1, name: "In Progress", orderIndex: 2, cardIds: [3] },
    { id: 4, boardId: 1, name: "Done", orderIndex: 3, cardIds: [] },
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
      orderIndex: 0,
    },
    {
      id: 2,
      boardId: 1,
      columnId: 2,
      title: "Diseñar modelos",
      description: "Tablas y relaciones",
      priority: "MEDIUM",
      due_date: null,
      orderIndex: 1,
    },
    {
      id: 3,
      boardId: 1,
      columnId: 3,
      title: "Drag & Drop",
      description: "Probar movimientos",
      priority: "HIGH",
      due_date: null,
      orderIndex: 0,
    },
  ],
};

export default mockBoardData;
