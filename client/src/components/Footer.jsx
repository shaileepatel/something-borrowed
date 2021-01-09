import React from 'react';
import styled from 'styled-components';

var Footer = (props) => {
  return (
    <div className = "mt-5 text-center">
      <Img src = "footer.png"/>
    </div>
  );
};

var Img = styled.img`
  width: 70%
`;

export default Footer;
