const BlogCard = ({ bgImage, date, content, author }) => {
  return (
    <div className="flex flex-col w-3/4 font-roboto_condensed">
      <div>
        <img src={bgImage} />
      </div>

      <div className="bg-white text-black p-6">
        <div className="flex flex-col my-4">
          <small className="text-gray-500">DATE</small>
          <span className="font-bold text-xl">{date}</span>
        </div>

        <p className="text-gray-500">{content}</p>

        <div className="flex items-center my-4">
          <img
            className="w-10 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
