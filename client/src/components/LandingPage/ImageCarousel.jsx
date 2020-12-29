import React from 'react';

var ImageCarousel = (props) => {
  return (
    <div>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1"
              tabIndex="0"
              className="carousel__slide">
            <img className ="img_details" src = "https://us.anitadongre.com/media/homepage_content/l/o/love_songs_desktop.jpg.mst.webp"/>
            <div className="carousel__snapper" onClick = {props.onImgClick}>
              <a href="#carousel__slide4"
                className="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2"
                className="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2"
              tabIndex="0"
              className="carousel__slide">
            <img className ="img_details" src = "https://us.anitadongre.com/media/homepage_content/r/t/rtw-web.jpg.mst.webp"/>
            <div className="carousel__snapper" onClick = {props.onImgClick}></div>
            <a href="#carousel__slide1"
              className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              className="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3"
              tabIndex="0"
              className="carousel__slide">
            <img className ="img_details" src = "https://us.anitadongre.com/media/homepage_content/s/h/sherwani-web.jpg.mst.webp"/>
            <div className="carousel__snapper" onClick = {props.onImgClick}></div>
            <a href="#carousel__slide2"
              className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              className="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4"
              tabIndex="0"
              className="carousel__slide">
            <img className ="img_details" src = "https://us.anitadongre.com/media/homepage_content/a/d/ad-silver-web-banner.jpg.mst.webp"/>
            <div className="carousel__snapper" onClick = {props.onImgClick}></div>
            <a href="#carousel__slide3"
              className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1"
              className="carousel__next">Go to first slide</a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a href="#carousel__slide1"
                className="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide2"
                className="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide3"
                className="carousel__navigation-button">Go to slide 3</a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide4"
                className="carousel__navigation-button">Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>
    </div>
  );
};

export default ImageCarousel;