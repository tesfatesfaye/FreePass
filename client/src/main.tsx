import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/Global.css";
// import AuthProvider from "./context/AuthProvider.tsx";
ReactDOM.createRoot(document.querySelector("#root")!).render(
  // <AuthProvider>
    <App />,
  // </AuthProvider>
);
