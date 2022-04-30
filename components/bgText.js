import React from "react";

function BgText({ text }) {
  return (
    <p
      className=" absolute text-[100px] md:text-[150px] lg:text-[180px]
  font-[900] tracking-[-18px] dark:text-gray-700 text-gray-200
    bottom-0 left-0 opacity-40 z-0   "
    >
      {text}
    </p>
  );
}

export default BgText;
