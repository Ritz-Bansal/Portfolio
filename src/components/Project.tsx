import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from "../assets/images/mock10.png"
import mock11 from "../assets/images/mock11.png";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://matrix-http-server.vercel.app/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://matrix-http-server.vercel.app/" target="_blank" rel="noreferrer"><h2>MATRIX</h2></a>
                <p>
                    Developed Matrix, a real-time multiplayer gaming platform featuring rank-based matchmaking, 
                    cross-league pairing, and ELO-based rating updates. Built with WebSockets,
                    supporting multiple games with streak tracking and a monorepo architecture.
                </p>
            </div>
            <div className="project">
                <a href="https://google-drive-mu-lemon.vercel.app" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://google-drive-mu-lemon.vercel.app" target="_blank" rel="noreferrer"><h2>STASH</h2></a>
                <p>
                    Developed STASH, a cloud storage platform with secure direct-to-S3 uploads and optimized file sharing.
                    Reduced backend load via presigned upload URLs and designed a materialized permission system for efficient
                    file sharing across users.
                </p>
            </div>
            <div className="project">
                <a href="https://connect-4-alpha-three.vercel.app" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://connect-4-alpha-three.vercel.app" target="_blank" rel="noreferrer"><h2>CONNECT 4</h2></a>
                <p>Built a real-time Connect 4 game for two players using WebSockets, implemented core game logic and win detection logic.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;