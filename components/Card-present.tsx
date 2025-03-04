"use client"; 

import React, { useState } from "react";
import { CardPresent } from "@/utils/card-present";

const Cardpresent = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="mt-32 md:px-20 sm:px-16 absolute lg:-bottom-20 left-0 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CardPresent.map((pre, index) => (
          <div
            key={index}
            className="w-full cursor-pointer rounded-2xl shadow-xl border bg-white "
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="flex flex-col items-center py-10">
              <div
                className={`rounded-full flex items-center justify-center h-24 w-24 transition-all duration-300 ${
                  hoverIndex === index ? "bg-red-500" : "bg-blue-500"
                }`}
              >
                <pre.icon className="text-white text-4xl" />
              </div>
              <p className="mt-3 font-bold">{pre.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cardpresent;
