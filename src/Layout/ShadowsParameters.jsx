import { useSelector, useDispatch } from "react-redux";
import ShadowsList from "./ShadowsList";
import BoxRange from "./inputs/BoxRange";
import BoxColorPicker from "./inputs/BoxColorPicker";
import CheckBox from "./inputs/CheckBox";
import { removeShadow } from "../features/BoxShadowSlice";

export default function ShadowsParameters() {
  const boxShadowSlice = useSelector((store) => store.boxShadowSlice);
  const activeShadow = boxShadowSlice.find((shadow) => shadow.activeView);
  console.log(activeShadow);
  const dispatch = useDispatch();
  const boxInputs = activeShadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <BoxRange
          params={{ ...input, id: activeShadow.id }}
          key={index}
          type="shadow"
        />
      );
    } else if (input.type === "color") {
      return (
        <BoxColorPicker
          params={{ ...input, id: activeShadow.id }}
          key={index}
          type="shadow"
        />
      );
    }
  });
  return (
    <div className="p-4">
      <ShadowsList />
      <div className="flex justify-between items-baseline py-2">
        <div>
          <CheckBox name="active" params={activeShadow} />
          <CheckBox name="inset" params={activeShadow} />
        </div>
        <button
          onClick={() => dispatch(removeShadow(activeShadow.id))}
          className="py-1 px-4 font-semibold rounded text-xs text-white  bg-gradient-to-b from-orange-800 to-orange-700 border border-orange-600 shadow-inner shadow-orange-300"
        >
          Remove Shadow
        </button>
      </div>
      {boxInputs}
    </div>
  );
}
