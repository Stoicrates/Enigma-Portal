import React from "react";

function Card({ link, title, description }) {
  return (
    <a
      href={link}
      className="flex-1 p-4 bg-white shadow-md flex flex-col justify-center"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="">{description}</p>
    </a>
  );
}

export default Card;
