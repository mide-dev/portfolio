import { experience } from "../constants";
import Present from "./Present";

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      {experience.map((exp) => (
        <Present data={exp} />
      ))}
    </section>
  );
};

export default Experience;
