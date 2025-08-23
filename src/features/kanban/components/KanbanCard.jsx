import { Card, Typography } from "antd";
const { Title, Text } = Typography;

const KanbanCard = ({ cardsByColumn, column }) => {
  return (
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
  );
};

export default KanbanCard;
