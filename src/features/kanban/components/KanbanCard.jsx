import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import KanbanCardOverlay from "./KanbanCardOverlay"; // Importar el nuevo componente

const KanbanCard = ({ card, isDragging }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: {
      columnId: card.columnId,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    visibility: isDragging ? "hidden" : "visible", 
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <KanbanCardOverlay card={card} />
    </div>
  );
};

export default KanbanCard;
