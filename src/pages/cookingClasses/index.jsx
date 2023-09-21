import './style.css';
import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import 'react-lazy-load-image-component/src/effects/blur.css';
import MOC from "../../components/MeetOurChefs"
import LSA from "../../components/LatYearAchive"
import ENQ from "../../components/Enquiry"
import FAQ from "../../components/Faq"
import CLASSES from "../../components/sliders/explore-slider"



function CookingClass() {
    // ========================//
	  const {t} = useTranslation();
	// ========================//
  return (
    <>
    {/* =========================BANNER======================== */}
    <section className='cook-banner'>
      <div className='h-full flex flex-col justify-end md:pb-40 align-bottom xs:gap-5 md:gap-6' data-aos="fade-right">
        <h1 className='xs:text-5xl md:text-6xl font-bold text-center'>{t('cookinclsbnhead1')}<br></br> {t('cookinclsbnhead2')}</h1>
        <p className='text-2xl text-center xs:w-[80%] md:w-[35%] mx-auto'>{t('cookinclsbnpara')}</p>
        <div className='grid place-items-center'>
        <NavLink to='/profile'><a className='bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>{t('explorehead')}</a></NavLink>
        </div>
      </div>
    </section>
    {/* =======================BANNER========================== */}

    {/* =========================Classes======================== */}
    <section className=''>
      <div className='w-11/12 mx-auto py-10'>
        <h3 className='text-4xl font-bold'>{t('explorehead')}.</h3>
      </div>
       {/* =========================CLASS======================== */}
      <div className='lg:pr-14'>
        <CLASSES/>
      </div>
      {/* =========================CLASS======================== */}
      {/* <div className='pt-10 lg:pr-14'>
        <CLASSES/>
      </div> */}
      
    {/* =========================ENQUIRY======================== */}
    <ENQ/>
    {/* =========================ENQUIRY======================== */}

    <div className='pt-10 lg:pr-14'>
        <CLASSES/>
    </div>
    
      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden'>
            <div >
              <LazyLoadImage className='md:rounded-tr-2xl md:rounded-br-2xl w-screen' effect='blur' src={expo1} alt="img" />
            </div>
            <div className='px-5 flex flex-col justify-center xs:gap-8 md:gap-4 lg:gap-8' data-aos="fade-right">
              <h3 className='xs:text-3xl lg:text-5xl font-bold md:w-[50%]'>Fundamentals of cuisine</h3>
              <p className='text-text-dark lg:text-2xl lg:pr-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est</p>
              <div className='flex xs:justify-center md:justify-start gap-10'>
                <a href="#" className='xs:px-6 lg:px-16 py-2 rounded-3xl bg-primary-clr2 hover:bg-primary-clr1 lg:text-2xl font-medium'>Enroll Now</a>
                <a href="/cooking-class-inside" className='xs:px-6 lg:px-16 py-2 border-2 transition-all duration-500 border-primary-clr2 rounded-3xl hover:bg-primary-clr1 lg:text-2xl font-medium'>Know More</a>
              </div>
            </div>
      </div>

      <div className='flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2  gap-10 py-20 overflow-hidden'>
            <div className='px-5 md:pl-10 flex flex-col justify-center xs:gap-8 md:gap-4 lg:gap-8' data-aos="fade-right">
              <h3 className='xs:text-3xl lg:text-5xl font-bold md:w-[50%]'>Worldwide cuisine</h3>
              <p className='text-text-dark lg:text-2xl lg:pr-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est</p>
              <div className='flex xs:justify-center md:justify-start gap-10'>
                <a href="#" className='xs:px-6 lg:px-16  py-2 rounded-3xl bg-primary-clr2 hover:bg-primary-clr1 lg:text-2xl font-medium'>Enroll Now</a>
                <a href="/cooking-class-inside" className='xs:px-6 lg:px-16  py-2 border-2 transition-all duration-500 border-primary-clr2 rounded-3xl hover:bg-primary-clr1 lg:text-2xl font-medium'>Know More</a>
              </div>
            </div>
            <div>
              <LazyLoadImage className='md:rounded-tl-2xl md:rounded-bl-2xl w-screen' effect='blur' src={expo2} alt="img" />
            </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden'>
            <div>
              <LazyLoadImage className='md:rounded-tr-2xl md:rounded-br-2xl w-screen' effect='blur' src={expo3} alt="img" />
            </div>
            <div className='px-5 flex flex-col justify-center xs:gap-8 md:gap-4 lg:gap-8' data-aos="fade-right">
              <h3 className='xs:text-3xl lg:text-5xl font-bold md:w-[80%] leading-snug'>Pastry program:<br></br>fundamentals of pastry</h3>
              <p className='text-text-dark lg:text-2xl lg:pr-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est</p>
              <div className='flex xs:justify-center md:justify-start gap-10'>
                <a href="#" className='xs:px-6 lg:px-16  py-2 rounded-3xl bg-primary-clr2 hover:bg-primary-clr1 lg:text-2xl font-medium'>Enroll Now</a>
                <a href="/cooking-class-inside" className='xs:px-6 lg:px-16  py-2 border-2 transition-all duration-500 border-primary-clr2 rounded-3xl hover:bg-primary-clr1 lg:text-2xl font-medium'>Know More</a>
              </div>
            </div>
      </div>

      <div className='flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-10 py-20 overflow-hidden'>
            <div className='px-5 md:pl-10 flex flex-col justify-center xs:gap-8 md:gap-4 lg:gap-8' data-aos="fade-right">
              <h3 className='xs:text-3xl lg:text-5xl font-bold md:w-[80%]'>Household assistant program</h3>
              <p className='text-text-dark lg:text-2xl lg:pr-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est</p>
              <div className='flex xs:justify-center md:justify-start gap-10'>
                <a href="#" className='xs:px-6 lg:px-16  py-2 rounded-3xl bg-primary-clr2 hover:bg-primary-clr1 lg:text-2xl font-medium'>Enroll Now</a>
                <a href="/cooking-class-inside" className='xs:px-6 lg:px-16  py-2 border-2 transition-all duration-500 border-primary-clr2 rounded-3xl hover:bg-primary-clr1 lg:text-2xl font-medium'>Know More</a>
              </div>
            </div>
            <div>
              <LazyLoadImage className='md:rounded-tl-2xl md:rounded-bl-2xl w-screen' effect='blur' src={expo4} alt="img" />
            </div>
      </div> */}
    </section>
    {/* =======================Classes========================== */}

    {/* =======================Cheif========================== */}
    <MOC/>
    {/* =======================Cheif========================== */}

    {/* =======================Acheivement========================== */}
    <LSA/>
    {/* =======================Acheivement========================== */}



    {/* ========================FAQ========================= */}
    <FAQ/>
    {/* ========================FAQ========================= */}


    </>
  )
}

export default CookingClass;