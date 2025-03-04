"use client";
import React, { useState } from "react";
import { TrandingGameData } from "@/utils/trandingGame";
import Image from "next/image";

const TrandingGame = () => {
  const [ishoverIndex, setIsHoverIndex] = useState<number | null>(null);
  return (
    <section className="lg:mt-40 md:mt-[500px] mt-[900px]">
      <div className="pb-10">
        <h5 className="uppercase text-red-500 mb-6 font-bold">trending</h5>
        <div className="flex justify-between">
          <h1 className="capitalize font-bold text-3xl lg:text-4xl">
            tranding games
          </h1>
          <span>view all</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TrandingGameData.map((game, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setIsHoverIndex(index)}
              onMouseLeave={() => setIsHoverIndex(null)}
              className="border rounded-2xl shadow-xl "
            >
              <div className="relative w-full ">
                <Image
                  className="w-full object-cover rounded-xl"
                  src={game.img || ""}
                  alt={game.title}
                />
                <div
                  className={`absolute text-white flex flex-col top-6 right-6 p-2 px-3 rounded-xl transition-all duration-500 ${
                    ishoverIndex === index ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <span className="line-through ml-2 text-sm">
                    ${game.onsale}
                  </span>
                  <span className="font-bold">${game.price}</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-6">
                <div className="flex flex-col">
                  <span className="text-slate-500">{game.title}</span>
                  <span className="font-bold text-xl">{game.description}</span>
                </div>

                <div
                  className={`h-10 w-10 flex rounded-full justify-center items-center transition-all duration-500 ${
                    ishoverIndex === index ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <game.icon className="text-white text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrandingGame;
