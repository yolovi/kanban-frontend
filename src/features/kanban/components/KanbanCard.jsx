import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button, Card, Space, Typography } from "antd";
const { Title, Text } = Typography;

const KanbanCard = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: {
      columnId: card.columnId,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card
        title={
          <Title level={5} style={{ margin: 0 }}>
            {card.title}
          </Title>
        }
        size="small"
        hoverable
        style={{ marginBottom: "8px" }}
      >
        <Text type="secondary">{card.description}</Text>
      </Card>
    </div>
  );
};

export default KanbanCard;
