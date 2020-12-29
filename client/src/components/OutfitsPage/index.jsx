import React from 'react';
import styled from 'styled-components';

var OutfitsPage = (props) => {
  return (
    <div>
      {props.allOutfits.map((outfit, key) =>
        <Img src = {outfit.images}/>
      )}
    </div>
  )
};

var Img = styled.img`
  width: 50%;
  padding: 5px;
`;

export default OutfitsPage;