// import KanbanColumn from "./KanbanColumn";
import { useState } from "react";
import initalBoard from "../data/mockKanbanData";
import { Layout } from "antd";
import KanbanColumn from "./KanbanColumn";
const { Header, Content } = Layout;

const KanbanBoard = () => {
  //TODO: cuando implemente Redux, cambias useState por useSelector.
  const [board, setBoard] = useState(initalBoard);

  // Selecciona el primer board
  const currentBoard = board.boards[0];
  console.log(currentBoard);

  // Columnas en el orden definido por `columnIds`
  const orderedColumns = currentBoard.columnIds
    .map((colId) => board.columns.find((c) => c.id === colId)) // buscamos la columna
    .filter(Boolean); // eliminamos posibles null/undefined

  // Cards agrupadas por columna
  const cardsByColumn = board.cards.reduce((acc, card) => {
    if (!acc[card.columnId]) acc[card.columnId] = [];
    acc[card.columnId].push(card);
    return acc;
  }, {});

  //---- addDummyCard: función temporal para comprobar useState
  const addDummyCard = () => {
    const newCard = {
      id: Date.now(), // ID único temporal
      boardId: currentBoard.id,
      columnId: currentBoard.columnIds[0], // ejemplo: primera columna
      title: "Nueva tarea",
      description: "Descripción de prueba",
      priority: "LOW",
      orderIndex: cardsByColumn[currentBoard.columnIds[0]]?.length || 0,
    };

    setBoard((prev) => ({
      ...prev,
      cards: [...prev.cards, newCard],
    }));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>
        {currentBoard.name}
        <button onClick={addDummyCard} style={{ marginLeft: 16 }}>
          + Añadir card
        </button>
      </Header>
      <Content style={{ padding: 16 }}>
        <KanbanColumn
          orderedColumns={orderedColumns}
          cardsByColumn={cardsByColumn}
        />
      </Content>
    </Layout>
  );
};

export default KanbanBoard;
