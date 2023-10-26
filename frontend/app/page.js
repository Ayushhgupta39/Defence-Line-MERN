"use client"

import About from "@components/Home/about/About";
import Feedback from "@components/Home/feedback/Feedback";
import Gallery from "@components/Home/about/Gallery";
import Blog from "@components/Home/blog/Blog";
import OurServices from "@components/Home/services/OurServices";
import OurManagement from "@components/Home/management/OurManagement";
import Security from "@components/Home/landingPage/Security";
import ContactUs from "@components/Home/ContactUs";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setFunc(obj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex flex-col">
      <section id="home-main w-full">
        <Security />
      </section>

      <section id="about-home">
        <About />
      </section>

      <section id="gallery-home">
        <Gallery />
      </section>

      <section id="feedback-home">
        <Feedback />
      </section>

      <section id="blogs-home">
        <Blog />
      </section>

      <section id="services-home">
        <OurServices />
      </section>

      <section id="management-home">
        <OurManagement />
      </section>
    </main>
  );
}
