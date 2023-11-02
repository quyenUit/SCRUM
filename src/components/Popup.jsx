import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Popup = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="popup">
      <div className="popup-content">
        <p>Hoàn thành đăng ký!</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Popup;
