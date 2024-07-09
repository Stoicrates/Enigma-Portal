import React from "react";
import Bdaycard from "./Bdaycard";

function Birthdays() {
  return (
    <div className="bg-white p-4 shadow-md rounded-md flex-1">
      <h3 className="mb-4">Birthday</h3>
      <div className="flex gap-4 overflow-auto">
        <Bdaycard name="Budi" date="12 Mar" />
        <Bdaycard name="Budi" date="12 Mar" />
      </div>
    </div>
  );
}

export default Birthdays;
