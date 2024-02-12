import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Assets Links
let Brand1 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776331/Cooking%20Academy%20Assets/pxlpnibdpj8ubep8xu0l.png';
let Brand2 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776168/Cooking%20Academy%20Assets/lzqxvcd3n0ww4dipapcp.svg';
let Brand3 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776168/Cooking%20Academy%20Assets/l604o6jcu23jkfcumisc.svg';
let Brand4 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776393/Cooking%20Academy%20Assets/syzx4hitvi3cexwdrycx.png';
let Brand5 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776398/Cooking%20Academy%20Assets/s1oqcpzgfdnwz2tgc0v3.png';
let Brand6 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776419/Cooking%20Academy%20Assets/b8aagc66inq4putlwt1u.png';
let Brand7 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776439/Cooking%20Academy%20Assets/cdlzhqswxuwltmbtpgar.png';
let Brand8 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776539/Cooking%20Academy%20Assets/g6dsuf8r8fyve3t9pagu.png';
let Brand9 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776626/Cooking%20Academy%20Assets/b8i2ioidfawhmvhmo12r.png';

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
