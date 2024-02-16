import BoxParameters from "./BoxParameters";
import ShadowsParameters from "./ShadowsParameters";
import { useState } from "react";

export default function ParametersBox() {
  const [tabs, setTabs] = useState(0);
  const tabsList = [
    { name: "shadow", component: <ShadowsParameters /> },
    { name: "Box", component: <BoxParameters /> },
  ];
  const activeNail =
    " bg-indigo-200 text-slate-700  border-t border-x border-b-0 border-slate-500 ";
  const notActiveNail = "bg-indigo-700 text-white border border-slate-500";
  return (
    <div className="relative mt-9 sm:mt-20 w-full max-w-[600px] border  md:mt-0  bg-indigo-200 text-sm">
      {/* div des onglets */}
      <div className="flex absolute -translate-y-full -left-[2px] -top-[1px]  ">
        {tabsList.map((tab, index) => {
          return (
            <button
              key={index}
              className={`min-w-[125px] py-2 px-3 mr-4 font-bold  ${
                (tab.name === "shadow" && tabs === 0) ||
                (tab.name === "Box" && tabs === 1)
                  ? activeNail
                  : notActiveNail
              }   rounded-t  `}
              onClick={() => setTabs(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      {/* div des parametres */}
      <div className="w-full   ">{tabsList[tabs].component}</div>
    </div>
  );
}
