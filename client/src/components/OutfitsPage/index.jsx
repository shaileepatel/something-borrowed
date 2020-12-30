import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit.jsx';
import Filter from './Filter.jsx';

var OutfitsPage = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <Filter selectFilter = {props.selectFilter}/>
          <Button className="mt-2">
            <Svg onClick = {props.goBackFromOutfits} viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></Svg>
          </Button>
        </div>
        <div className="col-9">
          <div className="row">
            {props.allOutfits.map((outfit, index) =>
              <Outfit outfit = {outfit} outfitDetail = {props.outfitDetail} key = {index}/>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

var Svg = styled.svg`
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
`
var Button = styled.button`
  & {
    border-radius: 50%;
    padding: 8px;
    border: none;
    background: none;
    outline:none;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(34, 34, 34, 0.04);
  }
`;

export default OutfitsPage;