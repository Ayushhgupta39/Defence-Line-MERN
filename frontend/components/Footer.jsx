import Image from "next/image";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdCall, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-3 mx-4 mt-4 sm:mt-0">
        <div className="flex flex-col justify-around sm:p-2 sm:m-6">
          <div className="my-1 sm:my-2 text-3xl font-anton text-yellow-400">
            Contact Us
          </div>

          <div className="flex flex-col my-4 gap-2">
            <div className="flex items-center">
              <MdLocationPin className="mr-1" />
              <p>India</p>
            </div>
            <div className="flex items-center">
              <MdCall className="mr-1" />
              <p>9988776655</p>
            </div>
          </div>

          <div className="my-4 flex gap-8 footer_icons">info@gmail.com</div>
        </div>

        <div className="flex flex-col justify-around sm:p-2 sm:m-6">
          <div className="my-2 text-3xl font-anton text-yellow-400">
            DEFENCE LINE
          </div>

          <div className="my-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            corrupti eligendi placeat, alias earum sint tempore dolore error
            eaque repudiandae.
          </div>

          <div className="my-4 flex gap-8 footer_icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/pinpencil/">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:p-2 sm:m-6">
          <div className="my-2">
            <p className="text-3xl font-anton text-yellow-400">Recent News</p>
          </div>

          <div className="flex my-4">
            <Image
              src="/assets/images/gallery/IMAGE(5).png"
              height={100}
              width={100}
              alt="news_image"
            />
            <div className="flex flex-col mx-2">
              <p className="font-anton text-xl">
                Defence line recognized as a LinkedIn Top Company
              </p>
              <small>October 13, 2022</small>
            </div>
          </div>

          <div className="my-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
