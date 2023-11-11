import { useEffect, useState } from "react";
import { get, post, put, remove } from "../api/apiService";
import Modal from "../components/Modal";
import { useAuthStateContext } from "../context/AuthContext";
import defaultImage from "../assets/noImage.png";

export default function Cart({ onClose, openLogin, customerId }) {
  const [cartItems, setCartItems] = useState([]);
  const { isAuth } = useAuthStateContext();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (customerId) {
          const data = await get(`Customers/${customerId}/cart-items`);
          setCartItems(data);
        }
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    fetchCartItems();
  }, [customerId]);

  const subtotal = cartItems.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, { quantity }) => total + quantity,
    0
  );

  const handleQuantityChange = async (index, newQuantity) => {
    const updatedcartItems = [...cartItems];
    updatedcartItems[index].quantity = newQuantity;
    setCartItems(updatedcartItems);

    const { id } = cartItems[index];
    const updatedCartItem = { id, quantity: newQuantity };
    try {
      console.log(updatedCartItem);
      await put(`cartItems/${id}`, updatedCartItem);
    } catch (error) {
      console.error(`Error updating cart item with ID ${id}:`, error);
    }
  };

  const handleRemoveItem = async (index, itemId) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);

    try {
      await remove(`cartItems/${itemId}`);
    } catch (error) {
      console.error(`Error deleting cart item with ID ${itemId}:`, error);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await post("orders/Checkout");
      if (response.status === 200) {
        setCartItems([]);
        console.log("Order created successfully.");
      } else {
        console.error("Failed to create order.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (cartItems.length === 0 && isAuth) {
    return (
      <Modal size="lg" onClose={onClose} title="">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <i
              className="bi bi-cart-x-fill"
              style={{ fontSize: "5rem", marginBottom: "1rem" }}
            ></i>
            <p className="font-weight-norma">
              Your cart is empty! Start shopping now.
            </p>
          </div>
        </div>
      </Modal>
    );
  }

  if (!isAuth) {
    return (
      <Modal size="lg" onClose={onClose} title="" cartModal={true}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <i
            className="bi bi-cart-x-fill"
            style={{ fontSize: "5rem", marginBottom: "1rem" }}
          ></i>
          <p>You are not authenticated. Please login!</p>
          <button className="btn btn-primary" onClick={openLogin}>
            Login
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal size="lg" onClose={onClose} title="Your Cart" cartModal={true}>
      <div className="margin-bottom-10">
        {/* cart items section */}
        {cartItems.map(({ id, product, quantity }, index) => (
          <div className="row mb-3" key={index}>
            <div className="col-4">
              {product.image ? (
                <img
                  src={`data:image/*;base64,${product.image}`}
                  alt={product.name}
                  className="img-fluid"
                />
              ) : (
                <img
                  src={defaultImage}
                  alt={product.name}
                  className="img-fluid"
                />
              )}
            </div>
            <div className="col-8 text-left">
              <h5 className="d-flex justify-content-between">
                {product.name}
                <span
                  className="cursor-pointer"
                  onClick={() => handleRemoveItem(index, id)}
                >
                  <i className="bi bi-trash"></i>
                </span>
              </h5>
              <p>{product.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="font-weight-bold">${product.price}</span>
                <div className="input-group w-50">
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Subtotal section */}
        <div className="fixed-bottom bg-light text-center p-3">
          <p className="font-weight-bold mb-3 d-flex justify-content-between">
            <span>Subtotal ({totalItems} Items)</span>
            <span>${Number(subtotal.toFixed(2))}</span>
          </p>
          <button
            className="btn btn-secondary btn-lg mb-3 w-100"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  );
}
