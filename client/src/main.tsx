import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import AuthProvider from "./context/AuthProvider.tsx";
ReactDOM.createRoot(document.querySelector("#root")!).render(
  // <AuthProvider>
    <App />,
  // </AuthProvider>
);
