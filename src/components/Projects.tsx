import { ProjectCarousel } from "./Carousel";
import { projects } from "@/constants";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <h2>Projects</h2>
        <div className="flex justify-center pt-3">
          <ProjectCarousel data={projects} />
        </div>
      </Element>
    </section>
  );
};

export default Projects;
