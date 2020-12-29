import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';

var LandingPage = (props) => {
  return (
    <div>
      <ImageCarousel onImgClick = {props.onImgClick}/>
    </div>
  )
};

export default LandingPage;