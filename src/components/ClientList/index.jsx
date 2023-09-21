import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Assets Links
let Brand1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669636282/Cooking%20Academy%20Assets/PngItem_2430409_c1mjn7.png';
let Brand2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/Layer_2_1_i3ipvl.svg';
let Brand3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_2_ge5flv.svg';
let Brand4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670308695/Cooking%20Academy%20Assets/2014_7_8-alto-shaam-logo-trans-650x248_bsxirp.png';
let Brand5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670327326/Cooking%20Academy%20Assets/Qatar-Airways-Logo_df2uug.png';
let Brand6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670309776/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-06_at_10.05.18_1_okxyeg.png';
let Brand7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674301952/Cooking%20Academy%20Assets/logo_rojkrq.png';
let Brand8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670309778/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-06_at_10.05.19c_1_tu42s7.png';
let Brand9 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1680758517/Cooking%20Academy%20Assets/unox_hf2ovj.png';

export default function index() {
    return (
        <>
            <section className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-10 place-items-center py-20' data-aos="fade-right">
                    <LazyLoadImage effect='blur' className='object-contain h-10' src={Brand1} />
                    <LazyLoadImage effect='blur' className='object-contain h-20' src={Brand9} />
                    <LazyLoadImage effect='blur' className='object-contain h-10' src={Brand2} />
                    <LazyLoadImage effect='blur' className='object-contain h-14' src={Brand3} />
                    <LazyLoadImage effect='blur' className='object-contain h-16' src={Brand5} />
                    <LazyLoadImage effect='blur' className='object-contain h-16' src={Brand6} />
                    <LazyLoadImage effect='blur' className='object-contain h-20' src={Brand7} />
                    <LazyLoadImage effect='blur' className='object-contain h-16' src={Brand8} />
                </div>
            </section>
        </>
    )
}
