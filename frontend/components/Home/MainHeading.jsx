import React from "react";

export default function MainHeading({ textYellow, textBlack, textWhite,applyTypwriterAnimation }) {
  const mainYellow = { color: "#F0C70A" };


  return (
    <div
      id="main-heading-home"
      className="shadow-3xl sm:shadow-4xl font-anton pb-0 sm:pb-10 box-content font-normal text-4xl sm:text-6xl tracking-wide flex justify-center"
    >
      <span style={mainYellow} className="our pr-7">
        {textYellow}
      </span>
      <span className="text-white">{textWhite}</span>
      <span className={`text-black ${applyTypwriterAnimation?"typewriter":""} break-words w-fit`} >{textBlack}</span>
    </div>
  );
}
