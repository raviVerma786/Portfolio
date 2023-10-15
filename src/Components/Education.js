import "./EducationStyle.css"
import React from 'react'

const Education = () => {
  return (
    <div className="educationContainer">
        <h1 >EDUCATION</h1>
        <div className="educationContent">
            <div className="btech">
                <h2>Graduation</h2>
                 <p>I'm a final year B.Tech student with Information Technology stream in <strong>Harcourt Butler Technical University, Kanpur</strong>. My overall CGPA is <strong>8.5</strong> till 6th semester.</p>
            </div>
            <div className="intermediate">
                <h2>Intermediate</h2>
                <p>I have completed my intermediate from <strong>Govt. Jubilee Inter College, Gorakhpur </strong>and scored <strong>85.4% </strong>aggregate percentage.</p>
            </div>
            <div className="highschool">
                <h2>Highschool</h2>
                <p>I have comleted my highschool from <strong>Shri Shiv Shankar Singh Public Higher Secondary School, Maharajganj </strong>and scored <strong>91.2% </strong>aggregate percentage.</p>
            </div>
        </div>
    </div>
  )
}

export default Education
