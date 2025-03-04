import Cardpresent from "@/components/Card-present";
import Hero from "@/components/Hero";
import Mostplayed from "@/components/Mostplayed";
import Navbar from "@/components/Navbar";
import TrandingGame from "@/components/TrandingGame";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-2 ">
      <main className=" bg-main relative ">
        <Navbar />
        <div className="sm:px-16 md:px-[4.5rem]">
          <Hero />
          <Cardpresent />
        </div>
      </main>

      <div className="sm:px-16 ">
        <TrandingGame />
      </div>

      <Mostplayed />
    </div>
  );
};

export default HomePage;
