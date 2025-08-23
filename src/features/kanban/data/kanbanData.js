export const kanbanData = {
  columns: {
    todo: { id: "todo", title: "To Do", taskIds: ["t1", "t2"] },
    doing: { id: "doing", title: "In Progress", taskIds: ["t3"] },
    review: { id: "review", title: "Review", taskIds: [] },
    done: { id: "done", title: "Done", taskIds: [] },
  },
  tasks: {
    t1: { id: "t1", title: "Configurar Vite + AntD" },
    t2: { id: "t2", title: "Definir esquema Kanban" },
    t3: { id: "t3", title: "Integrar dnd-kit" },
  },
  columnOrder: ["todo", "doing", "review", "done"],
};
