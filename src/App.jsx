import { useState } from "react";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeNavbar = () => {
    setClick(false);
  };

  const pages = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          handleClick={handleClick}
          closeNavbar={closeNavbar}
          click={click}
        />
      ),
    },
    {
      path: "/about",
      element: (
        <About
          handleClick={handleClick}
          closeNavbar={closeNavbar}
          click={click}
        />
      ),
    },
    {
      path: "/services",
      element: (
        <Services
          handleClick={handleClick}
          closeNavbar={closeNavbar}
          click={click}
        />
      ),
    },
    {
      path: "/contact",
      element: (
        <Contact
          handleClick={handleClick}
          closeNavbar={closeNavbar}
          click={click}
        />
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={pages} />
    </div>
  );
}

export default App;
