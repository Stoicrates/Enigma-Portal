import React from "react";
import Bdaycard from "./Bdaycard";

function Birthdays() {
  return (
    <div className="bg-white p-4 shadow-md">
      <h3 className="font-bold">Birthday</h3>
      <div className="flex space-x-4 overflow-auto">
        <Bdaycard />
        <Bdaycard />
        <Bdaycard />
        <Bdaycard />
      </div>
    </div>
  );
}

export default Birthdays;
