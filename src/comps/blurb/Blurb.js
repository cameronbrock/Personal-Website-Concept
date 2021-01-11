import React from 'react';
import './Blurb.css';
import Headshot from './headshot.jpg';

export default function Blurb({ width, height }) {

  // Number of pixels that the width must get down to for certain visual
  // features to change.
  const transition_width = 600;

  const img_dimension_coeff = 0.3;
  const name_fontsize = 60;
  const desc_fontsize = 30;
  return (
    <div id="blurb">
      <img id="headshot" src={ Headshot } style={{ 
        width: Math.min(270, img_dimension_coeff*width, img_dimension_coeff*height),
        marginTop: (width > transition_width) ? 120 : 80,
      }} />
      <h1 id="blurb_name" style={{ 
        fontSize: (width > transition_width) ? name_fontsize : .7*name_fontsize,
      }}>Cameron Brock</h1>
      <h3 id="blurb_desc" style={{ 
        fontSize: (width > transition_width) ? desc_fontsize : .7*desc_fontsize,
      }}>Detail-oriented back-end and front-end developer.</h3>
      <div id="read_more">
        <div id="read_more_text">Read More</div>
        <div id="read_more_arrow"></div>
      </div>
    </div>
  );
}

