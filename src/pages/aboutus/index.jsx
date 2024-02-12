import React from 'react';
import {useTranslation} from 'react-i18next'
import './style.css';
import LSA from "../../components/LatYearAchive"
import MOC from "../../components/MeetOurChefs"
import CL from "../../components/ClientList"
import ENQ from "../../components/Enquiry"
import FAQ from "../../components/Faq"


import './style.css';

/* -----Assets---Cloudinary */
let mainLogo = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776168/Cooking%20Academy%20Assets/rero4j0wglocfe3v1gpd.svg';
let abtKitchen = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707719743/Cooking%20Academy%20Assets/cbyciwneotdtao9gii46.jpg';
let ownerVideo = 'https://res.cloudinary.com/dvbplh4z9/video/upload/v1670499537/Cooking%20Academy%20Assets/kitchen%20videos/Mohammed_Abdulmalik_Co-Founder_of_Qatar_s_Cooking_Academy_iu0aco.mp4';
let ownerImg = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707720053/Cooking%20Academy%20Assets/gslqlvbxwjj8dru4tomd.webp';
let valueTrust = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707720414/Cooking%20Academy%20Assets/mlgcmjqiruhruoe7hbfj.svg';
let valueInnovation = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707720415/Cooking%20Academy%20Assets/kthyt20rnoa8riqpxfg1.svg';
let valueDevelopment = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707720414/Cooking%20Academy%20Assets/ffusyj6q2onk2m1pkloy.svg';
let valueQuality = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707720415/Cooking%20Academy%20Assets/o8katjenswi8mczpfb5a.svg';

function AboutUs() {
    // ========================//
	  const {t} = useTranslation();
	// ========================//
  return (
    <>
      <section className="relative">
        <div className='abt-banner' />
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={mainLogo} alt='' width="353px" height="167px" />
        </div>
      </section>

      {/*================================= About US content =================================*/}
      <section className="w-11/12 mx-auto xs:py-10 md:py-20">
        <div data-aos="fade-right">
          <h2 className='text-center font-bold xs:text-4xl lg:text-5xl'>{t('abthead')}</h2>
          <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>
            {t('abtpara')}</p>
        </div>
      </section>

      {/*================================= who are we? =================================*/}
      <section className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:py-10'>
        <div data-aos="fade-right" className='relative md:col-span-2 flex flex-col justify-center'>
            <h2 className='text-center  md:w-[80%] md:text-left font-bold xs:text-4xl lg:text-5xl'>{t('aboutwhoarewehead')}?</h2>
            <p className='md::w-[80%]  lg:w-[70%] md:tracking-wider xs:text-center md:text-left xs:text-lg md:text-xl py-5 '>
              {t('aboutwhoarewepara')}</p>
        </div>
        

        
        <div data-aos="fade-right" className="h-full">
          <img src={abtKitchen} alt='who we are' className='md:h-full' />
        </div>
      </section>


      {/*================================= Chef Video =================================*/}
      <section className="py-10 px-50 ownerBackground">
        <div className="w-11/12 mx-auto py-10">
          <video controls loop className='w-full rounded-[2rem]' controlsList="nodownload">
            <source src={ownerVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/*================================= Vision and Mission =================================*/}
      

      <section className='abtVision relative'>
        <div className='w-full top-2/4 z-0 absolute'>
            <hr className=' mb-1 h-0.5 hrThemeBg' />
            <hr className='hrThemeBg h-12' />
          </div>

       <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className=' lg:w-[80%] max-w-lg z-20 lg:ml-8 '>
                <img className='' src={ownerImg} alt="image of the company owner" width='100%' />
                <hr className='h-px md:w-3/4 md:ml-42 hrThemeBg' />
                <h1 className='font-bold text-satin-gold lg:ml-16 text-2xl xs:text-center md:text-left'>{t('mohammed')}</h1>
                <h1 className='lg:ml-16 text-base xs:text-center md:text-left'>{t('founder')}</h1>
          </div>
          <div className='flex flex-col xs:gap-5 md:gap-0 justify-between z-20 '>
              {/* <div className='xs:mt-28  lg:mt-36 '>
                <h1 className='font-bold xs:text-4xl  xs:text-center md:text-left lg:text-5xl  '>{t('ourvisionh')}</h1>
                <p className='text-lg pt-2 xs:text-center md:text-left'>{t('ourvisionp')}</p>
              </div>
              <div className=' lg:mb-20'>
                <h1 className='font-bold xs:text-4xl  xs:text-center md:text-left lg:text-5xl'>{t('ourmissionh')}</h1>
                <p className='text-lg pt-2 xs:text-center md:text-left'>{t('ourmissionp')}</p>
              </div> */}
          </div>
       </div>
      </section>


      

      {/*================================= Last Year achievement =================================*/}
      <section className='w-11/12 mx-auto xs:py-5 md:py-20'>
        <LSA aboutPage />
      </section>
      {/*================================= Last Year achievement =================================*/}

      {/*================================= Our Values =================================*/}
      <section className='ourValues w-full overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto'>
                <div data-aos="fade-right" className='flex justify-center flex-col xs:py-10 md:py-24 '>
                    <h2 className='font-bold xs:text-4xl lg:text-5xl'>{t('valuehead')}</h2>
                    <p className='text-xl lg:w-[70%] pt-3'>{t('valuepara')}</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 xs:py-10 md:py-24 place-items-center'>
                    <div className='grid place-items-center'>
                      <img src={valueTrust} alt='Trust' width='120px' height='120px inline-block' />
                      <h1 className='pt-3 text-xl' >{t('valuep1')}</h1>
                    </div>
                    <div className='grid place-items-center'>
                        <img src={valueInnovation} alt='Innovation' width='80px' height='80px' />
                        <h1 className='pt-3 text-xl'>{t('valuep2')}</h1>
                    </div>
                    <div className='grid place-items-center'>
                      <img src={valueDevelopment} alt='Development' width='80px' height='80px' />
                      <h1 className='pt-3 text-xl'>{t('valuep3')}</h1>
                    </div>
                    <div className='grid place-items-center'>
                        <img src={valueQuality} alt='Quality' width='80px' height='80px' />
                        <h1 className='pt-3 text-xl'>{t('valuep4')}</h1>
                    </div>
                </div>
          </div>

          
      </section>

      {/* Meet our Chefs */}
        <MOC />
      {/* Meet our Chefs */}

      {/*================================= CLients =================================*/}
      <section>
        <CL/>
      </section>
      {/*================================= CLients =================================*/}

      {/*================================= ENQUIRY =================================*/}
      <section>
        <ENQ/>
      </section>
      {/*================================= ENQUIRY =================================*/}

      {/*================================= faq =================================*/}
      <section>
        <FAQ/>
      </section>
      {/*================================= faq =================================*/}


      {/*================================= MAP =================================*/}
      <section className='w-[97%] mx-auto py-10'>
        <iframe className='xs:h-[70vh] md:h-[50vh] lg:h-[70vh]  w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14423.795945138305!2d51.4615454!3d25.3394928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c027a67228c010e!2sThe%20Cooking%20Academy!5e0!3m2!1sen!2sin!4v1671271346846!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      {/*================================= MAP =================================*/}





    </>
  )
}

export default AboutUs;