// import KanbanColumn from "./KanbanColumn";
import { Button, Layout } from "antd";
import KanbanColumn from "./KanbanColumn";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../kanbanSlice";
import { DndContext } from "@dnd-kit/core";
const { Header, Content } = Layout;

//FIXME: Mejorar kanboard para que haga el map de las columnas y no tener que hacerlo en el componente KanbanColum (que pinte una única columna)

const KanbanBoard = () => {
  // const [board, setBoard] = useState(initalBoard);
  const board = useSelector((state) => state.kanban);
  const dispatch = useDispatch();

  // Selecciona el primer board
  const currentBoard = board.boards[0];
  // const currentBoard = board.boards.find((b) => b.id === boardId);

  // Columnas en el orden definido por `columnIds`
  const orderedColumns = currentBoard.columnIds
    .map((colId) => board.columns.find((col) => col.id === colId)) // buscamos la columna
    .filter(Boolean); // eliminamos posibles null/undefined

  console.log(orderedColumns);

  // Cards agrupadas por columna
  // const cardsByColumn = board.cards.reduce((acc, card) => {
  //   if (!acc[card.columnId]) acc[card.columnId] = [];
  //   acc[card.columnId].push(card);
  //   return acc;
  // }, {});

  const handleAddCard = () => {
    dispatch(
      addCard({
        id: Date.now(),
        boardId: currentBoard.id,
        columnId: currentBoard.columnIds[0],
        title: "Card desde Redux",
        description: "Prueba",
        priority: "LOW",
        orderIndex: cardsByColumn[currentBoard.columnIds[0]]?.length || 0,
      })
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>
        {currentBoard.name}
        <Button onClick={handleAddCard} style={{ marginLeft: 16 }}>
          + Añadir card
        </Button>
      </Header>
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
              />
            );
          })}
          {/* <KanbanColumn columns={orderedColumns} cards={cardsByColumn} /> */}
        </div>
      </Content>
    </Layout>
  );
};

export default KanbanBoard;
