import React from 'react';
import styled from 'styled-components';

var Header = (props) => {
  return (
    <div className = "mt-3 text-center">
      <Img src = "logo.png" onClick = {props.goToLandingPage}/>
    </div>
  );
};

var Img = styled.img`
  width: 400px;
  cursor: pointer;
`;

export default Header;
