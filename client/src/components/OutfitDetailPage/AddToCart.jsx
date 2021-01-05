import React from 'react';
import styled from 'styled-components';

var AddToCart = (props) => {
  return (
    <div>
      <button className={props.outfitInfo.availability ? "btn btn-dark" : "btn btn-secondary"} data-toggle="modal" data-target="#addToBagModal">
        {props.outfitInfo.availability ? "Add To Cart" : "Sold Out"}
      </button>
      {props.outfitInfo.availability ?
        <div className="modal fade" id="addToBagModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <Div className="modal-content">
              <div className="modal-header">
                <H6 className="modal-title" id="exampleModalLongTitle">You added {props.outfitInfo.name} to your shopping cart</H6>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </Div>
          </div>
        </div>
      : null}
    </div>
  )
}

var Div = styled.div`
  background-color: #8eefe6;
`

var H6 = styled.div`
  color: black;
`

export default AddToCart;
