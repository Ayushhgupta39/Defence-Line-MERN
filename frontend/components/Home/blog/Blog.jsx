import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = [
    {
      bgImage: "/assets/images/blogs/blog1.png",
      date: "Lorem Ipsum",
      content: "Lorem Ipsum",
      author: "ADMIN",
    },
    {
      bgImage: "/assets/images/blogs/blog1.png",
      date: "Lorem Ipsum",
      content: "Lorem Ipsum",
      author: "ADMIN",
    },
    {
      bgImage: "/assets/images/blogs/blog1.png",
      date: "Lorem Ipsum",
      content: "Lorem Ipsum",
      author: "ADMIN",
    },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen bg-defence_blue pt-8">
      <div className="flex justify-center text-6xl font-anton tracking-wider">
        <span className="mr-2 text-yellow-400">OUR</span>
        <span>BLOG</span>
      </div>
      <hr className="border-4 border-yellow-400 my-4 mx-2" />

      <div className="flex flex-col items-center gap-2 sm:grid sm:grid-cols-3 p-4 m-4 ml-10">
        {blogs.map(({ bgImage, date, content, author }, index) => {
          return (
            <BlogCard
              key={index}
              bgImage={bgImage}
              date={date}
              content={content}
              author={author}
              className="my-2 sm:my-2"
            />
          );
        })}
      </div>
    </main>
  );
};

export default Blog;
