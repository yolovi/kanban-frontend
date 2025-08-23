import { Col, Row } from "antd";
import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ orderedColumns, cardsByColumn }) => {
  return (
    <Row gutter={[16, 16]} wrap={false} style={{ overflowX: "auto" }}>
      {orderedColumns.map((column) => (
        <Col key={column.id} style={{ minWidth: 280 }}>
          <KanbanCard cardsByColumn={cardsByColumn} column={column} />
        </Col>
      ))}
    </Row>
  );
};

export default KanbanColumn;
