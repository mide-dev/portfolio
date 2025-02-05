import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardComp from "./components/CardComp";

import { cardContent } from "./lib/Content";

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between gap-y-12">
      <div className="flex flex-col items-center">
        <Navbar />

        <h1 className="pt-12">Projects</h1>
        <div className="card-grid mt-24 w-full">
          {cardContent.map((card) => (
            <CardComp key={card.id} {...card} />
          ))}
        </div>
      </div>
      <Footer className="pb-6" />
    </main>
  );
};

export default Projects;
