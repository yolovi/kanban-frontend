import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import ThemeProvider from "./config/theme/ThemeConfig.jsx";
import App from "./app/App.jsx";

// import "./index.css";
// Estilos globales
import "antd/dist/reset.css";
// import "./core/styles/_reset.css";
// import "./styles/variables.css";
// import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
