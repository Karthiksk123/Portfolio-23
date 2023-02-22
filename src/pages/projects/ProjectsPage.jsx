import React from "react";
import "./ProjectPage.scss";
import { ProjectShowcase } from "../../constants/constants";
import { OpenInNew, PlayArrow } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  return (
    <div className="pr-page-wrapper">
      <div className="pr-page-heading">
        <h1 className="pr-page-heading-head">PROJECTS I DONE</h1>
        <div className="pr-ps-page-wrapper">
          {ProjectShowcase.map((pr, index) => (
            <div className="pr-page-inner-wrapper">
              <div className="pr-page-left-wrap">
                <a href={pr.site} target="_blank">
                  <img className="project-image" src={pr.img} alt="" />
                </a>
              </div>
              <div className="pr-page-right-wrap">
                <h1 className="pr-page-r-head">{pr.name}</h1>
                <div className="pr-page-r-ft">
                  <h1 className="pr-page-r-head2">FEATURES : </h1>
                  <div className="pr-page-r-ft-inner">
                    {pr.feautures.map((ft) => (
                      <div className="pr-page-r-ft-i-ft">
                        <PlayArrow/>
                        <p>{ft}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pr-page-r-tech">
                  <h1 className="pr-page-r-tech-h">TECHNOLOGIES USED : </h1>
                  <div className="pr-page-r-tech-inner">
                    {pr.technologies.map((t) => (
                      <p>{t}</p>
                    ))}
                  </div>
                </div>
                <div className="pr-page-r-icons">
                  <div className="pr-page-r-i-left">
                    <a href={pr.site} target="_blank">
                      <h4>View Site</h4>
                      <OpenInNew />
                    </a>
                  </div>
                  <div className="pr-page-r-i-right">
                    <a href={pr.git} target="_blank">
                      <h4>View Code</h4>
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
