"use client";

import React, { useState, useRef } from "react";
import MainHeading from "./MainHeading";
import axios from "@utils/clientAxiosConfig";

const ContactUs = () => {
  const [submitStatus, setSubmitStatus] = useState(false);

  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleFormSubmit = async (e) => {
    try {
      const response = await axios({
        url: `/api/contactuses`,
        method: "POST",
        data: {
          data: {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value,
          },
        },
      });
      name.current.value = email.current.value = message.current.value = "";
      setSubmitStatus(true);
      e.target.disabled = true;
      e.target.classList.add("cursor-not-allowed");
      e.target.classList.remove("hover:bg-yellow-500");
    } catch (error) {
      
      name.current.value = email.current.value = message.current.value = "";
      alert("Fill The Form Carefully!");
    }
  };

  return (
    <section
      style={{ backgroundColor: "#131E25" }}
      className="sm:min-h-screen min-w-full p-5 sm:p-20"
    >
      <div
        style={{ textAlign: "left" }}
        className="p-5 pt-10 sm:p-10 sm:h-screen"
        id="contact-us-form"
      >
        <MainHeading textYellow={"CONTACT"} textWhite={"US"} />
        <form
          id="contact-us-form"
          className="sm:h-4/5 p-10 flex flex-col sm:justify-between"
        >
          <div className="entry pb-8">
            <label className="font-anton text-2xl" htmlFor="">
              Name<sup>*</sup>
            </label>
            <input
              ref={name}
              id="name"
              name="name"
              type="text"
              className="pt-5 border-white border-b-2 appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="e.g. Swayam Prajapat"
            />
          </div>
          <div className="entry pb-8">
            <label className="font-anton text-2xl" htmlFor="">
              Email<sup>*</sup>
            </label>
            <input
              ref={email}
              id="name"
              name="name"
              type="text"
              className="pt-5 border-white border-b-2 appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="e.g. Swayam Prajapat"
            />
          </div>
          <div className="entry pb-8">
            <label className="font-anton text-2xl" htmlFor="">
              Message<sup>*</sup>
            </label>
            <textarea
              ref={message}
              rows={"3"}
              id="name"
              name="name"
              type="text"
              className="pt-5 border-white border-b-2 appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="e.g. Swayam Prajapat"
            />
          </div>
          <button
            onClick={handleFormSubmit}
            type="button"
            className="hover:bg-yellow-500 w-fit text-white font-bold py-2 px-4 border border-yellow-700 rounded"
          >
            {submitStatus ? "Submitted" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
