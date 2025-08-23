import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import { Button } from "antd";
import KanbanBoard from "../features/kanban/components/KanbanBoard";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div style={{ padding: 24 }}>
        <Button type="primary" onClick={() => dispatch(toggleTheme())}>
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </Button>
      </div>
      <h3>Kanban Frontend</h3>
      <KanbanBoard />
    </>
  );
}

export default App;
