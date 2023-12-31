import React, { useState } from "react";
import Slider from "react-slick";
import "./SliderContainer.scss";
import { cardList } from "./projetsData.js";
import CustomModal from "./CustomModal";
import PropTypes from "prop-types";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick} onKeyDown={null}></div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick} onKeyDown={null}></div>
  );
};

function SliderContainer() {
  const [cardIdx, setCardIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const mediumScreen = window.matchMedia('(max-width: 1024px)');

  const settings = {
    infinite: true,
    lazyLoad: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIdx(next),
  };

  if (mediumScreen.matches){
    settings.slidesToShow=1;
  }

  const bulletPoints = cardList.map((card, index) => (
    <div
      key={index}
      className={index === cardIdx ? "bullet active" : "bullet"}
    ></div>
  ));

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardList.map((card, index) => (
          <div
            className={index === cardIdx ? "slide activeSlide" : "slide"}
            key={index}
            onClick={() => {
              if (index === cardIdx) {
                openModal(); // Ouvre la modale uniquement si la slide est active
              }
            }}
            onKeyDown={null}
          >
            <img src={card.src} alt={card.alt} />
          </div>
        ))}
      </Slider>
      <div className="bullet-container">{bulletPoints}</div>
      <CustomModal isOpen={isOpen} closeModal={closeModal} cardData={cardList[cardIdx]} />
    </div>
  );
}

NextArrow.propTypes = {
  onClick: PropTypes.any,
};

PrevArrow.propTypes = {
  onClick: PropTypes.any,
};

export default SliderContainer;
