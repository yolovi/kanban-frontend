import { Card, Typography } from "antd";
import KanbanCard from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core"; // Importar useDroppable

const { Title } = Typography;

const KanbanColumn = ({ column, cards }) => {
  // Configuración de dnd-kit para hacer la columna droppable
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef} // zona droppable
      style={{
        minWidth: 280, // Ancho mínimo para la visualización en móviles
        flexShrink: 0,
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Card
        title={
          <Title level={5} style={{ margin: 0 }}>
            {column.name}
          </Title>
        }
        size="small"
        style={{ height: "100%" }}
      >
        {cards.map((card) => {
          return <KanbanCard key={card.id} card={card} />;
        })}
      </Card>
    </div>
  );
};

export default KanbanColumn;
