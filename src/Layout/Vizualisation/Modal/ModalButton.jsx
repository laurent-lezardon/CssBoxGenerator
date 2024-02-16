import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

export default function ModalButton() {
  const [showCode, setShowCode] = useState(false);
  const toggleModal = () => {
    setShowCode(!showCode);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="relative z-0 mx-auto py-1 px-4 font-semibold rounded text-xs text-white  bg-gradient-to-b from-lime-800 to-lime-900 border border-lime-600 shadow-inner shadow-lime-300 mb-3"
      >
        Get the code !
      </button>
      {showCode &&
        createPortal(<ModalResult closeModal={toggleModal} />, document.body)}
    </>
  );
}
