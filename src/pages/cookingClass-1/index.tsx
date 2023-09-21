import { useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Progress from "./progress";
import Activeclass from "./activeClass";
import Moreclass from "./moreClass";
import useCourseDetails from "./useClassDetails";
import LessonDetails from "./lesson-details";
import { VideoControlls } from "./mainVideo";

function Cookingclass() {
	const [selectedClass, setSelectedClass] = useState(0);
	const [selectedLesson, setSelectedLesson] = useState(0);
	const location = useLocation();
	const courseId = location.search?.split("?")?.[1]?.split("=")?.[1] || "";
	const { classData, fetching } = useCourseDetails(courseId);

	const isClassEmpty = !classData?.classes.length;

	const selectedClassDetails = useMemo(
		() => classData?.classes?.[selectedClass] || null,
		[classData?.classes, selectedClass]
	);

	const selectedLessonDetails = useMemo(
		() => selectedClassDetails?.lessons?.[selectedLesson] || null,
		[selectedClassDetails?.lessons, selectedLesson]
	);

	const totalLessons = useMemo(
		() => selectedClassDetails?.lessons.length || 0,
		[selectedClassDetails?.lessons.length]
	);

	const hasNextVideo = useMemo(
		() => selectedLesson < totalLessons - 1,
		[selectedLesson, totalLessons]
	);
	const hasPrevVideo = useMemo(() => selectedLesson > 0, [selectedLesson]);

	const handleNextVideo = useCallback(() => {
		setSelectedLesson((prev) => Math.max(totalLessons - 1, prev + 1));
	}, [totalLessons]);

	const handlePrevVideo = useCallback(() => {
		setSelectedLesson((prev) => Math.max(0, prev - 1));
	}, []);

	const handleSelectClass = useCallback((classIdx: number) => {
		setSelectedClass(classIdx);
	}, []);

	const videoControls: VideoControlls = useMemo(
		() => ({
			hasNextVideo,
			hasPrevVideo,
			onNextVideo: handleNextVideo,
			onPrevVideo: handlePrevVideo,
		}),
		[handleNextVideo, handlePrevVideo, hasNextVideo, hasPrevVideo]
	);

	if (isClassEmpty) {
		return (
			<section className="w-full">
				<div className="flex w-full min-h-[70vh] items-center justify-center">
					{fetching ? (
						<div
							className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
							role="status"
						>
							<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
								Loading...
							</span>
						</div>
					) : (
						<p className="text-xl">No Class Found for this course</p>
					)}
				</div>
			</section>
		);
	}

	return (
		<section className="w-11/12 mx-auto xs:flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-3 gap-16 relative mt-32">
			<div className="bg-zinc-800 p-10 md:my-5 rounded-[2rem] relative h-fit">
				<span className="xs:hidden md:block absolute top-10 xs:-left-5 lg:-left-10">
					<i className="text-primary-clr2 text-3xl fa-solid fa-trophy"></i>
				</span>
				<Progress />
				{classData?.classes?.map((classInfo, i) =>
					selectedClass === i ? (
						<Activeclass
							selectedLesson={selectedLesson}
							classInfo={classInfo}
						/>
					) : (
						<Moreclass
							idx={i}
							onSelect={handleSelectClass}
							classInfo={classInfo}
						/>
					)
				)}
			</div>
			<LessonDetails
				videoControls={videoControls}
				selectedLesson={selectedLesson}
				lesson={selectedLessonDetails}
				classDetails={selectedClassDetails}
			/>
		</section>
	);
}

export default Cookingclass;
