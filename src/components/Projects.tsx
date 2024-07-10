import { ProjectCarousel } from "./Carousel";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="flex justify-center pt-3">
        <ProjectCarousel data={projects} />
      </div>
    </section>
  );
};

export default Projects;
