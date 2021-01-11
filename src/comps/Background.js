import React from 'react';
import './Background.css';

function Background(props) {
  return (
    <div id="bkg_1">
      <div id="bkg_2">
        <div id="bkg_contents">
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default Background;

