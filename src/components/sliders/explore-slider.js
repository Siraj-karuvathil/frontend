import React, { memo, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../pages/home/style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import instance from "../../API/api_instance";
import useAddCourseToCart from "../../hooks/useAddCourseToCart";
import useAppSelector from "../../redux/hooks/useAppSelector";

function SampleNextArrow({ onClick }) {
	return (
		<div className="arroww2 arroww-right2" onClick={onClick}>
			<i class="fa-solid fa-arrow-right"></i>
		</div>
	);
}

function SamplePrevArrow({ onClick }) {
	return <div className="" onClick={onClick}></div>;
}

function Exploreslider() {
	const [course, setCourse] = useState([]);
	const navigate = useNavigate("");

	useEffect(() => {
		const fetchItems = async () => {
			await instance.get("/gust/course", {}).then((response) => {
				setCourse(response.data.data.courses);
			});
		};
		fetchItems();
	}, []);

	// -------------------API CALL-----------------------//

	var settings = {
		dots: false,
		infinite: true,
		speed: 2000,
		autoplay: true,
		slidesToShow: course.length > 4 ? 4 : course.length,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const { adding, handleAddCourseToCart } = useAddCourseToCart();
	const mycourses = useAppSelector(
		(state) => state?.course?.myCourse?.data?.courses || []
	);
	const onEnroll = (item) => {
		handleAddCourseToCart(item._id);
	};

	return (
		<>
			<section className="text-white lg:pl-14 overflow-hidden">
				<Slider {...settings} className="w-full py-5 bg-[#131212]">
					{course &&
						course.length > 0 &&
						course
							?.slice(0)
							.reverse()
							.map((item, index) => {
								const alreadyPurchased = mycourses.some(
									(cs) => cs._id === item._id
								);
								const addingItem = adding === item._id;
								return (
									<div className="relative ui-card 2xl:px-20" key={index}>
										<LazyLoadImage
											className="rounded-2xl card-img xs:h-[500px] w-fit mx-auto md:h-full md:w-[411px]"
											src={item.image}
										/>
										<div className="centered">
											{/* <p className="text-xl font-bold text-center uppercase">
												{item.name}
											</p> */}

											<div className="flex flex-col  gap-5 w-64 md:w-52 lg:w-64 mx-auto pb-3 mt-8">
												<a
													href="#item"
													className="bg-white rounded-lg text-black py-2.5 text-center font-semibold cursor-pointer"
													disabled={addingItem}
													onClick={(e) => {
														e.preventDefault();
														if (!alreadyPurchased) {
															onEnroll(item);
														} else {
															navigate("/cooking-class-1?courseId=" + item._id);
														}
													}}
												>
													{alreadyPurchased
														? "View Classes"
														: addingItem
														? "ADDING ITEM..."
														: "ENROLL NOW"}
												</a>
												<NavLink
													to={`/cooking-class/${item._id}`}
													className="bg-white rounded-lg text-black py-2.5 text-center font-medium cursor-pointer"
												>
													<i class="pr-2 fa-solid fa-circle-info"></i>VIEW CLASS
													INFO
												</NavLink>
											</div>
										</div>
									</div>
								);
							})}
				</Slider>
			</section>
		</>
	);
}

export default memo(Exploreslider);
