import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import App from "./App";
import Register from "./pages/Register";

export const Router = createBrowserRouter(
  [
    {path:'/', element: <App />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />}
  ]
);