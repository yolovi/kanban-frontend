import { useDispatch, useSelector } from "react-redux";
import { moveCard } from "../kanbanSlice";
import { Button, Card, Space, Typography } from "antd";
const { Title, Text } = Typography;

const KanbanCard = ({ card, column }) => {
  console.log(card);
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.kanban.columns);

  // función para obtener la columna anterior o siguiente
  const getTargetColumn = (columnId, direction) => {
    const idx = columns.findIndex((c) => c.id === columnId);
    if (direction === "left" && idx > 0) return columns[idx - 1].id;
    if (direction === "right" && idx < columns.length - 1)
      return columns[idx + 1].id;
    return null;
  };

  return (
    <Card
      title={
        <Title level={5} style={{ margin: 0 }}>
          {card.title}
        </Title>
      }
      size="small"
    >
      <Text type="secondary">{card.description}</Text>
      <br />
      <Space>
        <Button
          size="small"
          onClick={() => {
            const target = getTargetColumn(column.id, "left");
            if (target)
              dispatch(moveCard({ cardId: card.id, targetColumnId: target }));
          }}
        >
          ←
        </Button>
        <Button
          size="small"
          onClick={() => {
            const target = getTargetColumn(column.id, "right");
            if (target)
              dispatch(moveCard({ cardId: card.id, targetColumnId: target }));
          }}
        >
          →
        </Button>
      </Space>
    </Card>
  );
};

export default KanbanCard;
