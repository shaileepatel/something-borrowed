import React from 'react';
import styled from 'styled-components';

var Filter = (props) => {
  return (
    <div>
      <div className="h5">Filter</div>
      <div>
        <div className="font-weight-bold">Size</div>
        <div><input type="radio" name="size" value="xs"/> XS</div>
        <div><input type="radio" name="size" value="s"/> S</div>
        <div><input type="radio" name="size" value="m"/> M</div>
        <div><input type="radio" name="size" value="l"/> L</div>
        <div><input type="radio" name="size" value="xl"/> XL</div>
        <div><input type="radio" name="size" value="xxl"/> XXL</div>
      </div>
      <div className="mt-2">
        <div className="font-weight-bold">Type</div>
        <div><input type="radio" name="type" value="dress"/> Dress</div>
        <div><input type="radio" name="type" value="lengha"/> Lengha</div>
        <div><input type="radio" name="type" value="saree"/> Saree</div>
        <div><input type="radio" name="type" value="gown"/> Gown</div>
        <div><input type="radio" name="type" value="bridesmaid"/> Bridesmaid</div>
      </div>
      <div className="mt-2">
        <div className="font-weight-bold">Price</div>
        <Input type="number" placeholder ="$ Min" className="form-control form-control-sm mr-1"/>
        <Input type="number" placeholder ="$ Max" className="form-control form-control-sm mr-1"/>
        <button className="btn btn-secondary btn-sm">Go</button>
      </div>
    </div>
  )
};

var Input = styled.input`
  width: 60px;
  display: inline;
`

export default Filter;
