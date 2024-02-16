import { useDispatch } from "react-redux";
import { updateCheckbox } from "../../features/BoxShadowSlice";

export default function CheckBox({ name, params }) {
  const checkedValue = params[name];
  console.log(checkedValue);
  const dispatch = useDispatch();
  return (
    <label>
      <span className="font-semibold ">{name}</span>
      <input
        onChange={() => dispatch(updateCheckbox({ name: name, id: params.id }))}
        type="checkbox"
        checked={checkedValue}
        className="mr-6 ml-2"
      />
    </label>
  );
}
