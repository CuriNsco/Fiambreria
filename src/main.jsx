import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import Root from "./routes/root";
import ErrorPage from "./error-page";
import { Fiambres } from './Pages/Fiambres.jsx';
import { Embutidos } from './Pages/Embutidos.jsx';
import { Quesos } from './Pages/Quesos.jsx';
import { Perfil } from './Pages/Perfil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "Inicio",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "Perfil",
    element: <Perfil/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "Fiambres",
    element: <Fiambres/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "Embutidos",
    element: <Embutidos/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "Quesos",
    element: <Quesos/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
