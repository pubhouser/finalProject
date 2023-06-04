import React, { useState } from 'react';
import style from './Ads.module.css';

//Раскомментировать закомментированное для добавления кнопок слайдера

// import leftArrow from "./../../images/left-arrow.png";
// import rightArrow from "./../../images/right-arrow.png";

import banner1 from './../../images/banner_1.jpg';
import banner2 from './../../images/banner_2.jpg';
import banner3 from './../../images/banner_3.jpg';

function Ads() {
  const slideImages = [
    {
      id: 1,
      image: banner1,
      text: 'Achieve your goal',
    },
    {
      id: 2,
      image: banner2,
      text: 'Adjust on your own',
    },
    {
      id: 3,
      image: banner3,
      text: 'Feel yourself free',
    },
  ];

  const [slideItem, setSlideItem] = useState(1);

  const nextSlide = () => {
    if (slideItem !== slideImages.length) {
      setSlideItem(slideItem + 1);
    } else if (slideItem === slideImages.length) {
      setSlideItem(1);
    }
  };

  //Закомментировать setTimeout при добавлении кнопок слайдера

  setTimeout(nextSlide, 4000);

  // const prevSlide = () => {
  //   if (slideItem !== 1) {
  //     setSlideItem(slideItem - 1);
  //   } else if (slideItem === 1) {
  //     setSlideItem(slideImages.length);
  //   }
  // };

  const moveDot = (index) => {
    setSlideItem(index);
  };

  // function BtnSlider({ direction, moveSlide }) {
  //   const btnSlideNext = style.btn__slide + " " + style.next;
  //   const btnSlidePrev = style.btn__slide + " " + style.prev;

  //   return (
  //     <button onClick={moveSlide} className={direction === style.next ? btnSlideNext : btnSlidePrev}>
  //       <img src={direction === style.next ? rightArrow : leftArrow} alt="arrow"/>
  //     </button>
  //   );
  // }

  const dotActive = style.dot + ' ' + style.active;
  const slideActiveAnim = style.slide + ' ' + style.active__anim;

  return (
    <div className={style.container__slider}>
      {slideImages.map((obj, index) => {
        return (
          <div
            key={`${obj}_${index}`}
            className={slideItem === index + 1 ? slideActiveAnim : style.slide}
            style={{ backgroundImage: `url(${obj.image})` }}>
            <p>{obj.text}</p>
          </div>
        );
      })}

      {/* <BtnSlider moveSlide={prevSlide} direction={style.prev} />
      <BtnSlider moveSlide={nextSlide} direction={style.next} /> */}

      <div className={style.container__dots}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={`${item}_${index}`}
            onClick={() => moveDot(index + 1)}
            className={slideItem === index + 1 ? dotActive : style.dot}></div>
        ))}
      </div>
    </div>
  );
}

export default Ads;
