import React from 'react';
import './ContactInfo.css';
import Pointer from '../../images/pointer.svg';
import Phone from '../../images/bxs-phone-call';

function open_link(url) {
  window.open(url, "_blank");
}

export default function ContactInfo({ displayInfo }) {
    const social_media_width = 860;
    const contact_info_width = 860;
    const collapse_limit = 880;
    return (
      <React.Fragment>
        <div 
          id="contact_info_header"
          style={{ fontSize: (window.innerWidth < 600) ? 40 : 50 }}
        >Contact Information</div>
        <br />
        {/*<div>Phone: 254-485-8491</div>*/}
        <div id="contact_info" style={{
          width: contact_info_width,
          marginLeft: (window.innerWidth - contact_info_width) / 2,
        }}>
          <div id="phone_number" style={{
            marginLeft: (window.innerWidth < collapse_limit) ? 150 : 0,
          }} ></div>
        </div>
        <div
          id="social_media_header"
          style={{ fontSize: (window.innerWidth < 600) ? 40 : 50 }}
        >Online Profiles</div>
        <div id="social_media" style={{ 
          width: social_media_width,
          marginLeft: (window.innerWidth - social_media_width) / 2,
        }}>
        <div id="github_link" className="sm_link" onClick={ () => open_link("https://github.com/cameronbrock") } style={{
            marginLeft: (window.innerWidth < collapse_limit) ? 150 : 0,
          }} >
          <div className="sm_link_overlay">
            <img className="sm_logo" src={ Pointer } />
          </div>
          <div className="sm_text">My GitHub profile</div>
        </div>
        <div id="linkedin_link" className="sm_link" onClick={ () => open_link("https://www.linkedin.com/in/cameron-brock-8b77b215b/") } style={{
          marginLeft: (window.innerWidth < collapse_limit) ? 150 : 500,
          marginTop: (window.innerWidth < collapse_limit) ? 150 : 0,
        }}>
          <div className="sm_link_overlay">
            <img className="sm_logo" src={ Pointer } />
          </div>
          <div className="sm_text">My LinkedIn profile</div>
        </div>
        </div>
      </React.Fragment>
  );
}

