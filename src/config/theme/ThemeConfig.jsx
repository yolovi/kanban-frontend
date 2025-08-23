import { ConfigProvider } from "antd";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      {/* pasamos el toggle al árbol */}
      {children}
    </ConfigProvider>
  );
}
