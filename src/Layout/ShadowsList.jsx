import { useSelector, useDispatch } from "react-redux";
import { addShadow, changeShadow } from "../features/BoxShadowSlice";

export default function ShadowsList() {
  const boxShadowSlice = useSelector((store) => store.boxShadowSlice);
  //   console.log(boxShadowSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between border-b border-slate-300 text-sm pb-2">
        <p className="font-bold">Customize Shadows</p>
        <button
          onClick={() => dispatch(addShadow())}
          className="py-1 px-4 font-semibold rounded text-xs text-white  bg-gradient-to-b from-blue-800 to-blue-600 border border-blue-600 shadow-inner shadow-blue-300"
        >
          Add Shadow
        </button>
      </div>
      <ul className="flex gap-2 py-2 border-b border-slate-300 ">
        {boxShadowSlice.map((shadow, index) => (
          <li
            className={`shrink-0 font-semibold py-2 px-4 ${
              shadow.activeView ? "bg-slate-50" : "bg-indigo-600 text-white"
            } rounded border border-slate-500 cursor-pointer text-xs`}
            onClick={() => dispatch(changeShadow(shadow.id))}
            key={shadow.id}
          >
            Shadow {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
