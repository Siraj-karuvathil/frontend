import React from 'react';
import {useTranslation} from 'react-i18next'
import '../../pages/home/style.css';
import {User1,User2,User3,User4,User5} from '../../Assets'


// let  User1 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863763/Cooking%20Academy%20Assets/ubj0kcfwfgynaakqkxjx.png';
// let  User2 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863796/Cooking%20Academy%20Assets/y0ngexafwkqtftbzsvjx.jpg';
// let  User3 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863796/Cooking%20Academy%20Assets/hsctwd1ch4gzudpxubsz.jpg';
// let  User4 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863797/Cooking%20Academy%20Assets/g7gjnfbsnkv1jgi2vn1h.jpg';
// let  User5 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863797/Cooking%20Academy%20Assets/nzhuaoitlbxo4i2iou9m.jpg';

function Feedback() {
      	// ========================//
	const {t} = useTranslation();


	// ========================//
  return (
    <>
    <section className='feedback xs:mb-10 md:pb-10 lg:pb-0 lg:mb-28 xs:h-fit md:h-fit lg:h-[600px] overflow-hidden'>
      <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5'>
          <div className='md:col-span-2 flex justify-center flex-col xs:py-10 lg:py-0 lg:h-[600px]' data-aos="fade-right">
                <h1 className='xs:text-3xl md:text-4xl font-medium pb-5'>{t('feedback')}</h1>
                <a className='bg-white text-black px-4 py-2 text-xl rounded-lg w-fit h-fit' href="#">{t('readall')} <i class="fa-solid fa-arrow-right pl-4"></i></a>
          </div>

          <div className='xs:w-10/12 md:w-full mx-auto md:col-span-3 grid grid-cols-1 gap-3 md:grid-cols-3 overflow-hidden  xs:h-[650px] md:h-[570px] lg:h-fit  scroll-main'>
                <div className='bg-white p-5  rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>{t('afully')}</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User1} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>{t('Alghalya')}</p>
                      <p className='font-semibold'>{t('Almarzzooqi')}</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863796/Cooking%20Academy%20Assets/hsctwd1ch4gzudpxubsz.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14 rounded-2xl' src={User3} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>{t('Vladimir')}</p>
                          <p className='font-semibold'>{t('Kirkhmeyer')}</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>{t('itsamazing')}</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14 rounded-2xl' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>{t('Hamad')}</p>
                    
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863796/Cooking%20Academy%20Assets/y0ngexafwkqtftbzsvjx.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User2} />
                        <span className='text-white pl-3'>
                        <p className='font-medium'>{t('Hamad')}</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>{t('recently')}</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14 rounded-2xl' src={User3} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>{t('Vladimir')}</p>
                      <p className='font-semibold'>{t('Kirkhmeyer')}</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863797/Cooking%20Academy%20Assets/g7gjnfbsnkv1jgi2vn1h.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14 rounded-2xl' src={User4} />
                        <span className='text-white pl-3'>
                        <p className='font-medium'>{t('MarwaM')}</p>
                        <p className='font-medium'>{t('Shehat')}</p>
                        </span>
                      </div>
                </div>
               
                <div className='bg-white p-5  rounded-[2rem] '>
                  <p className='text-black xs:text-lg md:text-sm'>{t('fantastic')}</p>
                  <div className='flex pt-2'>
                    <img alt='img' className='h-14 rounded-2xl' src={User4} />
                    <span className='text-black pl-3'>
                    <p className='font-medium'>{t('MarwaM')}</p>
                        <p className='font-medium'>{t('Shehat')}</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704863797/Cooking%20Academy%20Assets/nzhuaoitlbxo4i2iou9m.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14 rounded-2xl' src={User5} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>{t('ChefAli')}</p>
                          <p className='font-semibold'>{t('Kirkhmeyer')}</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5  rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>{t('Greatcustomer')}</p>
                  <div className='flex pt-5'>
                    <img alt='img' className='h-14 rounded-2xl' src={User5} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>{t('ChefAli')}</p>
                    </span>
                  </div>
                </div>
                
               
                
                
          </div>
      </div>
    </section>
    </>
  )
}

export default Feedback