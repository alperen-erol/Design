import { MenuIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="flex justify-between items-center text-white py-4 px-8 shadow-lg bg-gradient-to-r from-gray-900 to-black transition-all duration-300">
      <a href="#">
        <img
          src={logo}
          alt="Logo"
          className="hover:scale-110 w-52 transition-transform duration-300"
        />
      </a>

      <ul className="hidden md:flex items-center gap-9 font-semibold text-base px-20">
        {["Home", "Products", "Contact"].map((item) => (
          <li
            key={item}
            className="p-3 hover:text-lg rounded-md cursor-pointer transition-transform duration-300 hover:bg-gray-800 hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>

      <i className="md:hidden block text-5xl cursor-pointer">
        <MenuIcon size={40} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </i>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transform transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {["Home", "Products", "Contact"].map((item) => (
          <li
            key={item}
            className="list-none text-center py-4 text-2xl font-semibold text-white cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </li>
        ))}
      </div>
    </header>
  );
};

export default Header;
