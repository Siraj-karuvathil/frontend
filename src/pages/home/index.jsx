import React,{useEffect} from 'react'
import './style.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useTranslation} from 'react-i18next'
import { NavLink } from "react-router-dom";
import WorkImageSlider from '../../components/sliders/workshop-images';
import InstaSlider from '../../components/sliders/insta-slider';
import ServiceSlider from '../../components/sliders/service-slider';
import WorkshopVideo from '../../components/sliders/workshopVideo';
import LSA from "../../components/LatYearAchive"
import MOC from "../../components/MeetOurChefs"
import CL from "../../components/ClientList"
import ENQ from "../../components/Enquiry"
import FEED from "../../components/Feedback"
import FAQ from "../../components/Faq"
import EXPCLASS from "../../components/ExploreClasses";



// Assets Links

let Videotemp = 'https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4';
let Item1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039134/Cooking%20Academy%20Assets/POT_CHICKEN_TACOS_yxidyt.jpg';
let Item2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039134/Cooking%20Academy%20Assets/BAKED_CHICKEN_NUGGETS_tgz1sr.jpg';
let Item3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039134/Cooking%20Academy%20Assets/THE_BEST_EVER_CHEESEBERGUR_x38vf2.jpg';
let Item4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/SLOW_COOKER_BEEF_BARBACOA_fu6cfb.jpg';
let Item5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/SHEET_PAN_CHICKEN_AND_STUFFING_dnwjxp.jpg';
let Item6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/LOADED_SMASHED_POTATOES_uipncw.jpg';
let Item7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674050617/Cooking%20Academy%20Assets/MINI_CHICKEN_QUESADILLAS_wparli.jpg';
let Item8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/HOT_SPINACH_AND_ARTICHOKE_DIP_t95lsn.jpg';
let google = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674319499/Cooking%20Academy%20Assets/WhatsApp_Image_2023-01-21_at_17.27.37_xuoe5t.jpg';
let team1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674563346/Cooking%20Academy%20Assets/WhatsApp_Image_2023-01-2asd1_at_15.58.17_stsduv.webp';
let team2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674561431/Cooking%20Academy%20Assets/WhatsApp_Image_2023-01-21_at_15.58.17_beylyc.webp';
let Tb1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674566308/Cooking%20Academy%20Assets/Screenshot_2023-01-24_18sad4408_elcmhg.png';
let Tb2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674566308/Cooking%20Academy%20Assets/Screenshot_2023-01-24sdfsdf_184408_zgngtv.png';
let Tb3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674566308/Cooking%20Academy%20Assets/Screenshot_2023-01-24_18asd4408_nhkrud.png';
let Tb4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674566307/Cooking%20Academy%20Assets/Screenshot_2023-01-24_asd184408_nb7j5s.png';
let Tb5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674566307/Cooking%20Academy%20Assets/Screenshot_2023-01-24_dsfdsf_wlaicw.png';


function LandingPage() {

  	// ========================//
	const {t} = useTranslation();


	// ========================//


    useEffect(() => {
      Aos.init({ duration: 1000 });
  }, [])

    


  return (
    <>
    {/* =================================Banner================================= */}
   
    <section className='banner bg-[#080808] text-white'>
            <div className='xs:px-5 md:px-0 md:pl-10 lg:pl-20 xs:h-[90vh] md:h-[40vh] lg:h-[90vh]  flex flex-col xs:gap-5 lg:gap-8 xs:justify-center lg:justify-center'  data-aos="fade-right">
              <p className='xs:text-4xl md:text-3xl lg:text-5xl font-bold md:w-[50%] lg:w-[40%]'>{t('bnhead')}</p>
              <p className='xs:text-base lg:text-xl lg:w-[35%] text-[color:var(--text-clr)]'>{t('bnpara')}.</p>
              <NavLink to='/profile'><a className='bg-[color:var(--thm-clr2)] hover:bg-[#FFBB00] transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>{t('gotobtn')}</a></NavLink>
              <p className='md:w-[60%] lg:w-[40%] xs:mt-2 lg:mt-5 text-[color:var(--text-clr)]'>{t('bnpara2')}</p>
            </div>
       
    </section>
    {/* =================================Banner================================= */}

    {/* =================================Brands================================= */}
    <CL/>
    {/* =================================Brands================================= */}


    {/* =================================Explore================================= */}
    <section className='' data-aos="fade-right">
      <div className='flex gap-10 py-10 xs:px-5 md:px-0 md:pl-5 lg:pl-16'>
        <h3 className='xs:text-2xl md:text-3xl font-semibold'>{t('explorehead')}.</h3>
      </div>
      <EXPCLASS/>
      <div className='grid place-items-center pt-20 pb-10'>
        <a href='#' className='bg-slate-500 hover:bg-[#FFBB00] transition-all duration-500 rounded-md px-5 py-2'>{t('exploreclasses')}</a>
    </div>
    </section>
    {/* =================================Explore================================= */}

    {/* =================================About us================================= */}
      <section className='w-11/12 mx-auto pt-10'>
              <div data-aos="fade-right">
                  <h2 className='text-center font-bold xs:text-4xl lg:text-5xl'>{t('abthead')}</h2>
                  <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>{t('abtpara')}</p>
              </div>
      </section>
    {/* =================================About us================================= */}

    {/* =================================Achievment================================= */}
    <section className='w-11/12 mx-auto pb-10'>
      <LSA/>
    </section>
    {/* =================================Achievment================================= */}


     {/* =================================Workshop================================= */}
     <section className='workshop overflow-hidden relative'>
        <div className='xs:w-[90%] md:w-[85%] mx-auto xs:pt-10 lg:pt-10'>
          <div className='' data-aos="fade-right">
            <h2 className='font-bold xs:text-4xl lg:text-5xl xs:text-center md:text-left' data-aos="fade-right">{t('workshop')}</h2>
          </div>
          <WorkshopVideo/>
        </div>

        {/* ===========WorkshopImages============ */}
        {/* <div className='xs:pt-5 md:pt-20'>
          <h2 className='font-bold xs:text-4xl lg:text-5xl text-center' data-aos="fade-right">{t('photogallery')}</h2>
          <WorkImageSlider/>
        </div> */}
        {/* ===========WorkshopImages============ */}
     </section>
     {/* =================================Workshop================================= */}
     




     {/* =================================Meet Our Chefs================================= */}
      <section>
        <MOC/>
      </section>
     {/* =================================Meet Our Chefs================================= */}

     {/* =================================Team building================================= */}
  

    <section className='bg-gradient-to-r from-[#141414f5] to-[#cc9601] flex flex-col justify-end'>
        <div className='grid grid-cols-1 md:grid-cols-2  place-items-end -mt-1'>
            <div className='bg-[#141414] xs:px-3 xs:py-5 md:py-0 h-full md:p-10 lg:p-14 w-full flex flex-col justify-center ' >
              <h1 className='font-bold xs:text-3xl md:text-2xl lg:text-6xl' data-aos="fade-right">{t('cophead1')}<br/> {t('cophead2')}</h1>
              <h3 className='font-normal xs:text-xl md:text-xl lg:text-3xl' data-aos="fade-right">{t('cophead3')}</h3>
            </div>
            <div className='w-full h-full overflow-hidden'>
              <img className=' w-full h-full object-cover  hover:scale-105 duration-500' src={team2} alt="team" />
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#141414f5] to-[#cc9601] overflow-hidden'>
          <div className='w-11/12 mx-auto xs:py-5 md:py-8'>
              <p className='text-lg font-normal'>{t('coppara1')}</p>
              <p className=' pt-8 text-base lg:text-base font-light tracking-wide'>{t('coppara2')}</p>
              <div className='flex flex-wrap gap-3 justify-center md:justify-start pt-3'>
                  <img className='rounded-lg hover:scale-105 duration-500 object-cover xs:h-fit md:h-14 lg:h-fit' src={Tb1} alt="team brand" data-aos="fade-right"/>
                  <img className='rounded-lg hover:scale-105 duration-500 object-cover xs:h-fit md:h-14 lg:h-fit' src={Tb2} alt="team brand" data-aos="fade-right"/>
                  <img className='rounded-lg hover:scale-105 duration-500 object-cover xs:h-fit md:h-14 lg:h-fit' src={Tb3} alt="team brand" data-aos="fade-right"/>
                  <img className='rounded-lg hover:scale-105 duration-500 object-cover xs:h-fit md:h-14 lg:h-fit' src={Tb4} alt="team brand" data-aos="fade-right"/>
                  <img className='rounded-lg hover:scale-105 duration-500 object-cover xs:h-fit md:h-14 lg:h-fit' src={Tb5} alt="team brand" data-aos="fade-right"/>
              </div>
          </div>
        </div>
      </section>
      {/* =================================Team building================================= */}

    {/* ==================================Other Service================================ */}
    <section className=''>
      <div className='md:pl-5 lg:pl-20  xs:px-5 md:px-0 py-10' data-aos="fade-right">
        <h3 className='text-3xl font-semibold'>{t('service')}.</h3>
      </div>

          <ServiceSlider/>

    </section>
    {/* ==================================Other Service================================ */}


    {/* ==================================Enquire Submit form================================ */}
    <ENQ/>
    {/* ==================================Enquire Submit form================================ */}



    {/* ==================================delicious recipe================================ */}
      <section className='w-11/12 mx-auto recipe p-2'>
        <div className='bg-[#000000a2] rounded-3xl'>
              <div className='flex xs:flex-col md:flex-row justify-between py-10 px-5' data-aos="fade-right">
                <p className='text-[color:var(--thm-clr2)] text-3xl lg:w-[30%]'>{t('delicioustitile')}</p>
                {/* <p className='text-[#ffffffb0] md:text-right text-xl lg:w-[30%] xs:pt-5 md:pt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, magnam.</p> */}
              </div>


              <div className='dishes grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10 xs:p-5 md:p-10 '>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item1}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod1')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item2}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod2')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>50 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item3}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod3')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>60 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item4}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod4')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>55 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item5}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod5')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>60 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item6}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod6')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>20 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item7}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod7')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>50 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item8}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>{t('deliprod8')}</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>35 {t('minutes')}</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>{t('healthy')}</p>
                      </span>
                    </div>

              </div>
                    <div className='grid place-items-center xs:pt-10 lg:pt-16 pb-10' data-aos="fade-right">
                        <a href='#' className='bg-slate-501 hover:bg-[#FFBB00] transition-all duration-500 rounded-md px-5 py-2'>{t('exploreclasses')}</a>
                    </div>
        </div>
      </section>
    {/* ==================================delicious recipe================================ */}


    {/* ==================================Feedback================================ */}
    
    <FEED/>
    {/* ==================================Feedback================================ */}

    {/* ==================================Instagram================================ */}
    <section className='xs:py-10  insta-bg'>
         <div className='xs:w-11/12 md:w-full mx-auto text-center text-[#ffffffcb]' data-aos="fade-right">
            <h2 className='xs:text-xl md:text-3xl '>{t('instahead')}</h2>
            <p className='xs:text-sm md:text-base py-3 lg:w-[30%] mx-auto'>{t('instapara')}</p>
          </div>

          {/* scroll */}
          <div className='pb-10 relative'>
            <InstaSlider/>
          </div>
          <div className='grid place-items-center xs:mt-16 md:mt-28'>
            <a className='bg-white hover:bg-[#FFBB00] rounded-lg px-3 py-2 text-black hover:text-white xs:text-lg md:text-xl' href="https://instagram.com/thecookingacademyqtr" target="__blank">Visit Our Instgram<i class="fa-brands fa-instagram font-medium text-2xl pl-2"></i></a>
          </div>
    </section>
    {/* ==================================Instagram================================ */}


    {/* ==================================Frequently questions================================ */}
      <FAQ/>
    {/* ==================================Frequently questions================================ */}
    
    <section className='w-11/12 mx-auto pt-20 pb-10 grid place-items-center'>
        <img className='h-16' src={google} alt="google" />
    </section>

    </>
  )
}

export default LandingPage