// core/components/layout/LayoutWrapper.jsx
import { useState } from "react";
import { Layout } from "antd";
import SideBar from "./SideBar";

const { Header, Content, Footer } = Layout;

export default function LayoutWrapper({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, minHeight: 360, background: "#fff", borderRadius: 8 }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
