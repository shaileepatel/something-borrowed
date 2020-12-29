import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit.jsx';

var OutfitsPage = (props) => {
  return (
    <div>
      <button onClick = {props.goBackFromOutfits}>Go Back!</button>
      {props.allOutfits.map((outfit, index) =>
        <Outfit outfit = {outfit} outfitDetail = {props.outfitDetail} key = {index}/>
      )}
    </div>
  )
};

export default OutfitsPage;