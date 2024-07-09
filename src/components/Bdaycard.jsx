import React from "react";

function Bdaycard({ name, date }) {
  return (
    <div className="w-24 shrink-0 flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full shrink-0"></div>
      <p className="text-base font-bold line-clamp-1">{name}</p>
      <p className="text-sm scn">{date}</p>
    </div>
  );
}

export default Bdaycard;
