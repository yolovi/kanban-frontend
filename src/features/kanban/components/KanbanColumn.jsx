import { Card, Typography } from "antd";
import KanbanCard from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core"; // Importar useDroppable

const { Title, Text } = Typography;

const KanbanColumn = ({ column, cards }) => {
  console.log(column.name);

  // Configuración de dnd-kit para hacer la columna droppable
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div ref={setNodeRef} style={{ minWidth: 280, flexShrink: 0 }}>
      <Card
        title={
          <Title level={5} style={{ margin: 0 }}>
            {column.name}
          </Title>
        }
        style={{ height: '100%'}}
      >
        {cards.map(card => {
          return <KanbanCard key={card.id} card={card} />;
        })}
      </Card>
    </div>
  );
};

export default KanbanColumn;
