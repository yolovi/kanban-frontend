/*Modelo de datos (SQL)
//TODO:
- **boards**: `id`, `name`, `created_at`
- **columns**: `id`, `board_id (FK)`, `name`, `order_index`, `created_at`
- **cards**: `id`, `board_id (FK)`, `column_id (FK)`, `title`, `description`, `priority (LOW|MEDIUM|HIGH)`, `due_date`, `order_index`, `created_at`, `updated_at`

> Notas:
> 
> - Usa `order_index INTEGER` para el orden dentro de cada columna.
> - Añade índice compuesto (`column_id`, `order_index`) para rendimiento.*/

import { Card, Space, Typography } from "antd";
const { Title, Text } = Typography;

const KanbanCard = ({ colTitle, colTasks }) => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title={
          <Title level={5} style={{ margin: 0 }}>
            {colTitle}
          </Title>
        }
        size="small"
      >
        {colTasks.map((t, i) => (
          <Card key={i} size="small" style={{ marginBottom: 8 }}>
            <Text>{t}</Text>
          </Card>
        ))}
      </Card>
    </Space>
  );
};

export default KanbanCard;
