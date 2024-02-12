import React from 'react';
import { useState } from 'react';
import {useTranslation} from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom';
import './styles.css';

// Assets Links
let Chef1 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669886573/Cooking%20Academy%20Assets/chef4.webp';
let Chef2 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669886572/Cooking%20Academy%20Assets/chef5.webp';
let Chef3 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669887904/Cooking%20Academy%20Assets/chef7.webp';
let Chef4 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704695415/Cooking%20Academy%20Assets/chef10.webp';
let Chef5 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704695415/Cooking%20Academy%20Assets/chef8.webp';
let Chef6 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669886574/Cooking%20Academy%20Assets/chef1.webp';
let Chef7 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669886573/Cooking%20Academy%20Assets/chef3.webp';
let Chef8 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669886573/Cooking%20Academy%20Assets/chef2.webp';
let Chef9 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1669886572/Cooking%20Academy%20Assets/chef6.webp';


export default function Index() {
  // ========================//
	  const {t} = useTranslation();
	// ========================//
    return (
        <>
            <section className='w-11/12 mx-auto grid place-items-center my-20 overflow-hidden'>
          {/* Chefs imaegs */}
          {/* Large Device */}
          <div id='chefs' className='xs:hidden md:block relative grid place-items-center pt-20'>
              <div className='flex justify-center relative'>
                  <div id='cheftip1' className='relative'>
                    <img src={Chef1} className='relative pt-24 -right-28  z-10 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel1' className='absolute top-10 left-10 '>Chef Claudio Trovato<br></br><p>Italian Cuisine</p></span>
                  </div>
                  <div id='cheftip2' className='relative'>
                    <img src={Chef2} className='relative pt-16 -right-20  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel2' className='absolute top-5 left-10 '>Chef Dala<br></br><p>Pastry Chef</p></span>
                  </div>
                  <div id='cheftip3' className='relative'>
                    <img src={Chef9} className='relative  z-0 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel3' className='absolute top-0 left-0 '>Chef Aisha Al Tamimi<br></br><p>Qatari Chef</p></span>
                  </div>
                  <div id='cheftip4' className='relative'>
                    <img src={Chef4} className='relative pt-20 -left-20  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel4' className='absolute top-0 left-10 '>Chef Stephanie<br></br><p>Mediterranean cuisine</p></span>
                  </div>
                  <div id='cheftip5' className='relative'>
                    <img src={Chef5} className='relative pt-24 -left-40  z-10 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel5' className='absolute top-20 right-5 '>Chef VJ<br></br><p>Modern viennoiserie and pastry</p></span>
                  </div>
              </div>
              <div className='flex justify-center relative -mt-52 z-50'>
                  <div id='cheftip6' className='relative'>
                    <img src={Chef6} className='relative pt-14 -right-32  z-10 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel6' className='absolute top-20 left-20'>Chef Suzy Aly<br></br><p>Kids Master Chef</p></span>
                  </div>
                  <div id='cheftip7' className='relative'>
                    <img src={Chef7} className='relative -right-16  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel7' className='absolute top-5 left-10 '>Chef Manuel<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip8' className='relative'>
                    <img src={Chef8} className='relative   z-0 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel8' className='absolute top-5 left-0 '>Chef Airo<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip9' className='relative'>
                    <img src={Chef3} className='relative pt-14 -left-24  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel9' className='absolute top-20 right-20 '>Chef Landry Hatlas<br></br><p>Head Baker</p></span>
                  </div>
              </div>
          </div>

       

          <div id='chefs' className='xs:block md:hidden relative grid place-items-center md:pt-10'>
              <div className='flex justify-center relative'>
                  <div id='cheftip4' className='relative'>
                    <img src={Chef4} className='relative h-32 -right-8  z-0   hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel4' className='absolute top-16 left-0 '>Chef Stephanie<br></br><p>Mediterranean cuisine</p></span>
                  </div>
                  <div id='cheftip2' className='relative'>
                    <img src={Chef2} className='relative h-40 right-3  z-10  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel2' className='absolute top-16 left-5 '>Chef Dala<br></br><p>Pastry Chef</p></span>
                  </div>
                  <div id='cheftip3' className='relative'>
                    <img src={Chef9} className='relative h-32 -left-10  z-0  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel3' className='absolute top-10 left-0 '>Chef Aisha Al Tamimi<br></br><p>Qatari Chef</p></span>
                  </div>
                  
              </div>

              <div className='flex justify-center relative -mt-24'>
                  <div id='cheftip1' className='relative'>
                    <img src={Chef1} className='relative h-40 -right-3 z-10  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel1' className='absolute top-16 left-0 '>Chef Claudio Trovato<br></br><p>Italian Cuisine</p></span>
                  </div>
                  <div id='cheftip7' className='relative'>
                    <img src={Chef7} className='relative h-40 z-20  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel7' className='absolute top-16 left-0 '>Chef Manuel<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip5' className='relative'>
                    <img src={Chef5} className='relative h-40 -left-3 z-10   hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel5' className='absolute top-16 right-0 '>Chef VJ<br></br><p>Modern viennoiserie and pastry</p></span>
                  </div>
              </div>
              <div className='flex justify-center relative -mt-20'>
                  <div id='cheftip6' className='relative'>
                    <img src={Chef6} className='relative h-40 z-20 -right-3   hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel6' className='absolute top-20 left-0'>Chef Suzy Aly<br></br><p>Kids Master Chef</p></span>
                  </div>
                  <div id='cheftip8' className='relative'>
                    <img src={Chef8} className='relative h-40 z-30  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel8' className='absolute top-20 left-5 '>Chef Airo<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip9' className='relative'>
                    <img src={Chef3} className='relative h-40 z-20 -left-3  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel9' className='absolute top-20 right-0 '>Chef Landry Hatlas<br></br><p>Head Baker</p></span>
                  </div>
              </div>
          </div>

       


          <div className='text-center pt-5' data-aos="fade-right">
            <h2 className='text-4xl font-bold'>{t('meethead')}</h2>
            <p className='text-xl pt-3 md:w-[90%] lg:w-[70%] mx-auto text-[#ffffffcb]'>{t('meetpara')}</p>
          </div>
      </section>
            </>
    )
}