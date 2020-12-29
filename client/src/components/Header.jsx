import React from 'react';
import styled from 'styled-components';

var Header = (props) => {
  return (
    <div>
      <H1><Img src = "logo.png"/></H1>
    </div>
  );
};

var H1= styled.h1`
  text-align: center
`;
var Img = styled.img`
  width: 300px
`;

export default Header;
