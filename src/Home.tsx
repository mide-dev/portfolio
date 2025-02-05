import Navbar from "./components/Navbar";
import me from "./assets/me.jpg";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between pb-24">
      <div className="flex flex-col items-center">
        <Navbar />
        <img
          src={me}
          alt="My picture"
          className="mt-12 w-20 rounded-full brightness-125 md:mt-20 md:w-24"
        />
        <h1 className="pt-8">Mide Ibraheem</h1>
        <p className="">Current: Contract Dev at Outlier AI.</p>
        <p>
          Looking for oppourtunities to work on really complex and challenging
          problems.
        </p>
        <p className="pt-8 text-sm">
          Interests: AI & ML, Distributed Systems, Finance, Blockchain
        </p>
        <div className="mt-4 flex gap-6">
          <NavLink
            to="https://drive.google.com/file/d/1_UhWX16kJ8mp-8VjWSuoVNCQ7y-IBItU/view?usp=sharing"
            target="_blank"
          >
            <button className="mt-8 cursor-pointer rounded-lg border border-gray-400 px-3 py-2 shadow">
              Resume
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button className="mt-8 cursor-pointer rounded-lg border border-gray-400 px-3 py-2 shadow">
              Projects
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
