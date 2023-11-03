import { useEffect, useState } from "react";
import { get, post, put, remove } from "../api/apiService";
import Modal from "../components/Modal";

export default function Cart({ onClose, setCartItems, cartItems }) {
  const [cartItemsFromDb, setCartItemsFromDb] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await get("cartItems");
        setCartItemsFromDb(data);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    fetchCartItems();
  }, []);

  useEffect(() => {
    console.log(cartItemsFromDb);
  }, [cartItemsFromDb]);

  const subtotal = cartItemsFromDb.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );
  const totalItems = cartItemsFromDb.reduce(
    (total, { quantity }) => total + quantity,
    0
  );

  const handleQuantityChange = async (index, newQuantity) => {
    const updatedCartItemsFromDb = [...cartItemsFromDb];
    updatedCartItemsFromDb[index].quantity = newQuantity;
    setCartItemsFromDb(updatedCartItemsFromDb);

    const { id, product } = cartItemsFromDb[index];
    const updatedCartItem = { id, product, quantity: newQuantity };
    try {
      await put(`cartItems/${id}`, updatedCartItem);
    } catch (error) {
      console.error(`Error updating cart item with ID ${id}:`, error);
    }
  };

  const handleRemoveItem = async (index, itemId) => {
    const updatedCartItems = [...cartItemsFromDb];
    updatedCartItems.splice(index, 1);
    setCartItemsFromDb(updatedCartItems);

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
        setCartItemsFromDb([]);
        console.log("Order created successfully.");
      } else {
        console.error("Failed to create order.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (cartItemsFromDb.length === 0) {
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

  return (
    <Modal size="lg" onClose={onClose} title="Your Cart">
      <div className="margin-bottom-10">
        {cartItemsFromDb.map(({ id, product, quantity }, index) => (
          <div className="row mb-3" key={index}>
            <div className="col-4">
              <img
                src={`data:image/*;base64,${product.image}`}
                alt={product.name}
                className="img-fluid"
              />
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

        {/* Subtotal Div */}
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
