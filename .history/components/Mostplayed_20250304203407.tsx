import { mostPlayed } from "@/utils/mostPlated";
import Image from "next/image";

const Mostplayed = () => {
  return (
    <section className="mt-36 bg-gray-100 rounded-[10rem] lg:rounded-full py-24">
      <div className=" sm:px-20">
        <div className="pb-10 text-center lg:text-left">
          <h5 className="uppercase text-red-500 mb-6 font-bold">TOP GAMES</h5>
          <div className="flex justify-center lg:justify-between  ">
            <h1 className="capitalize font-extrabold text-3xl lg:text-4xl">
              Most Played
            </h1>
            <p className="cursor-pointer hidden lg:block text-white bg-red-500 hover:bg-blue-500 py-3 px-6 rounded-3xl font-semibold uppercase">
              view all
            </p>
          </div>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 ">
          {mostPlayed.map((played, index) => (
            <div
              key={index}
              className="w-full relative border overflow-hidden shadow-xl rounded-3xl"
            >
              <p className="absolute bottom-0 ">{played.explore}</p>

              <div className="relative  ">
                <Image
                  className="w-full object-cover"
                  src={played.img}
                  alt={played.title}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <p className="text-slate-300 text-sm">{played.title}</p>
                <p className="text-xl font-bold">{played.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Mostplayed;
