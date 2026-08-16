import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  CircleUserRound,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/images/SHOP.CO.png";
import "./Navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const closeMenu = () => {
    setActiveMenu(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-[1240px] mx-auto h-[70px] px-4 md:px-6 flex items-center justify-between gap-6">

        {/*== MOBILE HAMBURGER ==*/}
        <button
          onClick={() => setActiveMenu(true)}
          className="md:hidden text-black"
          aria-label="Open menu"
        >
          <Menu size={23} className="cursor-pointer active:scale-110" />
        </button>

        {/*== LOGO ==*/}
        <img
          src={logo}
          alt="SHOP.CO"
          className="w-[110px] md:w-[140px] h-auto"
        />

        {/*== DESKTOP NAVIGATION ==*/}
        <div className="hidden md:flex font-[satoshi] items-center gap-6 text-[14.7px] font-medium text-black">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-gray-500 transition"
          >
            Shop
            <ChevronDown size={14} />
          </a>

          <a href="#" className="hover:text-gray-500 transition">
            On Sale
          </a>

          <a href="#" className="hover:text-gray-500 transition">
            New Arrivals
          </a>

          <a href="#" className="hover:text-gray-500 transition">
            Brands
          </a>
        </div>


        <div className="hidden md:flex flex-1 max-w-[400px] bg-gray-200 rounded-full h-[42px] items-center px-4">
          <Search size={19} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent outline-none px-3 text-sm font-[satoshi]"
          />
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Search */}
          <button className="md:hidden">
            <Search size={21} />
          </button>

          {/* Cart */}
          <button>
            <ShoppingCart
              size={21}
              className="cursor-pointer active:scale-110 transition"
            />
          </button>

          {/* User */}
          <button>
            <CircleUserRound
              size={21}
              className="cursor-pointer active:scale-110 transition"
            />
          </button>
        </div>
      </div>


      {/*MOBILE MENU*/}
      {activeMenu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-[280px] bg-white md:hidden
          shadow-xl z-[60]
          transform transition-transform duration-300 ease-in-out
          ${activeMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="h-[70px] px-5 flex items-center justify-between border-b">
          <img
            src={logo}
            alt="SHOP.CO"
            className="w-[110px]"
          />

          <button
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} className="cursor-pointer active:scale-110" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col px-6 py-8 gap-7 text-[16px] font-medium">

          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center justify-between"
          >
            Shop
            <ChevronDown size={17} />
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="hover:text-gray-500"
          >
            On Sale
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="hover:text-gray-500"
          >
            New Arrivals
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="hover:text-gray-500"
          >
            Brands
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;