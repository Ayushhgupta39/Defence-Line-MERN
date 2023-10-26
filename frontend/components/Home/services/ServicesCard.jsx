import React from "react";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="text-black font-normal sm:p-10 grid grid-cols-1 gap-2 text-center">
      <div className="service-title tracking-wide font-anton text-3xl">
        {title}
      </div>
      <div className="service-description font-roboto text-base">
        {description}
      </div>
    </div>
  );
};

export default ServicesCard;
