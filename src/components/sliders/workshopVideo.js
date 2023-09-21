import React, { useState } from "react";

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
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670499537/Cooking%20Academy%20Assets/kitchen%20videos/Mohammed_Abdulmalik_Co-Founder_of_Qatar_s_Cooking_Academy_iu0aco.mp4",
    },
    {
      id: 1,
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4",
    },
    {
      id: 2,
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062258/Cooking%20Academy%20Assets/kitchen%20videos/134089815_1602359789947238_1023671997030635485_n_nfgltl.mp4",
    },
    {
      id: 3,
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062212/Cooking%20Academy%20Assets/kitchen%20videos/86500766_2733767870036356_1147673113841980247_n_q8mq40.mp4",
    },
    {
      id: 4,
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062194/Cooking%20Academy%20Assets/kitchen%20videos/272718584_352467819775860_2029475229346567906_n_ekzcea.mp4",
    },
    {
      id: 5,
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062181/Cooking%20Academy%20Assets/kitchen%20videos/267586950_1167304190751867_7360938467903826068_n_dy8ie5.mp4",
    },
    {
      id: 6,
      value:
        "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062154/Cooking%20Academy%20Assets/kitchen%20videos/269855403_1031326227430276_7967652611108437312_n_y9tfz2.mp4",
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
