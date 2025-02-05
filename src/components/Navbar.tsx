import { Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkMode";

type Props = {
  className?: string;
};

const Navbar = ({ className }: Props) => {
  return (
    <header
      className={`${className} flex h-[70px] w-full items-center justify-between border-b border-gray-300`}
    >
      <DarkModeToggle />
      {/* <Moon className="cursor-pointer stroke-gray-500 stroke-2" /> */}
      <nav>
        <ul className="flex gap-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "dark:text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `hidden sm:block ${isActive ? "text-yellow-500" : "dark:text-white"}`
            }
          >
            Projects
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
