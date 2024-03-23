import {Link,useLocation,useParams} from 'react-router-dom';
import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import {CookLogo} from '../../Assets';

let Logo ='https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776168/Cooking%20Academy%20Assets/rero4j0wglocfe3v1gpd.svg';
let ISO = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670215005/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_09.49.53_gm3fno.png';
let ISO1 = 'https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707719528/Cooking%20Academy%20Assets/vsmdzwtj3lpam1rwrljn.png';


function Footer() {



  let { id,courseId } = useParams();


  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])

// custom hide
const { pathname } = useLocation();
if (pathname === "/login") return null;
if (pathname === "/signup") return null;
if (pathname === "/success") return null;
if (pathname === "/admin/login") return null;
if (pathname === "/admin/faq") return null;
if (pathname === "/admin/email") return null;
if (pathname === "/admin/workshop-images") return null;
if (pathname === "/admin/class-details") return null;
if (pathname === `/admin/course-edit/${id}`) return null;
if (pathname === `/admin/class-edit/${id}/${courseId}`) return null;
if (pathname === "/admin/course-details") return null;
if (pathname === `/admin/class/${id}`) return null;

  return (
    <>
    <section className='bg-[#000000f6] xs:pt-20 md:pt-10'>
        <div className='w-11/12 mx-auto md:py-5 lg:py-0 grid grid-cols-1 lg:grid-cols-4 md:gap-10 bg-cover bg-no-repeat bg-center md:bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669628048/Cooking%20Academy%20Assets/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_dhixjz.webp)] text-[#ffffffdc] border-[#CBA135] md:border-t-2 md:border-b-2'>
          
          <div className='lg:py-20 ' data-aos="fade-right">
            <a href="/"><img className='' src={CookLogo}></img></a>
            {/* <p className='pt-5 xs:text-sm md:text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure, nulla soluta repudiandae non odio quia reprehenderit inventore corporis rem repellendus ullam culpa quo suscipit veniam laboriosam minima nobis obcaecati.</p> */}
          </div>
          <div className='md:col-span-2 grid xs:py-10 md:py-0 grid-cols-2' data-aos="fade-right">
                  <div className='lg:py-10 grid lg:place-items-center '>
                      <ul className='flex flex-col gap-5 '>
                        <li className='hover:text-[#CBA135]'><Link exact to='/'>Home</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to='/about-us'>About Us</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to=''>Our Program</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to=''>Corporate</Link></li>
                      </ul>
                  </div>
                  <div className='lg:py-10 grid lg:place-items-center '>
                      <ul className='flex flex-col gap-5 '>
                        <li className='hover:text-[#CBA135]'><Link to='/kitchen-studio'>Kitchen</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to=''>Contact us</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to='/termsAndConditions'>Terms & Conditions</Link></li>
                        <li className='hover:text-[#CBA135]'><Link to='/CancellationPolicy'>Cancellation Policy</Link></li>
                      </ul>
                      
                  </div>
          </div>
          <div className='lg:py-10 text-base font-semibold flex flex-col justify-center gap-10' data-aos="fade-right">
              <div>
                  <p className='pb-3'>GET IN TOUCH</p>
                  <a href='tel:+97433242999'>+974 33242999</a><br/>
                  <a href='tel:+97430067796'>+974 30067796</a>
                  {/* <p>Email:<a href='#'>Info@cookingacademy.qa</a></p> */}
              </div>
              <div>
                  <p>The Cooking Academy</p>
                  <p>zone 31, building no 30, street 978.</p>
                  <p>Umm Lekhba, Duhail, Doha, Qatar</p>
              </div>
          </div>
        </div>

        <div className=' w-11/12 mx-auto flex xs:flex-col md:flex-row xs:gap-5 md:gap-0 justify-between text-white py-8' >
            <div className='flex gap-5'>
              <div className='flex gap-2'><img className='h-6' src={ISO1}/><p className='grid place-items-center'>22000:2018</p></div>
              <p className='grid place-items-center'>All Right Reserved.</p>
            </div>
        
            <div className='flex md:grid grid-flow-col md:place-self-center gap-7 '>
                {/* <a href='#' target='_blank'><i class="fa-brands fa-facebook text-xl text-white hover:text-primary-clr2 transition-all duration-300"></i></a> */}
                <a href='https://twitter.com/cookingqatar/' target='_blank'><i class="fa-brands fa-twitter text-xl text-white hover:text-primary-clr2 transition-all duration-300"></i></a>
                <a href='https://www.tiktok.com/@thecookingacademy/' target='_blank'><i class="fa-brands fa-tiktok md:mt-1.5 text-white hover:text-primary-clr2 transition-all duration-300"></i></a>
                <a href='https://www.linkedin.com/company/thecookingacademy/' target='_blank'><i class="fa-brands fa-linkedin-in text-xl text-white hover:text-primary-clr2 transition-all duration-300"></i></a>
             </div>
           
        
            <div className='grid  md:place-self-center'>
              <p><a href='#'>Terms of Use</a><span className='px-5'>|</span><a href='#'>Privacy Policy</a></p>
              
            </div>
        </div>
    
    </section>
    </>
  )
}

export default Footer;