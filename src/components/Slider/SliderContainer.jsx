import React, { useState } from "react";
import Slider from "react-slick";
import "./SliderContainer.scss";
import SliderCard from "./SliderCard/SliderCard";
import ImgBooki from "../../assets/images/Booki_image.png"


const cardList = [
  { title: "Projet Booki", src: ImgBooki, alt: "image du projet booki"},
  { title: "Card 2", src: ImgBooki, alt: "image du projet booki"},
  { title: "Card 3", src: ImgBooki, alt: "image du projet booki"},
  { title: "Card 4", src: ImgBooki, alt: "image du projet booki"},
  { title: "Card 5", src: ImgBooki, alt: "image du projet booki"},
  { title: "Card 6", src: ImgBooki, alt: "image du projet booki"},
  { title: "Card 7", src: ImgBooki, alt: "image du projet booki"},
];

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
          <SliderCard title={card.title} src={card.src} desc={card.desc} />
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default SliderContainer;
