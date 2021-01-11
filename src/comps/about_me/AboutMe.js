
import React from 'react';
import './AboutMe.css';

export default function AboutMe({ displayInfo }) {
  if (displayInfo) {
    return (
      <React.Fragment>
        <div id="about_me_header">About Me</div>
        <div id="about_me_desc">Browser width at {window.innerWidth}, browser height at {window.innerHeight}. College senior working towards a BS in Computer Science at Texas A&M University, College Station. Aiming to further develop my knowledge in the field of web development. Skills include proficiency in HTML, Javascript, and CSS, as well as web frameworks such as Express.Js, Ruby on Rails, and ASP.NET. Other skills include C/C++, Python, Java, as well as Microsoft Office. Experience includes being a founding member, as well as the Chief Student Leader and Treasurer, of Texas A&M University student organization "Aggies on the Spectrum."</div>
      </React.Fragment>
    );
  }
  else {
    return (<div></div>);
  }
}

