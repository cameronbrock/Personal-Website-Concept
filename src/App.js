import React, { useState, useEffect } from 'react';

// Assets:
import logo from './logo.svg';
import './App.css';

// Libraries:
import Aos from 'aos';
import 'aos/dist/aos.css';

// Components:
import Background from './comps/Background.js';
import Blurb from './comps/blurb/Blurb.js';
import AboutMe from './comps/about_me/AboutMe.js';
import ContactInfo from './comps/contact_info/ContactInfo.js';

// Style sheets:
import './AboutMe.css';
import './ContactPage.css';

var ResizeListener = () => {

  const [dims, setDims] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDims([window.innerWidth, window.innerHeight]);
    });
  }, []);
}


var ScrollListener = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY == window.innerHeight) {
        document.getElementById("sec2").classList.remove("invisible");
        //document.getElementByClassName("about_me_header").classList.remove("invisible");
        //document.getElementByClassName("about_me_header").classList.add("about_me_header");
      }
      console.log('ScrollY = ' + window.scrollY);
    });
  }, []);
}


export default function App() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      /*mirror: true,*/
    });
  });

  ResizeListener();
  ScrollListener();

  return (
    <React.Fragment>
      <Background />
      <div id="sec1" style={{ height: window.innerHeight, }}>
        <Blurb width={ window.innerWidth } height={ window.innerHeight } />
      </div>
      <div id="sec2" style={{ height: window.innerHeight, }}>
        <AboutMe displayInfo={ window.scrollY + .5*window.innerHeight > window.innerHeight }/>
      </div>
      <div id="sec3" style={{ height: window.innerHeight, }}>
        <br />
        <ContactInfo displayInfo={ (window.scrollY + .5*window.innerHeight >= 2*window.innerHeight) ? true : false } />
      </div>
    </React.Fragment>
  );
}

/*
function App() {
  return (
    <div>
      <div className="scrollsnap"></div>
      <Background />
        <div className="scrollsnap">
        <br />
        <div className="scrollsnap-section">
          <Blurb />
        </div>
        <div className="scrollsnap-section">
        <h1>B.S. Computer Science, Texas A&M University</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <div className="scrollsnap-section">
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        </div>
        </div>
      </div>
    </div>
  );
}
*/
//export default App;

