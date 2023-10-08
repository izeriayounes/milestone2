import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ onClose, size, title, children }) {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleBackdropClick = (e) => {
    console.log("yoooooo hahahaha");
    if (e.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div>
      <div
        className="modal-backdrop fade show"
        onClick={handleBackdropClick}
      ></div>
      <div
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div
          className={`modal-dialog right-full-height-modal modal-${size}`}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title font-weight-bold">{title}</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true" style={{ fontSize: "30px" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
