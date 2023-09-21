import React,{useState} from 'react'
import '../../pages/cookingClassInside/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Testimonial} from '../constant/data'


function SampleNextArrow({onClick}) {
return (
    <div className='arrow6 arrow-right6' onClick={onClick}>
    <i class="fa-solid fa-angle-right"></i>
    </div>
);
}

function SamplePrevArrow({onClick}) {
return (
    <div className='arrow6 arrow-left6' onClick={onClick}>
    <i class="fa-solid fa-angle-left"></i>
    </div>
);
}

function CookingInnerSlide() {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        dots: false,
        arrows:true,
        speed:2000,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        beforeChange: (current, next)=>setSlideIndex(next),
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                vertical: false,
                verticalSwiping: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            }
          ]
        
        }
    
return (
<>
    <div className='cookingTestimonial xs:py-20 md:py-0'>
        <Slider {...settings} className='md:w-10/12 mx-auto md:border-r-[40px] border-double border-primary-clr2 overflow-hidden'>
        {
        Testimonial.map((item,index) => (
            <div className={index === slideIndex ? '!grid md:grid-cols-3  testi-slide testi-slide-active ': 'testi-slide !grid md:grid-cols-3 gap-0'}  key={index}>
                <div className='grid place-items-center'>
                    <img className='' src={item.image} />
                    <h4 className='text-center auto-hide'>{item.name}</h4>
                    <p className='text-center auto-hide'>{item.Desng}</p>
                </div>
                <div className='md:col-span-2 md:w-[70%] grid place-items-center text-xl relative'>
                    <i class="absolute xs:text-sm md:text-2xl xs:left-0 md:-left-10 xs:-top-5 md:top-0 fa-solid fa-quote-left auto-hide"></i>
                    <i class="absolute xs:text-sm md:text-2xl right-0 xs:-bottom-5 lg:bottom-0 fa-solid fa-quote-left auto-hide"></i>
                    <p className='auto-hide sm:text-xs md:text-lg xs:pt-3 md:pt-0 xs:text-center md:text-start'>{item.desc}</p>
                </div>
            </div>
           ))
        }
            
        </Slider>
    </div>

</>
)
}

export default CookingInnerSlide;