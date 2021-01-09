import React from 'react';
import styled from 'styled-components';

var ImageCarousel = (props) => {
  return (
    <ImageCarouselDiv className = "mt-5">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="image_carousel1.jpg" onClick = {(e) => props.onImgClick(e, 'gown')}/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://us.anitadongre.com/media/homepage_content/r/t/rtw-web.jpg.mst.webp" onClick = {(e) => props.onImgClick(e, 'dress')}/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://us.anitadongre.com/media/homepage_content/s/h/sherwani-web.jpg.mst.webp" onClick = {(e) => props.onImgClick(e, 'bridesmaid')}/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://us.anitadongre.com/media/homepage_content/a/d/ad-silver-web-banner.jpg.mst.webp" onClick = {(e) => props.onImgClick(e, 'saree')}/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </ImageCarouselDiv>
  );
};

var ImageCarouselDiv =  styled.div`
  max-width: 70%;
  margin: auto;
  cursor: pointer;
`
export default ImageCarousel;