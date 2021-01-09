import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import styled from 'styled-components';

var LandingPage = (props) => {
  return (
    <div>
      <ImageCarousel onImgClick = {props.onImgClick}/>
      <div className = "mt-5 text-center">
        <Img src = "lp1.png"/>
      </div>
    </div>
  )
};

var Img = styled.img`
  width: 70%;
`;

export default LandingPage;