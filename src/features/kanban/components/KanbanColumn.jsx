/*Layout: columnas en display:flex; gap: 16px; overflow-x:auto; para móvil.*/

import { Col, Row } from "antd";

import KanbanCard from "./KanbanCard";

const columns = [
  {
    id: "todo",
    title: "To Do",
    tasks: ["Configurar proyecto", "Crear reset CSS"],
  },
  { id: "doing", title: "In Progress", tasks: ["Maquetar columnas"] },
  { id: "done", title: "Done", tasks: ["Instalar AntD"] },
];

const KanbanColumn = () => {
  return (
    <>
      <Row gutter={[16, 16]} wrap={false} style={{ overflowX: "auto" }}>
        {columns.map((col) => (
          <Col key={col.id} style={{ minWidth: 280 }}>
            <KanbanCard colTitle={col.title} colTasks={col.tasks} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default KanbanColumn;
