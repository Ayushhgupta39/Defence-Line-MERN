"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import CartIcon from "./shop/CartIcon";
import useUserStore from "@app/Store/UserStore";

const Nav = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const user = useUserStore((state) => state.userData);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const logOut = useUserStore((state) => state.logOut);

  useEffect(() => {
    setUserData(user);
  }, [isLoggedIn]);
  useEffect(() => {
    setUserData(user);
  }, []);

  const [isListOpen, setIsListOpen] = useState(false);

  const handleClick = () => {
    setIsListOpen((current) => !current);
  };
  return (
    <>
      <nav className="z-50 w-full text-white hidden lg:flex my-0 justify-around bg-defence_blue sticky top-0">
        <div className="my-2">
          <Link href={"/"}>
            <p className="text-3xl text-yellow-400 font-anton">DEFENCE LINE</p>
          </Link>
        </div>

        {/* Desktop Navbar */}
        <Link className="nav-link" href={"/"}>
          <p className="nav-text">Home</p>
        </Link>

        <Link className="nav-link" href={"/aboutUs"}>
          <p className="nav-text">About Us</p>
        </Link>

        <Link className="nav-link" href={"/events"}>
          <p className="nav-text">Events</p>
        </Link>

        <Link className="nav-link" href={"/news"}>
          <p className="nav-text">News</p>
        </Link>

        <Link className="nav-link" href={"/shop"}>
          <p className="nav-text">Shop</p>
        </Link>

        <Link className="nav-link" href={"/"}>
          <p className="nav-text">Blog</p>
        </Link>

        <Link className="nav-link" href={"/network"}>
          <p className="nav-text">Networking</p>
        </Link>

        <Link className="nav-link" href={"/contactUs"}>
          <p className="nav-text">Contact Us</p>
        </Link>

        <div className="flex my-2 items-center justify-between gap-4">
          <Link href={"/cart"}>
            <CartIcon />
          </Link>
          {isLoggedIn && userData ? (
            <div
              className="cursor-pointer font-black rounded-full p-3 uppercase "
              onClick={() => logOut()}
            >
              {" " && userData.username.charAt(0)}
            </div>
          ) : (
            <Link href={"/auth"}>
              <FaUser className="cursor-pointer hover:text-yellow-400" />
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="lg:hidden w-full flex justify-between items-center">
        <div className="my-2">
          <Link href={"/"}>
            <p className="text-lg py-2 px-3 text-yellow-400 font-anton">
              DEFENCE LINE
            </p>
          </Link>
        </div>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center p-2"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <GiHamburgerMenu className="text-white" />
            </button>
          </div>
          {isListOpen ? (
            <div
              className="bg-defence_blue text-white transition ease-out duration-500 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="flex my-1 justify-center items-center gap-4">
                <Link onClick={handleClick} href={"/cart"}>
                  <CartIcon />
                </Link>
                <FaUser className="cursor-pointer hover:text-yellow-400" />
              </div>
              <div className="py-1">
              <Link className="block px-4 py-2 text-sm" href={"/aboutUs"}>
                  <p onClick={handleClick} className="nav-text">
                    About Us
                  </p>
                </Link>

                <Link className="block px-4 py-2 text-sm" href={"/events"}>
                  <p onClick={handleClick} className="nav-text">
                    Events
                  </p>
                </Link>
                <Link className="nav-link" href={"/news"}>
                  <p className="block px-4 py-2 text-sm">News</p>
                </Link>

                <Link className="nav-link" href={"/shop"}>
                  <p onClick={handleClick} className="block px-4 py-2 text-sm">
                    Shop
                  </p>
                </Link>

                <Link className="nav-link" href={"/"}>
                  <p onClick={handleClick} className="block px-4 py-2 text-sm">
                    Blog
                  </p>
                </Link>

                <Link className="nav-link" href={"/network"}>
                  <p onClick={handleClick} className="block px-4 py-2 text-sm">
                    Networking
                  </p>
                </Link>

                <Link className="nav-link" href={"/contactUs"}>
                  <p onClick={handleClick} className="block px-4 py-2 text-sm">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Nav;
