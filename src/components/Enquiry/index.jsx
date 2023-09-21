import React from 'react';
import {useTranslation} from 'react-i18next'

export default function Index() {
    // ========================//
	        const {t} = useTranslation();
	// ========================//

  return (
    <>
     <section className='w-11/12 mx-auto xs:py-16 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:px-5 bg-slate-800 xs:py-5 md:py-16 rounded-md md:place-items-center enquire-form'>
              <div className='xs:px-2 md:px-0' data-aos="fade-right">
                <h3 className='font-bold text-2xl'>{t('eqrhead')}</h3>
                <p className='text-[#ffffffcb]'>{t('eqrpara')}</p>
              </div>
              <div className='xs:px-2 md:px-0 xs:pt-5 md:pt-0'>
                <form className='flex xs:flex-col md:flex-row justify-start gap-5 '>
                  <div className='flex flex-col gap-2'>
                    <input required className='outline-none  bg-black rounded-md border-2 border-[#383737] text-xl p-1 lg:w-72' type="email" />
                    <span className='flex'><input required className='ml-1 mr-3' type='checkbox'/><p className='text-xs text-[#ffffffb0]'>{t('eqrtik')}</p></span>
                  </div>
                  <button className='bg-slate-600 hover:bg-[#FFBB00] transition-all duration-500 text-base text-[#ffffffb0] px-8 py-2 rounded-md h-fit w-fit' type='submit'>Submit</button>
                </form>
              </div>
          </div>
    </section>
    </>
  )
}
