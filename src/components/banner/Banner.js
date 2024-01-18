import React from 'react';

import './_banner.scss';

function Banner({ image, text }) {
    return (
      <div className="banner">
        <img className="banner_image" src={image} alt="Bannière" />
        <div className="banner_dark"></div>
        <span className="banner_text">{text}</span>
      </div>
    );
}
  
export default Banner;