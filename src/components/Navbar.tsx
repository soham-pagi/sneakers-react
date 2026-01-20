import { Link } from "react-router";
import { AvatarImage, IconCart, IconMenu, Logo } from "../assets/images/images";
import { NavLink } from "react-router";
import Cart from "./Cart";
import { Activity, useState } from "react";
import Sidebar from "./Sidebar";
import { navLinks } from "../contants";

export default function Navbar() {
  const [showCart, setShowCart] = useState<"hidden" | "visible">("hidden");
  const [openMenu, setOpenMenu] = useState(false);

  function toggleCart() {
    setShowCart((pre) => {
      return pre === "hidden" ? "visible" : "hidden";
    });
  }

  return (
    <nav className="container flex justify-between items-center py-6 md:py-0 mx-auto px-6 md:px-0 md:border-b-2 md:border-gray-200">
      <div className="flex gap-20 items-center">
        <div className="flex gap-2 items-center">
          <img
            onClick={() => setOpenMenu(true)}
            className="md:hidden"
            width={20}
            src={IconMenu}
            alt="hamburger menu"
          />
          <Activity mode={openMenu ? "visible" : "hidden"}>
            <Sidebar isOpen={openMenu} close={() => setOpenMenu(false)} />
          </Activity>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="hidden md:flex md:gap-8">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `border-b-4 px-0 md:py-10 ${isActive ? " text-black border-orange-400" : "text-black/70 border-transparent"}`
              }
              key={link.route}
              to={link.route}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="relative flex items-center text-black/70 gap-4">
        <button onClick={toggleCart}>
          <img src={IconCart} alt="logo" />
        </button>
        <Activity mode={showCart}>
          <Cart
            className={
              "transition-all duration-500 fixed top-25 left-1/2 -translate-x-1/2 w-[90vw] max-w-xl md:absolute md:top-12 md:left-auto md:right-0 md:translate-x-0 md:w-80 min-h-60 bg-white rounded-md shadow-lg py-2 px-2"
            }
          />
        </Activity>
        <img
          src={AvatarImage}
          alt="logo"
          width={42}
          className="rounded-full border-2 border-orange-400"
        />
      </div>
    </nav>
  );
}
