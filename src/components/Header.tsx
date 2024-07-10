import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="text-left lg:flex gap-x-14 justify-start">
        <span>
          <h1>Mide</h1>
          <h1>Ibraheem</h1>
        </span>
        <p className="max-w-[450px] font-medium pt-5 lg:pt-0 text-[16px]">
          I'm a sofware engineer with a background in Computer Science from
          Northumbria University, UK. Topics I find fascinating includes
          blockchain, LLMs, and Distributed systems. Outside of tech, you’ll
          find me listening to music, reading books on history & evolution or
          playing chess. 🚀
        </p>
      </div>

      <div className="pt-8 flex gap-x-5">
        <a href="mailto:midee247@gmail.com" className="" target="_blank">
          <TfiEmail className="w-6 h-6" />
        </a>
        <a href="https://github.com/mide-dev" className="" target="_blank">
          <FaGithub className="w-6 h-6 hover:shadow-md" />
        </a>
        <a
          href="https://www.linkedin.com/in/mideibrahim/"
          className=""
          target="_blank"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
      </div>
      <Link
        to="projects1"
        smooth={true}
        duration={500}
        className="flex justify-center py-2 px-3 bg-slate-800 mt-12 text-white shadow rounded-sm font-medium cursor-pointer"
      >
        See Projects
      </Link>
    </header>
  );
};

export default Header;
