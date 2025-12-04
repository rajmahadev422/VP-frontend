import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Login from "./Pages/Login";

export const Router = createBrowserRouter(
  [
    {path:'/', element: <App />},
    {path: '/login', element: <Login />}
  ]
);