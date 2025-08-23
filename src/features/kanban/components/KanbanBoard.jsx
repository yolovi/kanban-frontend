import React from "react";
import KanbanCard from "./KanbanCard";
import KanbanColumn from "./KanbanColumn";

import { Layout } from "antd";
const { Header, Content } = Layout;

const KanbanBoard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>
        Kanban (estático): Aquí nombre del tablero
      </Header>
      <Content style={{ padding: 16 }}>
        <KanbanColumn />
      </Content>
    </Layout>
  );
};

export default KanbanBoard;
