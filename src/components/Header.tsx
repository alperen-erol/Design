import { MenuIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center text-white py-6 px-8 drop-shadow-md bg-black">
      <a href="#">
        <img
          src={logo}
          alt=""
          className="hover:scale-105 w-52 transition-all  "
        />
      </a>
      <ul className="hidden md:flex items-center gap-9 font-semibold text-base px-20">
        <li className="p-3 hover:text-lg rounded-md cursor-pointer transition-all">
          Home
        </li>
        <li className="p-3 hover:text-lg rounded-md cursor-pointer transition-all">
          Products
        </li>
        <li className="p-3 hover:text-lg rounded-md cursor-pointer transition-all">
          Contact
        </li>
      </ul>

      <i className="md:hidden block text-5xl cursor-pointer">
        <MenuIcon size={40} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </i>

      <div
        className={`absolute xl:hidden top-32 left-0 w-full bg-black flex-col items-center gap-6 font-semibold text-lg  transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-4  hover:my-2 text-white transition-all cursor-pointer">
          Home
        </li>
        <li className="list-none w-full text-center p-4 hover:my-2 text-white transition-all cursor-pointer">
          Products
        </li>
        <li className="list-none w-full text-center p-4 hover:my-2 text-white transition-all cursor-pointer">
          Contact
        </li>
      </div>
    </header>
  );
};
export default Header;
