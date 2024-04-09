"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import NavItems from "./NavItems";

const NavBar = () => {
  const [active, setActive] = useState(0);
  const navItems = [
    { name: "AI Audit", path: "/" },
    { name: "Manual Audit", path: "/" },
    { name: "RedTeam", path: "/" },
    { name: "Monitor", path: "/" },
    { name: "Incident Response", path: "/" },
  ];

  return (
    <div className="flex justify-between items-center bg-gray-800 w-full rounded-sm h-[52px]">
      <div className="cursor-pointer flex items-center gap-1 px-7 border-r border-gray-700 h-[52px]">
        <Image src="/Shield.png" width={24} height={28} alt="logo" />
        <h3 className="text-lg">QuillShield</h3>
      </div>
      <div className="flex items-center flex-grow h-[52px] justify-end gap-5 px-8">
        {navItems.map((nav, i) => (
          <NavItems
            key={i}
            index={i}
            item={nav}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
      <div className="h-[52px] cursor-pointer flex items-center justify-between gap-3 px-5 border-l border-gray-700">
        <Image src="/DP.png" width={28} height={28} alt="profile" />
        <p className="text-sm">Johhny Doe</p>
        <AiOutlineDown className="ml-4 text-gray-400" />
      </div>
    </div>
  );
};

export default NavBar;
