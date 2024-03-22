import { useState } from "react";
import { useParams } from "react-router";
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'
import LanguageOpt from '../../components/languageSelector'
import useAppSelector from "../../redux/hooks/useAppSelector";
import { NavLink, useLocation } from "react-router-dom";
import "../Header/Header.css";
import {CookLogo,Profpic} from '../../Assets';






let Logo =
	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776168/Cooking%20Academy%20Assets/rero4j0wglocfe3v1gpd.svg";
let Logo2 = 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg';
let Menu =
	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707718625/Cooking%20Academy%20Assets/i81dnadbn0vrakrdwje8.png";

	function Navbar() {

	  // ============Translator============//
	  const {t} = useTranslation();

	  const handleClick=(e)=>{
		i18next.changeLanguage(e.target.value)
	  }
		// ==========Translator==============//


	let { id, courseId } = useParams();

	const location = useLocation();
	const [open, setOpen] = useState(false);
  const loggedIn = useAppSelector(state => !!state.auth.accessToken);

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
	if (pathname === "/admin/course-details") return null;
	if (pathname === `/admin/course-edit/${id}`) return null;
	if (pathname === `/admin/class-edit/${id}/${courseId}`) return null;
	if (pathname === `/admin/class/${id}`) return null;

	const navWithOpacity = location.pathname !== "/" ? "withOpacity" : "";
	const navWithOpacity2 = location.pathname !== "/profile" ? "withOpacity" : "";
	const navWithOpacity3 = location.pathname !== "/cart" ? "withOpacity" : "";
	const navWithOpacity4 = location.pathname !== "/menu-consultancy" ? "withOpacity" : "";
	const navWithOpacity5 = location.pathname !== "/termsAndConditions" ?  "withOpacity" : "";
	const navWithOpacity6 = location.pathname !== "/CancellationPolicy" ?  "withOpacity" : "";

	return (

		

		<>
			<nav
				className={`bg-black border-b-2 border-[#383838] relative ${
					navWithOpacity &&
					navWithOpacity2 &&
					navWithOpacity3 &&
					navWithOpacity4 &&
					navWithOpacity5 &&
					navWithOpacity6
				}`}
			>
				<div className="w-11/12 mx-auto lg:flex justify-between pt-8 pb-3">
					<div className="flex justify-between">
						<a href="/">
							<img src={CookLogo} className="h-12 md:h-20"></img>
						</a>
						{/* menu */}
						<i
							onClick={() => setOpen(!open)}
							class={`${
								open ? "fa-solid fa-xmark" : "fa-solid fa-bars"
							} xs:text-3xl md:text-4xl md:pt-5 xs:block lg:hidden grid place-items-center`}
						></i>
					</div>
					<div className="">
						<ul
							className={`${
								open ? "block " : "xs:hidden lg:flex"
							} flex xs:flex-col  lg:flex-row lg:items-center xs:gap-10 xs:pt-5 lg:gap-10 text-[#ffffffcc] font-medium tracking-wide`}
						>
							<li>
								<NavLink exact to="/">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/about-us">About Us</NavLink>
							</li>
							<li>
								<NavLink to="/cooking-class">Cooking Class</NavLink>
							</li>
							<li>
								<NavLink to="/kitchen-studio">Kitchen Studio</NavLink>
							</li>
							
							<li>
								<NavLink to='/cart'><i class="text-xl fa-solid fa-cart-shopping"></i></NavLink>
							</li>
							<li className="">
								<NavLink to={loggedIn ? "/profile" : '/login'}>
									<img src={Profpic} className="h-14 rounded-full"></img>
								</NavLink>
							</li>
							<li>
								<LanguageOpt onChange={(e)=> handleClick(e)}/>
							</li>
						</ul>
					</div>
				</div>
				{/*  */}

				{/*  */}
			</nav>
			
		</>
	);
}

export default Navbar;
