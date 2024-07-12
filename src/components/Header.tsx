import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-scroll";
import Bio from "./Bio";

const Header = () => {
  return (
    <header>
      <div className="text-left lg:flex gap-x-14 justify-start">
        <span>
          <h1>Mide</h1>
          <h1>Ibraheem</h1>
        </span>

        <Bio
          text="Hi, I’m Mide, a tech enthusiast passionate about developing innovative
          and efficient software solutions. My journey started in 2021, and I’ve
          enjoyed every step of it. I interned at Infiniti Systems, where I
          worked as part of a team to develop and maintain internal dashboards
          and payroll software. I recently completed my MSc in Computer Science
          at Northumbria University 🎓, where I focused on Java OOP, Web
          Programming, System Design, and Database Design. Alongside my studies,
          I worked part-time as an AI Language Model Trainer, focusing on code
          correctness, efficiency, and best practices. I have experience with
          Java, JavaScript, Python, PHP, SQL, TypeScript, React, Django, and
          Tailwind. See some of my projects - https://midee.dev/. Outside of
          tech, I enjoy listening to music 🎵, playing chess ♟️, watching anime
          🎥, and reading historical books 📚. I’m always open to connecting and
          exploring new opportunities. Let’s chat and see how we can
          collaborate!"
        />
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
