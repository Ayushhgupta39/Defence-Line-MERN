"use client"

// Core Modules
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// External Dependencies
import { GrClose } from "react-icons/gr";

// User-Build Modules
import useCartStore from "@app/Store/CartStore";
import MainHeading from "@components/Home/MainHeading";


const page = () => {

  const cart = useCartStore((state) => state.cart);
  const calculateTotal=useCartStore((state)=>state.calculateTotal)
  const totalAmount=useCartStore((state)=>state.total)
  const removeFromCart=useCartStore((state)=>state.removeFromCart)

  const [displayCart,setDisplayCart]=useState([])
  const [total,setTotal]=useState(0)

 useEffect(()=>{
  calculateTotal()
  setDisplayCart(cart)
  setTotal(totalAmount)
 },[cart,totalAmount,calculateTotal])

 const handleRemoveItem=(attributes,id)=>{
  if(confirm("Do you Really Want To Remove This Item?")) removeFromCart(attributes,id)
}

 if(total==0) return(
  <div className="h-screen bg-white flex items-center justify-center">
    <MainHeading applyTypwriterAnimation={true} textBlack={"Ooops! Shopping Cart is Empty."}/>
  </div>
 )

  return (
    <div>
      <div className="events_header h-48 flex font-roboto text-yellow-400 text-5xl font-bold items-center">
        <p className="px-10 translate-x-10">CART</p>
      </div>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <div className="relative overflow-x">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg text-center">
                  Product
                </th>
                <th scope="col" className=" px-2 sm:px-6 py-3">
                  Qunantity
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Price
                </th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {displayCart.map((attributes, index) => (
                <tr key={index} className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div className="sm:flex sm:items-center sm:justify-around">
                      <div onClick={()=>handleRemoveItem(attributes,attributes.id)}><GrClose className="cursor-pointer" /></div>
                      <div className="cart-product-image h-16 w-16 sm:h-32 flex justify-center items-center">
                      <Image
                      style={{width:"100%",height:"auto"}}
                        height={0}
                        width={0}
                        src={`${attributes.product_image.data.attributes.url}`}
                        alt="bagpack_png"
                        unoptimized
                      />
                      </div>
                      <div>{attributes.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{attributes.qty}</td>
                  <td className="px-6 py-4">{`$${attributes.price}`}</td>
                  <td className="px-6 py-4">{`$${attributes.subTotal}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between p-4 mx-4">
            <div>
              <input
                className="border-b border-gray-300 mr-3"
                placeholder="Coupon Code"
                type="text"
                name="coupon"
                id="coupon"
              />
              <button
                className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white transition p-2"
                type="submit"
              >
                Apply Coupon
              </button>
            </div>
            
          </div>
          <div className="p-4 mx-4">
            <div className="my-4">
              <p className="text-2xl font-bold">CART TOTAL</p>
            </div>
            <div>
              <table className="w-full text-sm text-left text-gray-500">
                <thead>
                  <tr>
                    <th>Subtotal</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-300">
                    <td>{`$${total}`}</td>
                    <td>{`$${total}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-3">
             <Link href={"/checkout"}>
             <button
                className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white transition p-2"
                type="submit"
              >
                Proceed To Checkout
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
