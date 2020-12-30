import React from 'react';
import styled from 'styled-components';

var Outfit = (props) => {
  return (
    <div className = "col-4 p-2">
      <Img src = {props.outfit.images} onClick = {() => {props.outfitDetail(props.outfit.id)}}/>
      <div>{props.outfit.name}</div>
      <div>${props.outfit.price}</div>
    </div>
  )
};

var Img = styled.img`
  width: 100%;
  cursor: pointer
`;

export default Outfit;
