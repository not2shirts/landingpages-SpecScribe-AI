import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings2Icon, Menu, X } from "lucide-react";
import "../../App.css";

const navItems = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#about" },
  { name: "Demo", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="min-w-[calc(100%-2rem)] m-4 z-40 p-2 border-2 fixed rounded-xl border-gray-400 backdrop-blur-md flex justify-between items-center shadow-lg">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Settings2Icon />
          <div className="text-lg font-bold">SpecScribe AI</div>
        </div>

        {/* Desktop Nav */}
        <div className="space-x-4 hidden md:flex">
          {navItems.map((item) => (
            <Button
              asChild
              key={item.name}
              variant="ghost"
              className="nav-link"
            >
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {/* Desktop Buttons */}
          <div className="hidden md:flex">
            <Button
              variant="outline"
              className="m-2 rounded-md hover:bg-gray-200"
            >
              Sign In
            </Button>
            <Button
              variant="secondary"
              className="m-2 rounded-md bg-green-500 text-white float-btn hover:bg-green-600"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 mx-4 p-4 border-2 rounded-xl border-gray-400 backdrop-blur-md shadow-lg bg-white">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Button
                asChild
                key={item.name}
                variant="ghost"
                className="w-full text-left"
                onClick={() => setMenuOpen(false)}
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
            <Button
              variant="outline"
              className="w-full rounded-md hover:bg-gray-200"
            >
              Sign In
            </Button>
            <Button
              variant="secondary"
              className="w-full rounded-md bg-green-500 text-white hover:bg-green-600"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
