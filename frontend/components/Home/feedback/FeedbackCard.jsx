import Image from "next/image";

const FeedbackCard =async ({ feedback, author, img,designation }) => {
  return (
    <div className="shadow-xl bg-white">
          <div className="mx-4 my-6">
            {feedback}
          </div>
          <div className="mx-4 my-6">
            <div className="flex rounded-full">
              <Image
                src={`${img}`}
                width={50}
                height={50}
                alt="feedback_profile"
                className="mr-4"
              />
              <div className="flex flex-col">
                <span>{author}</span>
                <small className="text-yellow-400">{designation}</small>
              </div>
            </div>
          </div>
        </div>
  )
};

export default FeedbackCard;
