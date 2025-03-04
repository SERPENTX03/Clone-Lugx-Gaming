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
              className="w-full relative text-center border shadow-xl rounded-3xl"
            >
              {/* ส่วนของ explore อยู่ด้านนอก ไม่ถูก overflow-hidden กระทบ */}
              <p className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-fit bg-red-500 text-white px-2 py-1 rounded">
                {played.explore}
              </p>

              {/* ส่วนของรูปภาพที่ใช้ overflow-hidden */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <Image
                  className="w-full object-cover"
                  src={played.img}
                  alt={played.title}
                  width={200}
                  height={200}
                />
              </div>
              <div className="py-6">
                <p className="text-slate-300 text-sm capitalize">
                  {played.title}
                </p>
                <p className="text-xl font-bold capitalize">
                  {played.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Mostplayed;
