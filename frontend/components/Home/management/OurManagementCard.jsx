import React from "react";

const OurManagementCard = ({ personImage, personName, personRole }) => {
  const mainYellow = { color: "#F0C70A" };
  return (
    <div className="p-10 flex flex-col justify-center align-center">
      <div className="h-50">
        <img
          className="h-50"
          src={`${personImage}`}
          alt="some image"
        />
      </div>
      <div
        style={mainYellow}
        className="tracking-wide text-center text-2xl text-black font-anton pt-2 pb-2"
      >
        {personName}
      </div>
      <div style={{ color: "#6D7A82" }} className="text-lg text-center text-black ">
        {personRole}
      </div>
    </div>
  );
};

export default OurManagementCard;
