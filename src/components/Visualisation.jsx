import { useSelector } from "react-redux";
import ModalButton from "../Layout/Vizualisation/Modal/ModalButton";
import { getBoxShadow } from "../utils/boxShadowsUtils";

export default function Visualisation() {
  const boxShadowSlice = useSelector((store) => store.boxShadowSlice);
  const boxPropertiesSlice = useSelector((store) => store.boxPropertiesSlice);
  console.log(boxPropertiesSlice);
  return (
    <div className="fixed z-10 bottom-0 flex flex-col bg-transparent   ">
      <div
        className="flex justify-center font-bold items-center my-4  border text-xs border-slate-500 "
        style={{
          boxShadow: `${getBoxShadow(boxShadowSlice)}`,
          borderRadius: boxPropertiesSlice[0].value + "px",
          height: boxPropertiesSlice[1].value + "px",
          width: boxPropertiesSlice[2].value + "px",
          backgroundColor: boxPropertiesSlice[3].value,
        }}
      >
        <div>Result</div>
      </div>
      <ModalButton />
    </div>
  );
}
