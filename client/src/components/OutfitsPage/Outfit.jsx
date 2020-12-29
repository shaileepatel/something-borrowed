import React from 'react';
import styled from 'styled-components';

var Outfit = (props) => {
  return (
    <div className = "col-4">
      <Img src = {props.outfit.images} onClick = {() => {props.outfitDetail(props.outfit.id)}}/>
    </div>
  )
};

var Img = styled.img`
  width: 100%;
  cursor: pointer
`;

export default Outfit;
