import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image src="/horseLogo.jpg" alt="logo" width={40} height={40} />
        </div>
        <h1 className="text-white text-[25px] font-semibold ">
          Dev{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Portfolio{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link
            key={social.name}
            href="https://www.linkedin.com/in/ksk-koushik-96aa89248/"
          >
            <Image src={social.src} alt={social.name} height={28} width={28} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
