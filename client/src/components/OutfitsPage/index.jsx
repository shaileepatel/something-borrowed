import React from 'react';
import styled from 'styled-components';

var OutfitsPage = (props) => {
  return (
    <div>
      <button onClick = {props.goBackFromOutfits}>Go Back!</button>
      {props.allOutfits.map((outfit, index) =>
        <Img src = {outfit.images} onClick = {() => {props.outfitDetail(outfit.id)}} key = {index}/>
      )}
    </div>
  )
};

var Img = styled.img`
  width: 50%;
  padding: 5px;
  cursor: pointer
`;

export default OutfitsPage;