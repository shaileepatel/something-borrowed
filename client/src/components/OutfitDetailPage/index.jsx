import React from 'react';
import styled from 'styled-components';


var OutfitDetailPage = (props) => {
  return (
    <div>
      <div>
        <button onClick = {props.goBackFromOutfitDetail} className="btn btn-info btn-sm">Go Back!</button>
      </div>
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