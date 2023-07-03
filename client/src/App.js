import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import ColorPicker from "./components/ColorPicker";
import DarkTheme from "./components/DarkTheme";
import './styles/App.scss';
import './styles/style.scss';

const Layout = () => {

  return (
    <>
      <Navbar />
      <br />
      {<DarkTheme></DarkTheme>}
      <br />
      <ColorPicker></ColorPicker>
      <br />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
