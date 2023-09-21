import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import '../../pages/home/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ServiceImg } from '../constant/data';



function SampleNextArrow({onClick}) {
    return (
      <div className='arrow2 arrow-right2' onClick={onClick}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrow2 arrow-left2' onClick={onClick}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    );
  }

function Workshopslider() {


    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
      dots: true,
      dotsClass: "slick-dots custom-indicator",
      infinite: true,
      speed: 2000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      beforeChange: (current, next)=>setSlideIndex(next),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: function(i) {
        return (
         <div>
            <img src={ServiceImg[i].image} alt='img' className='custom-pagin'/>
         </div>
        );
      },
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       dots: true,

      //     }
      //   }]
    };

  return (
    <div className='services overflow-hidden'>
        <Slider {...settings} className='w-full'>
          {
            ServiceImg.map((img, index) => (
            <div className={index === slideIndex ? 'slide2 slide2-active': 'slide2'} key={index}>
                <div className='relative zoom-card cursor-pointer' >
                <NavLink to={img.url}><img alt='img' className='xs:h-60 md:h-[400px] lg:h-[600px] w-full object-cover brightness-75'  src={img.image}/></NavLink>
                <h3 className='absolute xs:top-10 xs:left-5 md:top-24 md:left-20 xs:text-2xl md:text-4xl lg:text-6xl font-semibold'>{img.heading}</h3>
              </div>
          </div>
            ))
          }
        </Slider>
    </div>
   
  )
}

export default Workshopslider;