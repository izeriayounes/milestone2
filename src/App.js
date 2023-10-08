import "./App.css";
import Navbar from "./components/Navbar";
import Route from "./components/Route";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("yo please work");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar onClick={openModal} />
      <Route path={"/"}>
        <Home setCartItems={setCartItems} openModal={openModal} />
      </Route>
      <Route path={"/products"}>
        <Products setCartItems={setCartItems} openModal={openModal} />
      </Route>
      <Route path={"/about"}>
        <About />
      </Route>
      <Route path={"/contact"}>
        <Contact />
      </Route>
      {isModalOpen && (
        <Cart
          onClose={closeModal}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
