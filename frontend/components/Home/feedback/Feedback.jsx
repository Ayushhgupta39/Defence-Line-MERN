import FeedbackCard from "./FeedbackCard";
import axios from "@utils/axiosConfig";

const Feedback = async () => {
  const res = await axios("api/testimonials?populate=*");
  const feedbacks = res.data.data;

  return (
    <main className="flex flex-col bg-white text-black min-h-screen">
      <div className="flex flex-col font-anton text-6xl m-4 p-4 tracking-wider">
        <span className="text-yellow-400">WHAT PEOPLE</span>
        <span>SAY ABOUT US</span>
        <hr className="border-4 w-1/4 border-yellow-400 my-2" />
      </div>

      <div className="relative">
        <div className="feedback-triangle bg-yellow-400 w-72 h-72 absolute top-0 right-0"></div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3 p-4 m-4 z-0">
        {feedbacks.map(({ attributes }, index) => {
          return (
            <FeedbackCard
              key={index}
              designation={attributes.designation}
              feedback={attributes.message}
              author={attributes.name}
              img={attributes.avatar.data.attributes.url}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Feedback;
