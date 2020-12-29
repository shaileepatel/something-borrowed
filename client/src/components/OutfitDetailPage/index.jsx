import React from 'react';
import styled from 'styled-components';


var OutfitDetailPage = (props) => {
  console.log(props);
  return (
    <div>
      {props.outfitInfo.images.map((image, index) =>
        <Img src = {image} key = {index}/>
      )}
    </div>
  )
};

var Img = styled.img`
  width: 80%;
`

export default OutfitDetailPage;