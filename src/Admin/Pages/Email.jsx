import React from 'react';
import Navbar from '../Navbar/AdminNav';

function Email() {
  return (
    <>
    <Navbar/>

     {/* Main section */}
     <section className='admin-body'>

        <div className='p-5'>
            <h1 className='font-bold text-4xl pt-5'>Email</h1>
            <div className='mt-10 bg-black rounded-md px-3 py-5 flex justify-between'>
              <p>example.com</p>
              <i class="fa-solid fa-trash pr-10 hover:text-red-700"></i>
            </div>
        </div>



    </section>
    </>
  )
}

export default Email