import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
//import ReactDOM from 'react-dom';
//import sliderStyles from "./slider.module.css";

  const CustomSwiper = ({children}) => {
  
  if (typeof window !== 'undefined') {
  var slides = document.getElementsByClassName("swiper-slide");
}
    const params = {
        //containerClass: 'swiper-container d-flex',
        //wrapperClass: 'swiper-wrapper col-md-9 col-lg-8 ml-auto',
        lazy: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            for(var i = 0; i < slides.length; i++){
                if(i === index){
            return '<div class="' + className + '">' + (slides[index].dataset.name)+ 
 '</div>';
 }
 }
        },
      }
      
      
    }
    
    const [swiper, updateSwiper] = useState(null);
    
    const goNext = () => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    };

    const goPrev = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };

    return (
      <>
        <Swiper getSwiper={updateSwiper} {...params}>
          {children}
        </Swiper>
        <div className="prev-next-wrap text-right" style={{marginTop:`10px`}}>
            <button onClick={goPrev} className="btn btn-light rounded-circle border border-secondary" style={{width:`48px`, height:`48px`, marginRight:`20px`}}>&lt;</button>
            <button onClick={goNext} className="btn btn-light rounded-circle border border-secondary" style={{width:`48px`, height:`48px`}}>&gt;</button>
        </div>
      </>
    );
  };

  export default CustomSwiper;
    