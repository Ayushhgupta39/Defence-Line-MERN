import axios from "@utils/axiosConfig";

const getGalleryImages = async () => {
  const res = await axios.get("/api/galleries?populate=*");
  const originalGallery = res.data.data;
  return originalGallery;
};

const Gallery = async () => {
  const originalGallery = await getGalleryImages();

  return (
    <main className="w-full bg-defence_blue min-h-screen">
      <div className="flex flex-col justify-center text-6xl p-4 font-anton tracking-wider">
        <div className="flex justify-center">
          <span className="mr-2 text-yellow-400">OUR</span>
          <span>GALLERY</span>
        </div>
        <hr className="border-4 border-yellow-400 my-4" />
      </div>

      <div className="flex flex-col sm:flex-row">
        {originalGallery.map(({ attributes }, index) => {
          return (
            <div
              key={index}
              className={`flex h-96 gallery_transition bg-cover flex-col-reverse m-1 cursor-pointer sm:w-1/6`}
              style={{ backgroundImage: `url('${attributes.image.data.attributes.url}')` }}
            >
              <div className="flex p-1 text-center justify-center items-center bg-yellow-400 text-black">
                <p>{attributes.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
