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
import webac from "./assets/webac.png";

export const experience = [
  {
    id: 1,
    company: "Data Annotation",
    logo: DaLogo,
    position: "AI Trainer (Software Engineering)",
    location: "Remote",
    duration: "September 2023 - Present",
    body: [
      "Reviewed and re-wrote Python and JavaScript code produced by AI models, ensuring correctness and eﬀiciency for re-training.",
      "Led AI models in developing step-by-step solutions for coding tasks by evaluating their plans, instructions, and code, ensuring adherence to the proposed solutions and accurate execution.",
      "Documented modifications and rewrites comprehensively, providing clear rationales for changes.",
      "Collaborated with peer trainers to review each other’s work, ensuring adherence to standards and providing constructive feedback.",
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
      "Developed 7 reusable React.js components as part of the IPPIS internal software rebranding.",
      "Integrated several RESTful web services using JSON for data fetching and sending.",
      "Created multiple Python scripts to extract and group data based on predefined conditions from various documents.",
      "Participated in stakeholder meetings to assist senior colleagues, documenting key points on features and bugs in IPPIS internal and government-facing applications.",
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
      "Relevant Coursework: Database Systems, System Design, Software Development Process, Object-oriented programming, Computer Networks.",
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
    desc: "According to the UK Food Standards Agency (FSA), there are nearly 2.4 million cases of food poisoning in the UK each year. I built clean bites to recommend UK restaurants based on health inspection scores and public reviews. This project involved analyzing data from over 15,000 London restaurants, integrating official health inspection scores with enriched data from the Google Places API. Key features of the app include infinite scrolling, session caching by category, and custom search suggestions to enhance user experience. Additionally, I implemented user authentication using JWT tokens, allowing users to create and delete reviews securely. The backend was built using Python, Django, and PostgreSQL, with multi-threading employed to improve performance when merging Google-enriched data with database information.",
    website: "https://cleanbites.uk/",
    liveDemo: "",
    github: "https://github.com/mide-dev",
    images: [cb1, cb2, cb3, cb3b, cb33, cb5, cb5b, cb6],
  },
  {
    title: "Automated Web Accessibility Violation Fixer",
    technology: "Node.js",
    desc: "I collaborated with a professor and a PhD student from Northumbria University’s DSAI research group to develop a Node.js-based solution for automatically rectifying web accessibility violations in the DOM. We engineered a framework that parses websites from given URLs, detects accessibility violations, and corrects them in real-time using large language model (LLM) solutions. The project involved implementing advanced prompting techniques, such as FewShot, Chain-of-Thought, and ReAct, to obtain accessibility fixes from GPT, LLAMA, and Claude via developer APIs. I also developed a mini-parser to extract HTML code from model responses. This solution achieved a 87% success rate in automatically correcting over 800 accessibility violations across multiple tested URLs.",
    website: "https://github.com/mide-dev/GPT_LLAMA_Web_Accessibility_Code",
    liveDemo: "",
    github: "https://github.com/mide-dev/GPT_LLAMA_Web_Accessibility_Code",
    images: [webac],
  },
  {
    title: "Desktop Application - Sudoku",
    technology: "Java",
    desc: "I developed a Sudoku game with a graphical user interface (GUI) using Java and JavaFX, which includes functionalities such as undo, save, clear, and load. The application was designed using a fully object-oriented approach, supported by UML diagrams and comprehensive design documentation. For quality assurance, I implemented JUnit tests for core classes and functions, and conducted manual tests for the graphical UI. Additionally, I utilized the observer pattern to efficiently track and update game state changes within the graphical interface.",
    website: "https://github.com/mide-dev/Sudoku",
    liveDemo: "",
    github: "https://github.com/mide-dev/Sudoku",
    images: [s1, s3, s4, s5],
  },
  {
    title: "InnovateX",
    technology: "PHP, Javascript, HTML, CSS, MySQL, Figma",
    desc: "I developed InnovateX, a full-stack event booking website for tech, business, and entrepreneurship events. The project features user profiles, event booking functionalities, and a complete end-to-end system. The challenge was to design and build this entirely from scratch using vanilla tools such as HTML, CSS, JavaScript, PHP, and MySQL. This project served as the final graded project for the web development module at Northumbria University. Additionally, I deployed the application on AWS EC2",
    website: "https://w22028079.nuwebspace.co.uk/KF7013/content/index.php",
    liveDemo: "",
    github: "https://github.com/mide-dev/InnovateX",
    images: [i1, i2, i3, i7, i8, i9, i10],
  },
];
