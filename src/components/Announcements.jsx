import React from "react";
import Annoucementcard from "./Annoucementcard";

const Announcements = () => {
  return (
    <div className="bg-white px-4 pb-4 shadow-md overflow-y-auto max-md:h-[400px]">
      <h3 className="font-bold sticky py-4 top-0 bg-white">Announcements</h3>
      <div className="space-y-4">
        <Annoucementcard link="https://www.duckduckgo.com" />
        <Annoucementcard link="https://www.duckduckgo.com" />
        <Annoucementcard link="https://www.duckduckgo.com" />
        <Annoucementcard link="https://www.duckduckgo.com" />
        <Annoucementcard link="https://www.duckduckgo.com" />
        <Annoucementcard link="https://www.duckduckgo.com" />
      </div>
    </div>
  );
};

export default Announcements;
