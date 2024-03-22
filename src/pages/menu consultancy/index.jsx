import {useTranslation} from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Menuconsulp1,Menuconsulp2,Menuconsulbg} from '../../Assets'

let Banner = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674205341/Cooking%20Academy%20Assets/consult_sfal4y.jpg';
let img2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674206112/Cooking%20Academy%20Assets/how_vq2f8c.jpg';
let img3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674294743/Cooking%20Academy%20Assets/rest_tp7a4n.jpg';

function MenuConsultancy() {
  
        // ========================//
        const {t} = useTranslation();
        // ========================//
  return (
    <>
    <section className='w-11/12 mx-auto overflow-hidden'>
        {/* banner */}
        <div className='my-2 overflow-hidden'>
            <img className='w-[100%] h-60  object-cover hover:scale-105 transition-all duration-700 cursor-pointer' src={Menuconsulbg} alt="banner" />

            <div className='md:w-[70%] mx-auto text-center'>
                <h1 className='xs:text-2xl md:text-4xl tracking-wider xs:pt-10 md:pt-16 pb-2'>{t('menuhead1')}</h1>
                <p className='xs:text-base md:text-xl leading-loose'>{t('menupara1')}</p>
            </div>
        </div>

        {/* how we do this */}
        <div className='xs:py-10 md:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='overflow-hidden'>
                  <img className='w-[100%] h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer' src={Menuconsulp1} alt="how do image" />
                </div>
                <div className='bg-primary-clr2 w-[100%] flex flex-col gap-4 justify-center items-center text-center xs:p-5 md:p-10'>
                    <h1 className='xs:text-2xl md:text-4xl font-light'>{t('menuhead2')}</h1>
                    <p className='xs:text-base md:text-xl leading-relaxed font-normal'>{t('menupara2')}</p>
                    <p className='xs:text-base md:text-xl leading-relaxed font-normal'>{t('menupara23')}</p>
                </div>
            </div>
            <div className='md:w-[90%] lg:w-[70%] mx-auto text-center'>
                    <h1 className='xs:text-2xl md:text-4xl tracking-wider pt-16 pb-2'>{t('menuhead3')}</h1>
                    <p className='xs:text-base md:text-xl leading-loose'>{t('menupara3')}</p>
            </div>
        </div>

        
    </section>
    <section>
      {/* concept creation */}

      <div className="bg-primary-clr2 xs:py-10  md:py-14">
          <div className="text-center  flex flex-col gap-4">
            <h1 className="xs:text-2xl md:text-4xl  tracking-wider">{t('menuhead4')}</h1>
            <h3 className="xs:text-base md:text-2xl  font-light">{t('menupara4')}</h3>
          </div>
          <div className="xs:w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
            <div className="flex flex-col justify-center xs:gap-5 lg:gap-7">
                 <h1 className="xs:text-2xl md:text-3xl text-center lg:text-left font-normal">{t('menuhead5')}</h1>

                <p className="leading-loose xs:text-base md:text-xl text-center lg:text-left font-normal">{t('menupara5')}</p>
            </div>
            <div className="overflow-hidden">
              <img className="w-[100%] h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer" src={Menuconsulp2} alt="concept image" />
            </div>
          </div>
      </div>

      {/* Process */}
      <div className="bg-[#313030] border-b-2 border-[#5e5a5ac0] xs:py-10  md:py-14">
          <div className="text-center">
                <h1 className="xs:text-2xl md:text-3xl  tracking-wider">{t('ourprocess')}</h1>          
          </div>
          <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-10 pt-10">
              <div className="flex flex-col gap-2 border-t-2 border-[#ffffff46] relative ">
                <h3 className="bg-white text-black w-fit py-1 px-3 rounded-full absolute -top-4">1</h3>
                <h3 className="pt-10 text-lg font-semibold">{t('processhead1')}</h3>
                <p className="text-base font-semibold">{t('objective')}:</p>
                <div className="md:pr-10 flex flex-col gap-3 font-normal">
                <p>{t('processp11')}</p>
                <p>{t('processp12')}</p>
                <p>{t('processp13')}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-t-2 border-[#ffffff46] relative">
                <h3 className="bg-white text-black w-fit py-1 px-3 rounded-full absolute -top-4">2</h3>
                <h3 className="pt-10 text-lg font-semibold">{t('processhead2')}</h3>
                <p className="text-base font-semibold">{t('objective')}:</p>
                <div className="md:pr-10 flex flex-col gap-3 font-normal">
                  <p>{t('processp21')}</p>
                  <p>{t('processp22')}</p>
                  <p>{t('processp23')}</p>
                  </div>
              </div>
              <div className="flex flex-col gap-2 xs:border-t-2 lg:border-t-0 border-[#ffffff46]  relative">
                <h3 className="bg-white text-black w-fit py-1 px-3 rounded-full absolute -top-4">3</h3>
                <h3 className="pt-10 text-lg font-semibold">{t('processhead3')}</h3>
                <p className="text-base font-semibold">{t('objective')}:</p>
                <div className="md:pr-10 flex flex-col gap-3 font-normal">
                <p>{t('processp31')}</p>
                <p>{t('processp32')}</p>
                <p>{t('processp33')}</p>
                  </div>
              </div>
          </div>
      </div>

      

      {/* BOOK A CONSULTATION */}
      <div className="bg-[#313030] py-8 flex gap-5 flex-col justify-center items-center">
        <h1 className="xs:text-2xl md:text-3xl font-light tracking-wider">{t('bookacon')}</h1>
        <h3 className="xs:text-base md:text-2xl xs:w-[95%] lg:w-[40%] text-center font-light">{t('bookaconpara')}</h3>
        <div className="flex gap-4">
          <a target='_blank' href="tel:+97433242999" className="border-2 cursor-pointer xs:text-sm md:text-xl bg-transparent hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 p-1 text-center xs:w-40 md:w-60">{t('bookaconbtn1')}</a>
          <NavLink to={'/kitchen-studio'} className="border-2 cursor-pointer xs:text-sm md:text-xl bg-transparent hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 p-1 text-center xs:w-40 md:w-60">{t('bookaconbtn2')}</NavLink>
        </div>
      </div>
    </section>
    </>
  )
}

export default MenuConsultancy