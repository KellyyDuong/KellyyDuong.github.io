import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
    render() {
        const projects = {
            "TRANSAXN": {
                desc:
                    "A distributed ledger that makes it easy to record transactions for small businesses.",
                techStack: "React.js, HTML / SCSS, Node.js",
                link: "https://github.com/DylanTse/supply-chain"
            },
            "Tic-Tac-Toe": {
                desc:
                    "Two-player tic-tac-toe game built using Python",
                    techStack: "Python",
                    link: "httpsL//github.com/KellyyDuong"
            }
        };

        return (
            <div id="projects">
              <div className="section-header ">
                <span className="section-title">/ software-creations</span>
              </div>
              <div className="project-container">
                <ul className="projects-grid">
                  {Object.keys(projects).map((key, i) => (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li className="projects-card">
                        <div className="card-header">
                          <div className="folder-icon">
                            <FolderOpenIcon
                              style={{ fontSize: 35 }}
                            ></FolderOpenIcon>
                          </div>
                          <ExternalLinks
                            githubLink={projects[key]["link"]}
                            openLink={projects[key]["open"]}
                          ></ExternalLinks>
                        </div>
      
                        <div className="card-title">{key}</div>
                        <div className="card-desc">{projects[key]["desc"]}</div>
                        <div className="card-tech">{projects[key]["techStack"]}</div>
                      </li>
                    </FadeInSection>
                  ))}
                </ul>
              </div>
            </div>
          );
        }
      }

      export default Projects;