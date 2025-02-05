import { Linkedin, Github, Twitter } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`${className} flex flex-col items-center justify-center gap-6`}
    >
      <div className="flex gap-4">
        <NavLink to="https://www.linkedin.com/in/midebraheem/" target="_blank">
          <Linkedin className="cursor-pointer stroke-[1.5px] hover:stroke-yellow-500" />
        </NavLink>
        <NavLink to="https://github.com/mide-dev" target="_blank">
          <Github className="cursor-pointer stroke-[1.5px] hover:stroke-yellow-500" />
        </NavLink>
        <NavLink to="https://x.com/mide_0x" target="_blank">
          <Twitter className="cursor-pointer stroke-[1.5px] hover:stroke-yellow-500" />
        </NavLink>
      </div>
      <div className="text-center text-xs font-thin">
        How can I lose when I came here with nothing?
      </div>
    </footer>
  );
};

export default Footer;
