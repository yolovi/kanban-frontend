// import KanbanColumn from "./KanbanColumn";
import { useState } from "react";
import initalBoard from "../data/mockKanbanData";
import { Card, Col, Layout, Row, Typography } from "antd";
const { Title, Text } = Typography;
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

    console.log(orderedColumns)

  // Cards agrupadas por columna
  const cardsByColumn = board.cards.reduce((acc, card) => {
    if (!acc[card.columnId]) acc[card.columnId] = [];
    acc[card.columnId].push(card);
    return acc;
  }, {});

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>{currentBoard.name}</Header>
      <Content style={{ padding: 16 }}>
        <Row gutter={[16, 16]} wrap={false} style={{ overflowX: "auto" }}>
          {orderedColumns.map((column) => (
            <Col key={column.id} style={{ minWidth: 280 }}>
              <Card
                title={
                  <Title level={5} style={{ margin: 0 }}>
                    {column.name}
                  </Title>
                }
                size="small"
              >
                {(cardsByColumn[column.id] || []).map((card) => (
                  <Card key={card.id} size="small" style={{ marginBottom: 8 }}>
                    <Text strong>{card.title}</Text>
                    <br />
                    <Text type="secondary">{card.description}</Text>
                  </Card>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default KanbanBoard;
