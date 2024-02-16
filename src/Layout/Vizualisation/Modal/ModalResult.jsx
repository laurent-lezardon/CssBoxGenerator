import { useSelector } from "react-redux";
import { getBoxShadow } from "../../../utils/boxShadowsUtils";
import { useEffect } from "react";

export default function ModalResult({ closeModal }) {
  const boxShadowSlice = useSelector((store) => store.boxShadowSlice);
  console.log(boxShadowSlice);
  useEffect(() => {
    // Empecher le scroll lors de l'affichage de la modale
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);
  // Eviter le spam sur le bouton copy
  let runningAnimation = false;
  const handleCopy = (e) => {
    if (!runningAnimation) {
      runningAnimation = true;
      e.target.textContent = "Copied !";
      setTimeout(() => {
        runningAnimation = false;
        e.target.textContent = "Copy";
      }, 1000);
    }
    navigator.clipboard.writeText(
      `box-shadow : ${getBoxShadow(boxShadowSlice)};`
    );
  };
  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center bg-slate-600/75"
      onClick={closeModal}
    >
      <div
        className="max-w-[500px] min-w-[300px] p-4 bg-slate-50 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm">Your CSS Code</p>
          <div>
            <button
              onClick={handleCopy}
              className="mr-2 py-1 px-4 font-semibold rounded text-xs text-white  bg-gradient-to-b from-blue-800 to-blue-600 border border-blue-600 shadow-inner shadow-blue-300"
            >
              Copy
            </button>
            <button
              onClick={closeModal}
              className="py-1 px-4 font-semibold rounded text-xs text-white  bg-gradient-to-b from-orange-800 to-orange-700 border border-orange-600 shadow-inner shadow-orange-300"
            >
              Close
            </button>
          </div>
        </div>
        <p className="my-6 text-center text-sm">
          <span className="font-semibold">box-shadow : </span>
          {getBoxShadow(boxShadowSlice)};
        </p>
      </div>
    </div>
  );
}
