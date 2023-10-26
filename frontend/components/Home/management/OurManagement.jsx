import MainHeading from "../MainHeading";
import OurManagementCard from "./OurManagementCard";
import axios from "@utils/axiosConfig";
// import useStore from "@app/store";
// import { useEffect } from "react";

const getManagers = async () => {
  try {
    const res = await axios.get("/api/managerments?populate=*");
  return res.data.data;
  } catch (error) {
    return [];
  }
};

const OurManagement =async () => {

  const managers=await getManagers()

  // const fetchData = useStore((state) => state.fetchData);
  // const managers = useStore((state) => state.managers);
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData, managers]);

  // const managers = [
  //   {
  //     title: "Lorem Ipsum",
  //     role: "lorem ipsum",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Major_General_Manvender_Singh_AVSM_VSM%2C_General_Officer_Commanding_Delhi_Area_and_Chairman_Durand_Football_Tournament_Society_briefing_the_media_about_-_124th_edition_of_Durand_Football_Tournament%2C_in_New_Delhi.jpg/220px-thumbnail.jpg",
  //   },
  //   {
  //     title: "Lorem Ipsum",
  //     role: "lorem ipsum",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Major_General_Manvender_Singh_AVSM_VSM%2C_General_Officer_Commanding_Delhi_Area_and_Chairman_Durand_Football_Tournament_Society_briefing_the_media_about_-_124th_edition_of_Durand_Football_Tournament%2C_in_New_Delhi.jpg/220px-thumbnail.jpg",
  //   },
  //   {
  //     title: "Lorem Ipsum",
  //     role: "lorem ipsum",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Major_General_Manvender_Singh_AVSM_VSM%2C_General_Officer_Commanding_Delhi_Area_and_Chairman_Durand_Football_Tournament_Society_briefing_the_media_about_-_124th_edition_of_Durand_Football_Tournament%2C_in_New_Delhi.jpg/220px-thumbnail.jpg",
  //   },
  // ];

  return (
    <section className="our-service-wrapper w-100 min-h-screen bg-white p-20">
      <MainHeading textYellow={"OUR"} textBlack={"MANAGEMENT"}></MainHeading>

      <div className="management-list grid grid-cols-1 sm:grid-cols-3 pt-5">
        {managers.map(({ attributes }, index) => {
          return (
            <OurManagementCard
            key={index}
              personImage={attributes.photo.data.attributes.url}
              personName={attributes.name}
              personRole={attributes.designation}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurManagement;
