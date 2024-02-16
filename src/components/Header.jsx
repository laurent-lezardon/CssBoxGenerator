import React from "react";

export default function Header() {
  return (
    <header className="flex p-4 items-baseline justify-between border-b-2  border-slate-400 bg-slate-800 text-slate-100">
      <h1 className="text-xl font-bold ml-2">CSS Shadows Generator</h1>
      <span className="text-[orangered] font-semibold text-sm">
        By lezardon
      </span>
    </header>
  );
}
