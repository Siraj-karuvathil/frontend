import React,{useState} from 'react';
import '../../pages/kitchenStudio/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { KitchenImg } from '../constant/data';




function SampleNextArrow({onClick}) {
    return (
      <div className='arrow5 arrow-right5' onClick={onClick}>
        <i class="fa-solid fa-angle-right"></i>
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrow5 arrow-left5' onClick={onClick}>
        <i class="fa-solid fa-angle-left"></i>
      </div>
    );
  }


function Kitchenslider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
      dots: true,
      dotsClass: "slick-dots custom-indicator2",
      infinite: true,
      speed: 2000,
      arrows:true,
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
            <img src={KitchenImg[i].image} alt='img' className='custom-pagin2'/>
         </div>
        );
      },

    };

  return (
    <div className='kitchen pb-20'>
        <Slider {...settings} className='md:w-[75%] mx-auto'>
          {
            KitchenImg.map((img, index) => (
            <div className={index === slideIndex ? 'slide5 slide5-active': 'slide5'} key={index}>

                <img alt='img' loading='lazy' className='xs:h-[250px] md:h-[300px] lg:h-[600px] w-full object-cover rounded-3xl'  src={img.image}/>

              </div>

            ))
          }
        </Slider>
    </div>
  )
}

export default Kitchenslider;