// import KanbanColumn from "./KanbanColumn";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  DndContext,
  useSensors,
  useSensor,
  PointerSensor,
  DragOverlay,
} from "@dnd-kit/core";
import { Button, Layout } from "antd";
import KanbanColumn from "./KanbanColumn";
import { addCard, moveCard } from "../kanbanSlice";
import KanbanCardOverlay from "./KanbanCardOverlay";
const { Header, Content } = Layout;

// FIXME: Limpiar código.

const KanbanBoard = () => {
  // const [board, setBoard] = useState(initalBoard);
  const dispatch = useDispatch();
  const board = useSelector((state) => state.kanban);

  // Selecciona el primer board
  const currentBoard = board.boards[0];
  // const currentBoard = board.boards.find((b) => b.id === boardId);

  // Columnas en el orden definido por `columnIds`
  const orderedColumns = currentBoard.columnIds
    .map((colId) => board.columns.find((col) => col.id === colId)) // buscamos la columna
    .filter(Boolean); // eliminamos posibles null/undefined

  console.log(orderedColumns);

  // Configura los sensores para que funcionen con el mouse y el tacto en móviles.
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Sensibilidad al arrastrar para evitar conflictos con el scroll
      },
    })
  );

  const [activeCardId, setActiveCardId] = useState(null);

  const handleDragStart = (event) => {
    setActiveCardId(event.active.id);
  };

  // Lógica de movimiento de tarjetas
  const handleDragEnd = (event) => {
    setActiveCardId(null);
    const { active, over } = event;

    console.log(event);
    console.log(over);

    if (!over) {
      return; // No se soltó en un droppable
    }

    const cardId = active.id;
    const sourceColumnId = active.data.current.columnId;

    let targetColumnId = null;
    if (over.data.current) {
      // Si intentas soltar sobre otra card devuelve a la columna de origen
      targetColumnId = over.data.current.columnId;
    } else {
      // Soltar en otra columna (over.id es el ID del contenedor droppable --> columna)
      targetColumnId = over.id;
    }

    if (sourceColumnId !== targetColumnId) {
      // Optimistic UI Update (Actualización del estado local)
      dispatch(moveCard({ cardId, sourceColumnId, targetColumnId }));

      // A. Reordenar en la misma columna
      if (sourceColumnId === targetColumnId) {
        // Logic for reordering cards within a single column
        // This will be handled by the @dnd-kit/sortable library.
        // For a basic setup, you might not even need to write this logic here
        // if you're only focused on moving between columns.
        console.log("Reordering within the same column");
        return;
      }

      // B. Mover a otra columna
      if (sourceColumnId !== targetColumnId) {
        // This is where you would dispatch your Redux action
        console.log(
          `Moving card ${cardId} from column ${sourceColumnId} to ${targetColumnId}`
        );
        // dispatch(moveCard({ cardId: cardId, sourceColumnId, targetColumnId }));
        // Your API call would follow the dispatch.
        // Llamada a la API con Axios
        // axios.patch(`/api/cards/${cardId}`, { newColumnId: targetColumnId })
        //   .catch(error => {
        //     console.error('API call failed, reverting changes');
        //     // Opcional: Revertir la acción de Redux si la llamada falla
        //     dispatch(revertMove());
        //   });
      }
    }
  };

  const handleAddCard = () => {
    dispatch(
      addCard({
        id: Date.now(),
        boardId: currentBoard.id,
        columnId: currentBoard.columnIds[0],
        title: "Card desde Redux",
        description: "Prueba",
        priority: "LOW",
      })
    );
  };

  const activeCard = board.cards.find((card) => card.id === activeCardId);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>
        {currentBoard.name}
        <Button onClick={handleAddCard} style={{ marginLeft: 16 }}>
          + Añadir card
        </Button>
      </Header>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <Content style={{ padding: 16 }}>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: 16,
              height: "100%",
            }}
          >
            {" "}
            {orderedColumns.map((col) => {
              return (
                <KanbanColumn
                  key={col.id}
                  column={col}
                  cards={board.cards.filter((card) => card.columnId === col.id)}
                  activeCardId={activeCardId}
                />
              );
            })}
          </div>
        </Content>
        {/* Renderiza el overlay con el contenido de la tarjeta activa */}
        <DragOverlay>
          <KanbanCardOverlay card={activeCard} />
        </DragOverlay>
      </DndContext>
    </Layout>
  );
};

export default KanbanBoard;
