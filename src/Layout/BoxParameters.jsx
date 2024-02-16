// Configuration des parametres de la "box" affichée

import { useSelector, useDispatch } from "react-redux";
import BoxRange from "./inputs/BoxRange";
import BoxColorPicker from "./inputs/BoxColorPicker";

export default function BoxParameters() {
  const boxPropertiesSlice = useSelector((store) => store.boxPropertiesSlice);
  console.log(boxPropertiesSlice);
  const dispatch = useDispatch();
  const boxInputs = boxPropertiesSlice.map((input, index) => {
    if (input.type === "range") {
      return <BoxRange params={input} key={index} type="box" />;
    } else if (input.type === "color") {
      return <BoxColorPicker params={input} key={index} type="box" />;
    }
  });
  return (
    <div className="bg-lemon-300 px-4 py-4 ">
      <p className="font-bold text-sm my-2">Box properties</p>
      {boxInputs}
    </div>
  );
}
