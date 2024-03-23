import React,{useState} from 'react';
import '../../pages/home/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {InstaData} from '../constant/data'
import {Instacase} from '../../Assets'




function Instaslider() {

    const [slideIndex, setSlideIndex] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setSlideIndex(next),
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='insta relative xs:mt-32 md:mt-52 lg:mt-44'>
        <div className=' instta'>
            <img className='xs:h-[300px] md:h-[600px] lg:h-[480px] ' src={Instacase} />
        </div>
        <Slider {...settings} className=' '>
            {
                InstaData.map((item,index) => (
                    <div className={index === slideIndex ? 'slide3 slide3-active': 'slide3'} key={index}>
                        <img className='xs:h-36 md:h-72 lg:h-56 w-full object-cover' src={item.image} />
                    </div>
                ))
            }
           
        </Slider>
    </div>
  )
}

export default Instaslider;