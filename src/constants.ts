import DaLogo from "./components/Icons/daLogo";
import Infiniti from "./components/Icons/infiniti";
import Kwasu from "./components/Icons/kwasu";
import Northumbria from "./components/Icons/northumbria";
import cb1 from "./assets/cb1.png";
import cb2 from "./assets/cb2.png";
import cb3 from "./assets/cb3.png";
import cb3b from "./assets/cb3b.png";
import cb33 from "./assets/cb33.png";
import cb5 from "./assets/cb5.png";
import cb5b from "./assets/cb5b.png";
import cb6 from "./assets/cb6.png";
import s1 from "./assets/s1.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i7 from "./assets/i7.png";
import i8 from "./assets/i8.png";
import i9 from "./assets/i9.png";
import i10 from "./assets/i10.png";

export const experience = [
  {
    id: 1,
    company: "Data Annotation",
    logo: DaLogo,
    position: "AI Language Model Trainer",
    location: "Remote",
    duration: "September 2023 - Present",
    body: [
      "Trained AI models by guiding them through structured approaches to solve code prompts, including data analysis, frontend UI development, and backend logic implementation.",
      "Responsible for reviewing, comparing and re-writing codes generated by Language models with a focus on code correctness, efficiency, and standard practices.",
    ],
  },
  {
    id: 2,
    company: "Infiniti Systems",
    logo: Infiniti,
    position: "Software Engineer Intern",
    location: "Lagos, NG",
    duration: "Feb - Aug 2022",
    body: [
      "Worked as a frontend intern in a team of 7 engineers, building and maintaining internal dashboards and payroll software for the administrative head of the Treasury in Nigeria.",
    ],
  },
];

export const education = [
  {
    id: 3,
    company: "Northumbria University",
    logo: Northumbria,
    position: "MSc in Computer Science",
    location: "Newcastle, UK",
    duration: "Jan 2023 - July 2024",
    body: [
      "GPA: Distinction",
      "Relevant Coursework: Java OOP, Web Programming, System Design, Database Design, Computer Networking.",
    ],
  },
  {
    id: 4,
    company: "Kwara State University",
    logo: Kwasu,
    position: "Material Science Engineering",
    location: "Kwara State, NG",
    duration: "March 2015 - Jan 2021 (inc. NYSC)",
    body: [
      "GPA: 3.13 (Evaluated WES)",
      "Relevant Coursework: Engineering Mathematics, MatLab, Obect oriented programming in C++.",
    ],
  },
];

export const projects = [
  {
    title: "CleanBites",
    technology:
      "Django, React, Typescript, Python, Postgres, Docker, Github, Figma",
    desc: "According to the UK Food Standards Agency (FSA), there are nearly 2.4 million cases of food poisoning in the UK each year. CleanBites is a web app that recommends tens of thousands of restaurants in London to customers based on official health inspection scores and public reviews.",
    website: "https://cleanbites.uk/",
    liveDemo: "",
    github: "https://github.com/mide-dev",
    images: [cb1, cb2, cb3, cb3b, cb33, cb5, cb5b, cb6],
  },
  {
    title: "Sudoku",
    technology: "Java",
    desc: "Developed a Sudoku game with a GUI, featuring undo, save, clear, and load functions, along with unit testing and documentation. This project was the final graded project for the OOP module at Northumbria University.",
    website: "https://github.com/mide-dev/Sudoku",
    liveDemo: "",
    github: "https://github.com/mide-dev/Sudoku",
    images: [s1, s3, s4, s5],
  },
  {
    title: "InnovateX",
    technology: "PHP, Javascript, HTML, CSS, MySQL, Figma",
    desc: "An event booking website for tech, business, and entrepreneurship events. The challenge was to design and build this entirely from scratch using vanilla tools. This project was the final graded project for the web development module at Northumbria University.",
    website: "https://w22028079.nuwebspace.co.uk/KF7013/content/index.php",
    liveDemo: "",
    github: "https://github.com/mide-dev/InnovateX",
    images: [i1, i2, i3, i7, i8, i9, i10],
  },
];
