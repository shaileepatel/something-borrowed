import React from 'react';
import styled from 'styled-components';

var OutfitsPage = (props) => {
  return (
    <div>
      {props.allOutfits.map((outfit, index) =>
        <Img src = {outfit.images} onClick = {() => {props.outfitDetail(outfit.id)}} key = {index}/>
      )}
    </div>
  )
};

var Img = styled.img`
  width: 50%;
  padding: 5px;
`;

export default OutfitsPage;