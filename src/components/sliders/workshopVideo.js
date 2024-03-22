import React, { useState } from "react";
import {ckv1,ckv2,ckv3,ckv4,ckv5,ckv6} from '../../Assets'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow7 arrow-right7" onClick={onClick}>
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow7 arrow-left7" onClick={onClick}>
      <i class="fa-solid fa-arrow-left"></i>
    </div>
  );
}

function WorkshopVideo() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: true,
    initialSlide: 0,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [

        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
  };

  const Vids = [
    {
      id: 0,
      value:ckv6,
    },
    {
      id: 1,
      value:ckv5,
    },
    {
      id: 2,
      value:ckv4,
    },
    {
      id: 3,
      value:ckv3,
    },
    {
      id: 4,
      value:ckv2,
    },
    {
      id: 5,
      value:ckv1,
    },

  ];
  const [wordData, setWordData] = useState(Vids[0]);
  const handleClick = (index) => {
    const wordSlider = Vids[index];
    setWordData(wordSlider);
  };
  return (
    <>
      <div className="w-[100%] py-10 flex flex-col justify-center items-center shop">
        <video 
          className="w-[100vw] rounded-3xl"
          src={wordData.value}
          controls
          autoPlay
          loop 
          muted
          controlsList="nodownload"
        ></video>

        <div className="flex justify-center items-center pt-16">
          <Slider {...settings} className="xs:w-[100vw] md:w-[80vw] lg:w-[1000px]">
            {Vids.map((data, i) => (
              <div
                className={i === slideIndex ? "slide7 slide7-active" : "slide7"}
                key={i}
              >
                <video
                muted
                autoPlay
                  className={
                    wordData.id == i
                      ? "h-fit opacity-100 rounded-3xl cursor-pointer border-2 border-primary-clr2"
                      : "h-fit opacity-80 rounded-3xl  cursor-pointer "
                  }
                  src={data.value}
                  onClick={() => handleClick(i)}
                ></video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default WorkshopVideo;
