import React from "react";
import ReactDOM from "react-dom";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <ClipLoader color="#ffffff" size={30} />
    </div>,
    document.body
  );
};

export default Loading;
