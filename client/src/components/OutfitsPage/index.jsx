import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit.jsx';

var OutfitsPage = (props) => {
  return (
    <Div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <button onClick = {props.goBackFromOutfits} className="btn btn-info btn-sm">Go Back!</button>
        </div>
        <div className="col-9">
          <div className="row">
            {props.allOutfits.map((outfit, index) =>
              <Outfit outfit = {outfit} outfitDetail = {props.outfitDetail} key = {index}/>
            )}
          </div>
        </div>
      </div>
    </Div>
  )
};

var Div = styled.div`
  border: solid black 1px;
`

export default OutfitsPage;