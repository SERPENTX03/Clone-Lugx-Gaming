import Cardpresent from "@/components/Card-present";
import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import Mostplayed from "@/components/Mostplayed";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";
import TrandingGame from "@/components/TrandingGame";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-2  ">
      <main className=" bg-main relative h-screen">
        <Navbar />
        <div className="sm:px-20 md:px-[4.5rem] xl:max-w-[1400px] mx-auto ">
          <Hero />
          <Cardpresent />
        </div>
      </main>

      <div className="sm:px-20 xl:max-w-[1400px] mx-auto ">
        <TrandingGame />
      </div>
      <Mostplayed />
      <div className="xl:max-w-[1400px] mx-auto">
        <CategoryCard />
        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
