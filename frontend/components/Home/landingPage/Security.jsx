"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Security = () => {
  return (
    <main className="min-h-fit sm:min-h-screen relative">
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          verticalSwipe
        >
          <div>
            <img src="https://www.xtrafondos.com/wallpapers/resoluciones/19/call-of-duty-mobile_2560x1440_4007.jpg" />
          </div>
          <div>
            <img src="https://images5.alphacoders.com/105/1050665.jpg" />
          </div>
        </Carousel>
      </div>

      <div className="hidden sm:flex w-full justify-around absolute -bottom-32">
        <div className="flex flex-col justify-around bg-white text-black h-72 w-72 text-center shadow-sm">
          <p className="font-anton text-2xl text-yellow-400">LOREM IPSUM</p>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            inventore saepe dolores illum corrupti nulla!
          </p>

          <div>
            <button className="border-2 w-1/2 border-yellow-400 hover:font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-around bg-white text-black h-72 w-72 text-center shadow-sm">
          <p className="font-anton text-2xl text-yellow-400">LOREM IPSUM</p>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            inventore saepe dolores illum corrupti nulla!
          </p>

          <div>
            <button className="border-2 w-1/2 border-yellow-400 hover:font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-around bg-white text-black h-72 w-72 text-center shadow-sm">
          <p className="font-anton text-2xl text-yellow-400">LOREM IPSUM</p>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            inventore saepe dolores illum corrupti nulla!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Security;
