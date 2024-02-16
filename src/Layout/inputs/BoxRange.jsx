import { useDispatch } from "react-redux";
import { updateBoxProperties } from "../../features/boxPropoertiesSlice";
import { updateShadow } from "../../features/BoxShadowSlice";

export default function BoxRange({ params, type }) {
  const dispatch = useDispatch();
  // console.log("BoxRange Input", params);
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
    <div className="my-3 ">
      {/* div Nom de la propriété - valeur */}
      <div className="flex justify-between ">
        <p className="font-semibold">{params.name}</p>
        {/* div input pour pouvoir entrer une valeur manuellement + unité de mesure */}
        <div className="flex items-center mb-2">
          <input
            className="w-14 h-6 mr-1 border border-slate-400 text-center rounded"
            type="number"
            value={params.value}
            onChange={handleInput}
          />
          <p>px</p>
        </div>
      </div>
      {/* div input range avec barre au milieu */}
      <div className="w-full relative flex items-center">
        <input
          min={params.minMax[0]}
          max={params.minMax[1]}
          type="range"
          className="w-full h-[2px]  appearance-none rounded-lg cursor-pointer border border-slate-500"
          value={params.value}
          onChange={handleInput}
        />
        <div className=" absolute left-1/2 h-2 z-10 border border-slate-500"></div>
      </div>
    </div>
  );
}
