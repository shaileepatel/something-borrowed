import React from 'react';
import styled from 'styled-components';

var NavBar = (props) => {
  return (
    <div>
      <div className ="text-center mt-4">
        <H6 className = "m-2">Dress</H6>
        <H6 className = "m-2">Lengha</H6>
        <H6 className = "m-2">Saree</H6>
        <H6 className = "m-2">Gown</H6>
        <H6 className = "m-2">Bridesmaid</H6>
        <H6 className = "m-2">Trends</H6>
        <H6 className = "m-2">Sale</H6>
        <H6 className = "m-2">About</H6>
      </div>
    </div>
  );
};

var H6 = styled.h6`
& {
  background: none;
  padding: 10px;
  display: inline;
}
&:hover {
  cursor: pointer;
  background-color: #7ae8e766;
}
`

export default NavBar;
