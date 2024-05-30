import React from 'react';
import {Logp1,Logp2,Logp3,Logp4,CookLogo} from '../../Assets'
import { NavLink } from 'react-router-dom';

const OTP = () => {
  return (
    <>
    
			<section className="h-screen w-full grid place-items-center">
				<div className="lg:h-[80vh] w-full overflow-hidden grid grid-cols-1 lg:grid-cols-6 place-items-center">
					<img
						className="xs:hidden lg:block w-full h-full"
						src={Logp1}
						alt="img"
					/>
					<img
						className="xs:hidden lg:block w-full h-full "
						src={Logp3}
						alt="img"
					/>
					<div className="col-span-2 xs:w-[80%] xl:w-[70%] mx-auto flex flex-col justify-center gap-10  h-full xl:-mt-20 xl:-mt-40">
						<NavLink to='/'>
							<div className="grid place-items-center">
								<img className="xs:h-fit md:h-14 xl:h-20  " src={CookLogo} alt="logo" />
							</div>
						</NavLink>
					
						<form className="flex flex-col xs:gap-5 md:gap-5 xl:gap-4 justify-center" >
                            <p className='text-center text-2xl capitalize'>Verify OTP</p>
							<div className="relative">
								<input
									className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 xs:py-1.5 md:py-1 xl:py-1.5 rounded-lg [&::-webkit-inner-spin-button]:appearance-none"
									type='number'
									placeholder="Enter OTP"
									required
									name="otp"
							
								/>
							</div>
							<button
								type="submit"
							
								className="bg-primary-dark hover:bg-primary-clr1 xs:py-1 md:py-0 xl:py-1.5 transition-all duration-200 rounded-md capitalize"
							>
								Verify
							</button>
						</form>
					</div>
					<img
						className="xs:hidden lg:block w-full h-full"
						src={Logp2}
						alt="img"
					/>
					<img
						className="xs:hidden lg:block w-full h-full"
						src={Logp4}
						alt="img"
					/>
				</div>
			</section>
    </>
  )
}

export default OTP