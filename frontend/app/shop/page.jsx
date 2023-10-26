"use client";
import React, { useState } from "react";
import ImageHeader from "@components/ImageHeader";
import HProductCard from "@components/shop/HProductCard";
import ProductCard from "@components/shop/ProductCard";
import ProductsList from "./ProductsList";
import CategoriesAside from "@components/shop/CategoriesAside";
import CategoriesSlider from "@components/shop/CategoriesSlider";
import Pagination from "@components/shop/Pagination";

const page = () => {
  const productTags = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum Random Text",
    "Lorem Ipsum",
  ];

  return (
    <div className="bg-white max-h-fit text-black">
      <ImageHeader headerTitle={"SHOP"} />
      <div className="shop-main-wrapper h-fit sm:h-4/5 sm:p-0 sm:pl-10 sm:pr-10">
        <div className="grid grid-cols-2 h-fit sm:grid-cols-4 ">
          <CategoriesSlider/>
          <ProductsList />
          <aside className="hidden sm:block col-span-1 p-3">
            <CategoriesAside />
            
            <div className="filter-by-price mb-16 grid grid-cols-2">
              <h3 className="mb-4 gap-x-8 col-span-2 text-xl font-anton tracking-wide text-left mt-16">
                Filter By Price
              </h3>
              <button class="w-3/5 bg-transparent col-span-1 hover:bg-yellow-500 text-black-700 font-semibold hover:text-white border border-yellow-500 hover:border-transparent">
                Filter
              </button>
              <div class="relative mb-3 col-span-1" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                />
                <label
                  for="exampleFormControlInput1"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] text-black peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Enter Price
                </label>
              </div>
            </div>
            <div className="product-tags">
              <h3 className="mb-4 gap-x-8 col-span-2 text-2xl font-anton tracking-wide text-left mt-16">
                PRODUCT TAGS
              </h3>
              <div className="product-tags-list flex flex-wrap">
                {productTags.map((element, index) => {
                  return (
                    <button key={index} className="m-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                      {element}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
      
    </div>
  );
};

export default page;
