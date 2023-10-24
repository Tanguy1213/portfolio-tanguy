import React, { useState } from "react";
import Slider from "react-slick";
import "./SliderContainer.scss";
import SliderCard from "./SliderCard/SliderCard";
import cardList from "./projetsData.json"

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <i className="fas fa-arrow-circle-right"></i>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <i className="fas fa-arrow-circle-left"></i>
    </div>
  );
};

function SliderContainer() {
  const [cardIdx, setCardIdx] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIdx(next)
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {cardList.map((card, index) => (
        <div className={index === cardIdx ? "slide activeSlide" : "slide"} key={index}>
          <SliderCard title={card.title} src={card.src} alt={card.alt} />
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default SliderContainer;