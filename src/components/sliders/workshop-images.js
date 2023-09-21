import React,{useState} from 'react';
import '../../pages/home/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {WorkshopImg} from '../constant/data'

let Ar1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674555430/Cooking%20Academy%20Assets/Frame_575_hfegrk.png';
let Ar2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674555430/Cooking%20Academy%20Assets/Frame_572_gkphtz.png';

function SampleNextArrow({onClick}) {
    return (
      <div className='arrow3 arrow-right3' onClick={onClick}>
        {/* <i class="fa-solid fa-arrow-right"></i> */}
        <img src={Ar2} alt='arrow'/>
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrow3 arrow-left3' onClick={onClick}>
        {/* <i class="fa-solid fa-arrow-left"></i> */}
        <img src={Ar1} alt='arrow'/>
      </div>
    );
  }



function Instaslider() {

    const [slideIndex, setSlideIndex] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setSlideIndex(next),
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
              dots:false
            }
          }
        ]
      };
  return (
    <div className='work-img relative sm:pb-14 sm:pt-10 md:pt-5 md:pb-24'>
        <Slider {...settings} className='xs:w-full md:w-[70%] mx-auto'>
            {
                WorkshopImg.map((item,index) => (
                    <div className={index === slideIndex ? 'slide3 slide3-active': 'slide3'} key={index}>
                        <img className='xs:h-60 xs:w-48 md:w-fit md:h-96 object-cover xs:p-1 md:p-2 card-slide' src={item.image} />
                    </div>
                ))
            }
           
        </Slider>
    </div>
  )
}

export default Instaslider;