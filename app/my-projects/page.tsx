"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        <ProjectCard
          title={"Modern Nextjs Portfolio"}
          text={
            "This is a dynamic protfolio made to project my skills and expertise and give abrefi about me"
          }
          image={"/WebPortfolio.png"}
        />
        <ProjectCard
          title={"Help Coin"}
          text={
            "Integrating economy and humanity into a single webapp glorifying the vision of humanity"
          }
          image={"/HelpCoin.jpeg"}
        />
      </div>
    </div>
  );
};

export default Page;
