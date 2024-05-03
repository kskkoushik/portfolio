"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
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
      </div>
    </div>
  );
};

export default Page;
