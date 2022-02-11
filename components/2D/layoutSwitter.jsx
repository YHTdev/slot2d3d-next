import React from "react";
import GridIcon from "../Icons/gridIcon";
import ListIcon from "../Icons/ListIcon";

function LayoutSwitter({ selected, setSelected, children }) {
  return (
    <div className="flex space-x-4 w-full justify-start  content-center items-center ">
      <button
        onClick={() => setSelected("grid")}
        className="text-slate-600 hover:text-slate-800"
      >
        <GridIcon className={`${selected==='grid'?'text-yellow-600':'text-slate-400'}`} />
      </button>
      <button
        onClick={() => {
          setSelected("list");
        }}
        className="text-slate-600 hover:text-slate-800"
      >
        <ListIcon className={`${selected==='list'?'text-yellow-600':'text-slate-400'}`} />
      </button>
    </div>
  );
}

export default LayoutSwitter;
