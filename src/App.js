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
import { useAuthStateContext } from "./context/AuthContext";
import Login from "./pages/Login";

function App() {
  const { customerId, username } = useAuthStateContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const openLogin = () => {
    closeCart();
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Navbar onClick={openCart} username={username} />
      <Route path={"/"}>
        <Home setCartItems={setCartItems} openModal={openCart} />
      </Route>
      <Route path={"/products"}>
        <Products setCartItems={setCartItems} openModal={openCart} />
      </Route>
      <Route path={"/about"}>
        <About />
      </Route>
      <Route path={"/contact"}>
        <Contact />
      </Route>
      {isCartOpen && (
        <Cart
          onClose={closeCart}
          setCartItems={setCartItems}
          cartItems={cartItems}
          openLogin={openLogin}
          customerId={customerId}
        />
      )}
      {isLoginOpen && <Login size="lg" onClose={closeLogin} title="" />}
      <Footer />
    </div>
  );
}

export default App;
