import { education } from "../constants";
import Present from "./Present";

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {education.map((edu) => (
        <Present data={edu} />
      ))}
    </section>
  );
};

export default Education;
