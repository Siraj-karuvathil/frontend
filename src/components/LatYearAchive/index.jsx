import React,{useState} from 'react';
import {useTranslation} from 'react-i18next'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './styles.css';


export default function LSA(props) {
  	// ========================//
	const {t} = useTranslation();


	// ========================//

  const [counterOn, setCounterOn] = useState(false)

  return (
    <>
      <div data-aos="fade-right">
        <h2 className='text-center font-bold xs:text-4xl md:text-5xl text-[color:var(--thm-clr2)] pt-5 pb-3'>{t('lsa')}</h2>
        {/* <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>we are a culinary startup based in qatar with the aim of bringing people together, to learn and enjoy the art of cooking.</p> */}
      </div>

      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div data-aos="fade-right" className='md:w-10/12 mx-auto md:pt-5 grid grid-cols-1 md:grid-cols-4 xs:gap-5 md:gap-0 place-items-center text-[color:var(--thm-clr2)] py-2'>
        <div className='grid place-items-center'>
          {counterOn &&
          <h4 className='xs:text-5xl lg:text-7xl'>+<CountUp start={0} end={25} /></h4>
          }
          <p className='capitalize'>{t('part')}</p>
        </div>
        <div className='grid place-items-center'>
        {counterOn &&
          <h4 className='xs:text-5xl lg:text-7xl'>+<CountUp start={0} end={50}/></h4>
        }
          <p className='capitalize'>{t('work')}</p>
        </div>
        <div className='grid place-items-center'>
        {counterOn &&
          <h4 className='xs:text-5xl lg:text-7xl'>+<CountUp start={0} end={3}/></h4>
        }
          <p className='capitalize'>{t('awrd')}</p>
        </div>
        <div className='grid place-items-center'>
        {counterOn &&
          <h4 className='xs:text-5xl lg:text-7xl'>+<CountUp start={0} end={150}/></h4>
        }
          <p className='capitalize'>{t('cook')}</p>
        </div>

      </div>
      </ScrollTrigger>
      
      </>
  )
}
