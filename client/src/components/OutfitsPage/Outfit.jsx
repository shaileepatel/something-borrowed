import React from 'react';
import styled from 'styled-components';

var Outfit = (props) => {
  return (
    <div>
      <Img src = {props.outfit.images} onClick = {() => {props.outfitDetail(props.outfit.id)}}/>
    </div>
  )
};

var Img = styled.img`
  width: 50%;
  padding: 5px;
  cursor: pointer
`;

export default Outfit;
