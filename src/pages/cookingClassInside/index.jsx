import { useNavigate, useParams } from "react-router";
import {useTranslation} from 'react-i18next';
import "./style.css";
import Slide from "../../components/sliders/cooking-inner-slider";
import ENQ from "../../components/Enquiry";
import FAQ from "../../components/Faq";
import LSA from "../../components/LatYearAchive";
import MOC from "../../components/MeetOurChefs";
import CLASSES from "../../components/ExploreClasses";
import useCourseDetails from "../../hooks/useCourseDetails";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { useCallback } from "react";
import useAddCourseToCart from "../../hooks/useAddCourseToCart";
import { NavLink } from "react-router-dom";

let bgVideo =
    "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4";
let P1 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_155_s1lgmw.webp";
let P2 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270926/Cooking%20Academy%20Assets/cooking%20class/Rectangle_156_o743ij.webp";
let P3 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_157_fxt9s1.webp";
let P4 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_158_gbj3al.webp";
let P5 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_165_zopg94.webp";
let P6 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_166_wsbqcj.webp";
let P7 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_167_qkjplb.webp";
let P8 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270926/Cooking%20Academy%20Assets/cooking%20class/Rectangle_168_vpo3nx.webp";

function CookingclassInside() {


        // ========================//
	  const {t} = useTranslation();
      // ========================//

    const { name: courseId } = useParams();
    const navigate = useNavigate();
    const mycourses = useAppSelector(
        (state) => state?.course?.myCourse?.data?.courses || []
    );
    const alreadyPurchased = mycourses.some((cs) => cs._id === courseId);
    const { course, fetching } = useCourseDetails(courseId);
    const { adding, handleAddCourseToCart } = useAddCourseToCart();

    const handleEnroll = useCallback(
        () => {
            if (alreadyPurchased) {
                navigate('/cooking-class-1?courseId=' + courseId);
            } else {
                handleAddCourseToCart(courseId);
            }
        },
        [alreadyPurchased, courseId, handleAddCourseToCart, navigate],
    )


    return (
        <>
            {/* ================Banner=================== */}
            <section className="relative">
                <div className="w-[100%] h-[100vh]">
                    <video
                        src={bgVideo}
                        autoPlay
                        loop
                        muted
                        className="w-[100%] h-[100%] object-cover"
                    />
                </div>

                <div className="ban-video-content md:pt-40">
                    <h1 className="font-bold text-center xs:text-4xl md:text-7xl  uppercase">{course?.name}</h1>
                    <p className="xs:w-[90%] md:w-[30%] mx-auto text-xl text-center py-5">
                        {t('clsinnerpara')}
                    </p>
                    <div className="grid place-items-center">
                        <NavLink to='/profile'><a className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl">
                            <i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>
                            {t('gotobtn')}
                        </a></NavLink>
                    </div>
                </div>
            </section>
            {/* ================Banner=================== */}

            {/* ================About class=================== */}
            <section className="relative w-11/12 mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 xs:gap-y-10 md:gap-x-10 py-20">
                    <div data-aos="fade-right">
                        <h1 className="xs:text-3xl md:text-4xl font-bold">{t('abpoutcls')}</h1>
                        <p className="text-xl py-5">{course?.about}</p>
                        <p>{t('instructor')} : {course?.instructorName}</p>
                        <p className="pt-2">{t('clslenght')} : {course?.duration}</p>
                    </div>
                    <div className="grid place-items-center" data-aos="fade-right">
                        <div className="border-[1px] border-primary-clr2 xs:w-[90%] lg:w-[70%] mx-auto grid place-items-center py-5">
                            {!alreadyPurchased ? (
                                <>
                                    <p className="uppercase text-xl font-light">
                                        14-day free cancellation
                                    </p>
                                    <h1 className="text-5xl py-3 text-primary-clr2 font-bold">
                                        QAR{course?.price}
                                    </h1>
                                    <p className="text-xs pb-2">Terms and Conditions apply</p>
                                </>
                            ) : (
                                <h2 className="text-3xl py-3 text-primary-clr2 font-bold">
                                    Already Enrolled
                                </h2>
                            )}
                            <button
                                className="bg-primary-clr2 hover:bg-primary-clr1 w-full text-center py-3"
                                onClick={handleEnroll}
                                disabled={!!adding}
                            >
                                {alreadyPurchased ? "View Classes" : adding ? "Please Wait" : "Enroll Now"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-10/12 mx-auto xs:py-5 md:py-10">
                    <div className="flex gap-10" data-aos="fade-right">
                        <i class="text-4xl text-primary-clr2 fa-solid fa-photo-film"></i>
                        <p className="grid place-items-center xs:text-base lg:text-xl">
                            {course?.unit} {t('units')} | {course?.lesson} {t('lessons')} | {course?.task}{" "}
                            {t('tasks')}
                        </p>
                    </div>
                    <div className="flex gap-10" data-aos="fade-right">
                        <i class="text-4xl text-primary-clr2 fa-solid fa-download"></i>
                        <p className="grid place-items-center xs:text-base lg:text-xl">
                            {t('download')}
                        </p>
                    </div>
                    <div className="flex gap-10" data-aos="fade-right">
                        <i class="text-4xl text-primary-clr2 fa-solid fa-volume-high"></i>
                        <p className="grid place-items-center xs:text-base lg:text-xl">
                            {" "}
                            {t('audio')}
                        </p>
                    </div>
                    <div className="flex gap-10" data-aos="fade-right">
                        <i class="text-4xl text-primary-clr2 fa-solid fa-file-pdf"></i>
                        <p className="grid place-items-center xs:text-base lg:text-xl">
                            {t('guides')}
                        </p>
                    </div>
                </div>
            </section>
            {/* ================About class=================== */}

            {/* ================Quotes=================== */}
            <section className="quotes-bg mt-20">
                <div className="lg:w-[40%] float-right flex justify-center flex-col h-full lg:pr-32">
                    <h3 className="xs:w-[90%] lg:w-full mx-auto xs:text-3xl md:text-4xl xs:text-center md:text-left font-bold italic tracking-wider xs:leading-relaxed md:leading-relaxed">
                        {t('quotehead')}
                    </h3>
                    <p className="flex justify-center xs:text-xl md:text-2xl pt-4">
                        - {t('quotepara')}
                    </p>
                </div>
            </section>
            {/* ================Quotes=================== */}

            {/* ================Testimonial=================== */}
            <Slide />
            {/* ================Testimonial=================== */}

            {/* ================Gallery=================== */}
            <section className="w-11/12 mx-auto py-10">
                <h1 className="xs:text-3xl md:text-4xl font-bold text-center">
                    {t('gallery')}
                </h1>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-4 xs:pt-8 md:pt-16">
                    <div className="md:col-span-2">
                        <img
                            className="w-full h-full overflow-hidden hover:brightness-90"
                            src={P1}
                            alt="image"
                        />
                    </div>
                    <div className="">
                        <img
                            className="w-full h-full overflow-hidden hover:brightness-90"
                            src={P2}
                            alt="image"
                        />
                    </div>
                    <div className="grid grid-flow-row gap-10">
                        <img
                            className="w-full overflow-hidden hover:brightness-90"
                            src={P3}
                            alt="image"
                        />
                        <img
                            className="w-full overflow-hidden hover:brightness-90"
                            src={P4}
                            alt="image"
                        />
                    </div>
                    <img
                        className="w-full xs:h-full lg:h-52 overflow-hidden hover:brightness-90"
                        src={P5}
                        alt="image"
                    />
                    <img
                        className="w-full xs:h-full lg:h-52 overflow-hidden hover:brightness-90"
                        src={P6}
                        alt="image"
                    />
                    <img
                        className="w-full xs:h-full lg:h-52 overflow-hidden hover:brightness-90"
                        src={P7}
                        alt="image"
                    />
                    <img
                        className="w-full xs:h-full lg:h-52 overflow-hidden hover:brightness-90"
                        src={P8}
                        alt="image"
                    />
                </div>
            </section>
            {/* ================Gallery=================== */}

            {/* ================Enquiry=================== */}
            <ENQ />
            {/* ================Enquiry=================== */}

            {/* ================Classes=================== */}
            <section>
                <h3 className="w-11/12 mx-auto xs:text-2xl md:text-3xl font-semibold pb-5">
                    {t('otherclasses')}.
                </h3>
                <CLASSES />
            </section>
            {/* ================Classes=================== */}

            {/* ================FAQ=================== */}
            <FAQ />
            {/* ================FAQ=================== */}

            {/* ================CHEIF=================== */}
            <MOC />
            {/* ================CHEIF=================== */}

            {/* ================Achievment=================== */}
            <section className="pb-10">
                <LSA />
            </section>
            {/* ================Achievment=================== */}
        </>
    );
}

export default CookingclassInside;
