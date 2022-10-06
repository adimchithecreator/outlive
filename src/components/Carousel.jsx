import React from 'react';
import sag from './images/sag.jpeg'
import bret from './images/bret.jpeg'
import gig from './images/gig.jpeg'
import red from './images/red.jpeg'
import whirl from './images/whirl.jpeg'
import imust from './images/imust.jpeg'
import Slider from "react-slick";
import './styles/Carousel.css'

export default function Carousel() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
  autoplaySpeed: 1500,
        slidesToScroll: 1,
       arrows:false
      };

      return (
        <div className=''>
        <Slider {...settings} className="">
        
          <div>
            <img src={whirl} className='' alt="purple, green and blue round logo" />
          </div>
          <div>
            <img src={sag} alt="green and blue glass bottle" />
          </div>
          <div >
            <img src={red} alt="blue and yellow light digital wallpaper" />
          </div>
          <div className='psy ' >
            <img src={gig} alt="psychedelic art" className='' />
          </div>
          <div>
            <img src={imust} alt="Hippie painting" />
          </div>
          <div className=' '>
            <img src={bret} alt="" />
            
          </div>
          
        </Slider>
        </div>
      );
    }
    
