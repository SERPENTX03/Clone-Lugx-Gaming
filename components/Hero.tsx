import Image from "next/image";
import React from "react";
import bannerImage from "@/public/images/banner-image.jpg";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="md:text-left text-center  text-white flex flex-col  justify-between">
          <h5 className="uppercase text-xl font-semibold">welcome to lugx</h5>
          <div className="relative">
            <h1 className="uppercase text-3xl md:text-5xl font-extrabold mt-10 mb-16">
              best gaming site ever!
            </h1>
            <div className="after-h1 "></div>
          </div>
          <p className="mb-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            dolor? Quibusdam ipsum excepturi et non quis cumque ratione
            repellendus, at ullam repellat est debitis maxime rerum molestiae
            hic sint rem.
          </p>
          <div className="relative ">
            <input
              placeholder="Type Something"
              className="w-full rounded-full h-12"
            />
            <button className="uppercase  h-12 absolute right-0
             rounded-full px-6 bg-red-400 hover:bg-blue-400  duration-500 ease-in-out">
              search now
            </button>
          </div>
        </div>

        {/* Grid Image */}
        <div className="mt-10">
          <div className="relative w-full lg:flex lg:justify-end">
            <div className="relative lg:w-[60%]">
              <Image
                className=" rounded-2xl w-full  "
                src={bannerImage}
                alt="BannerImage"
              />
              <span className="absolute top-4 right-4 bg-blue-400 p-2 rounded-full text-white">
                22$
              </span>
              <span
                className="absolute bottom-4 left-4 bg-red-400 h-24 w-24
             flex items-center justify-center rounded-full text-white text-2xl font-bold"
              >
                -40%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
