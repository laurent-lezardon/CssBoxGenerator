import { useDispatch } from "react-redux";
import { updateBoxProperties } from "../../features/boxPropoertiesSlice";
import { updateShadow } from "../../features/BoxShadowSlice";

export default function BoxColorPicker({ params, type }) {
  const dispatch = useDispatch();
  console.log("BoxRange Input", params);
  const handleInput = (e) => {
    switch (type) {
      case "box":
        dispatch(
          updateBoxProperties({
            inputNumber: params.inputNumber,
            value: e.target.value,
          })
        );
        break;
      case "shadow":
        console.log("shadow params", params);
        dispatch(
          updateShadow({
            id: params.id,
            inputNumber: params.inputNumber,
            value: e.target.value,
          })
        );
    }
  };
  return (
    <div className="py-2">
      <p className="font-semibold">{params.name}</p>
      <div className="flex items-center">
        <input
          className=" w-3/4 h-8 border border-slate-400 rounded mr-2  cursor-pointer "
          type="color"
          value={params.value}
          onChange={handleInput}
        />
        <input
          type="text"
          className="  h-8 max-w-[100px] border border-slate-400 rounded text-center focus:outline-1 outline-blue-300"
          value={params.value}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}
