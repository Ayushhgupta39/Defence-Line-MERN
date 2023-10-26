import React from "react";
import MainHeading from "../MainHeading";
import ServicesCard from "./ServicesCard";
import axios from "@utils/axiosConfig";


const getOurServices=async ()=>{
    const res=await axios.get("/api/services")
    return res.data.data
}

export default async function OurServices () {
  const services=await getOurServices()
  

  return (
    <section className="our-service-wrapper w-100 h-max bg-white p-20">
      <MainHeading textYellow={"OUR"} textBlack={"SERVICES"} />
      <div className="pt-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-6">
        {services.map(({ attributes }, index) => {
          return <ServicesCard key={index} title={attributes.title} description={attributes.description} />;
        })}
      </div>
    </section>
  );
}
