import "./WorkCardStyle.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        {/* <h1 className="project-heading">
            Projects
        </h1> */}
        <div className="project-container">
            {WorkCardData.map((value,index)=>{
                return (
                    <WorkCard 
                        key = {index}
                        imgsrc = {value.imgsrc}
                        title = {value.title}
                        view = {value.view}
                        source = {value.source}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default Work;
