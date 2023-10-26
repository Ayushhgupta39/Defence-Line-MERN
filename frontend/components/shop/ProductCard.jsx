import React from "react";
import Image from "next/image";

const ProductCard = ({ saleStatus,image,title,price,handleClick }) => {



  return (
    <div className="grid grid-cols-1 gap-5 text-sm sm:text-base border hover:border-yellow-500 font-anton tracking-wide">
      {saleStatus?<div className="align-start absolute font-roboto text-white p-3 tracking-wide">
        {" "}
        SALE!
      </div>:""}
      <div className="product-image pt-5 bg-white ">
        <Image
          className="mr-auto ml-auto"
          src={`${image}`}
          width={130}
          height={180}
          alt="Product Image"
        />
      </div>
      <h3 className="product-title h-fit w-full font-roboto font-bold text-center break-words">
        <span className="basis-3/5">
          {title}
        </span>
      </h3>
      <h3 className="text-center text-yellow-400">$ {price}</h3>
      <div className="pb-6 flex justify-center">
        <button onClick={handleClick} class="font-roboto w-3/5 p-4 bg-transparent hover:bg-yellow-500 text-black-700 font-semibold hover:text-white border border-yellow-500 hover:border-transparent">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
