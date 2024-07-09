import React from "react";

function Annoucementcard({ link }) {
  return (
    <div className="bg-gray-300 p-4 overflow-auto rounded-xl">
      <a href={link}>
        <h4 className="">Annoucement Title</h4>
        <p className="scn">15 Maret 2023</p>
        <p className="scn">12 PM</p>
      </a>
    </div>
  );
}

export default Annoucementcard;
