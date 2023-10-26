import Image from "next/image";

const About = () => {
  return (
    <main id="about-us" className="flex justify-center items-center sm:grid sm:grid-cols-2 bg-defence_blue sm:pt-32">
      <div className="hidden sm:flex">
        <Image
          src="/assets/images/home/tank.png"
          width={600}
          height={600}
          alt="tank_image"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col font-anton text-3xl sm:text-6xl p-2 m-2 sm:p-4 sm:m-4">
          <span className="text-yellow-400 tracking-wider">ABOUT OUR</span>
          <span className="tracking-wider my-2">STRATEGY</span>
          <hr className="border-4 w-1/3 border-yellow-400" />
        </div>

        <div className="p-2 m-2 sm:p-4 sm:m-4">
          <p className="my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            magni doloremque eveniet quo fuga quidem alias ab ex cumque
            distinctio.
          </p>

          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            rem! Nisi porro tempora ipsum velit saepe nihil, obcaecati quisquam
            repellat nesciunt sit, ex excepturi debitis, eum similique
            praesentium cumque officia?
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
