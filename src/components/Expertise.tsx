import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faServer, faBolt } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    // "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Bun",
    "Express",
    "Prisma ORM",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Postman",
    "AWS S3"
];

const labelsSecond = [
    "WebSockets", 
    "TypeScript", 
    "JavaScript"
];

const labelsThird = [
    "React",
    "Tailwind",
    "Shadcn",
    "Javascript",
    "Typescript",
    "Websocket",
    "Micro VMs (E2B)",
    "CSS"
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faServer} size="3x" />
              <h3>Backend Development</h3>
              <p>
                I build backend systems using JavaScript and TypeScript with
                runtimes like Node.js and Bun. I have experience designing APIs,
                implementing application logic, and working with databases and
                cloud storage for real-world applications.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faBolt} size="3x" />
              <h3>Real-Time Applications</h3>
              <p>
                I build real-time applications using WebSockets. I have
                implemented multiplayer game logic, matchmaking, and handling
                game state updates over persistent connections.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>Full Stack Development</h3>
              <p>
                I build full-stack web applications using React and modern
                frontend tools, integrating them with backend services to
                deliver complete working products.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Expertise;