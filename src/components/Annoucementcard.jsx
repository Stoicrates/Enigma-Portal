import React from "react";

function Annoucementcard({ link }) {
  return (
    <div className="bg-gray-300 p-4 verflow-auto">
      <a href={link}>
        <h3>Annoucement Title</h3>
        <p>15 Maret 2023</p>
        <p>12 PM</p>
      </a>
    </div>
  );
}

export default Annoucementcard;
