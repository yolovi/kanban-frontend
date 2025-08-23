import { Col, Row } from "antd";
import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ columns, cards }) => {
  return (
    <Row gutter={[16, 16]} wrap={false} style={{ overflowX: "auto" }}>
      {columns.map((column) => (
        <Col key={column.id} style={{ minWidth: 280 }}>
          <KanbanCard cards={cards} column={column} />
        </Col>
      ))}
    </Row>
  );
};

export default KanbanColumn;
