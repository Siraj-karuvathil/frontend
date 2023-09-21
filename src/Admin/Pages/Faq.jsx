import React from 'react'
import Navbar from '../Navbar/AdminNav';
import '../Pages/style.css'

function Faq() {
  return (
    <>
    <Navbar/>

    {/* Main section */}
    <section className='admin-body'>
      {/* Data Input */}
        <div className='p-5'>
            <h1 className='font-bold text-4xl pt-5'>FAQ</h1>

            <form action="" className='md:w-3/5 flex flex-col gap-8 py-10'>
              <div>
                <p className='text-xl pb-4'>Category</p>
                <select className='bg-bg-darks border-none p-3 rounded-lg w-full' required>
                  <option value="">Select Item</option>
                  <option value="Kitchen Studio">Kitchen Studio</option>
                  <option value="Cuisine">Cuisine</option>
                </select>
              </div>

              <div>
                <p className='text-xl pb-4'>FAQ Question</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Enter your Question' required/>
              </div>

              <div>
                <p className='text-xl pb-4'>FAQ Answer</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Enter your Answer' required/>
              </div>

              <div className='flex justify-end'>
                <button className='bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 rounded-md' type='submit'>Create</button>
              </div>
            </form>
        </div>
        {/* Data Input end*/}


        {/* Display Data*/}
        <div className='w-full bg-[#2b2929] p-5 min-h-[200px]'>
            <h1 className='font-bold text-2xl text-primary-clr2'>Kitchen Studio</h1>
            <div className='relative'>
                {/* contents */}
                <div className='w-[90%] flex flex-col py-5 gap-5'>
                  <p className='text-2xl font-medium'>Lorem, ipsum dolor sit amet consectetur , explicabo?</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus placeat modi a delectus ipsum labore maxime, alias sint voluptas voluptatibus, ipsam cum. Tenetur, in. Asperiores beatae, nesciunt ducimus impedit sit error consequatur illo adipisci distinctio unde, facilis excepturi at.</p>
                </div>
                {/* Edit/Delete Buttons */}
                <div className='absolute top-10 right-5 flex gap-8'>
                  <i class="fa-solid fa-pen-to-square hover:text-red-700"></i>
                  <i class="fa-solid fa-trash hover:text-red-700"></i>
                </div>
                <hr />
            </div>
        </div>

    </section>
    </>
  )
}

export default Faq