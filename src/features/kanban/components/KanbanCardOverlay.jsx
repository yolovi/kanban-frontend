import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const KanbanCardOverlay = ({ card }) => {
  if (!card) return null;

  return (
    <Card
      title={
        <Title level={5} style={{ margin: 0 }}>
          {card.title}
        </Title>
      }
      size="small"
      hoverable
      style={{ marginBottom: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" }}
    >
      <Text type="secondary">{card.description}</Text>
    </Card>
  );
};

export default KanbanCardOverlay;