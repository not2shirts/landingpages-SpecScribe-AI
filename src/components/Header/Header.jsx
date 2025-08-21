import React from "react";
import { Button } from "@/components/ui/button";
import { Settings2Icon } from "lucide-react";
// import { useEffect, useRef } from "react";
import "../../App.css";



const navItems = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#about" },
  { name: "Demo", href: "#contact" },
];

function Header() {
  return (
    <div>
      <nav className=" min-w-[calc(100%-2rem)] m-4 z-40 p-2 border-2 fixed rounded-xl border-gray-400 backdrop-blur-md flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-2">
          <div>
            <Settings2Icon />
          </div>
          <div className="text-lg font-bold"> SpecScribe AI</div>
        </div>

        <div className=" space-x-4 hidden md:flex ">
          {navItems.map((item) => {
            return (
              <Button asChild
                key={item.name}
                variant="ghost"
                className="nav-link"
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            );
          })}
        </div>
          <div className="flex space-x-2 m-1">


        <div>
            <Button
                variant="outline"
                className="m-2 rounded-md hover:bg-gray-200"
            >
                Sign In
            </Button>
            <Button
                variant="secondary"
                className="m-2 rounded-md  bg-green-500 text-white float-btn hover:bg-green-600"
            >
                Start Free Trial
            </Button>
        </div>
          </div>
      </nav>
    </div>
  );
}

export default Header;
