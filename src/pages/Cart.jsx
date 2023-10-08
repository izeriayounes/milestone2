import Modal from "../components/Modal";

export default function Cart({ onClose, setCartItems, cartItems }) {
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  // Calculate the subtotal and total items in the cart
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Modal size="lg" onClose={onClose} title="Your Cart">
      <div className="margin-bottom-10">
        {cartItems.map((item, index) => (
          <div className="row mb-3" key={index}>
            <div className="col-4">
              <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-8 text-left">
              <h5 className="d-flex justify-content-between">
                {item.name}
                <span
                  className="cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                >
                  <i className="bi bi-trash"></i>
                </span>
              </h5>
              <p>{item.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="font-weight-bold">${item.price}</span>
                <div className="input-group w-50">
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    defaultValue="1"
                    value={item.quantity}
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
          <button className="btn btn-secondary btn-lg mb-3 w-100">
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  );
}
