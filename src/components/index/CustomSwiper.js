import React, { useState } from 'react';
import Swiper from 'react-id-swiper';


  const CustomSwiper = ({children}) => {

  var slides = document.getElementsByClassName("swiper-slide");
    
    const params = {
        //containerClass: 'swiper-container d-flex',
        //wrapperClass: 'swiper-wrapper col-md-9 col-lg-8 ml-auto',
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
      <div>
        <Swiper getSwiper={updateSwiper} {...params}>
          {children}
        </Swiper>
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
    );
  };

  export default CustomSwiper;
    