import React from 'react';
import { useNavigate,NavLink } from "react-router-dom"; 
let Logo ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg'

function AdminNav() {
    const navigate = useNavigate('');
  return (
    <>
     <nav className='bg-[#1a1919] admin-nav'>
        <div className='w-full grid place-items-center py-5'>
            <img className='h-20' src={Logo} alt="" />
        </div>
        <ul className='grid  grid-flow-row pl-8 py-10 gap-8 font-medium text-xl'>
            {/* <li className='cursor-pointer'><NavLink to="/admin/faq">FAQ</NavLink></li>
            <li className='cursor-pointer'><NavLink to="/admin/email">Email</NavLink></li> */}
            <li className='cursor-pointer'><NavLink to="/admin/course-details">Course Details</NavLink></li>
            <li className='cursor-pointer'><NavLink to="/admin/class-details">Class Details</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default AdminNav