import { memo } from "react";
import { ClassInfo } from "./useClassDetails";

interface ActiveClassProps {
	classInfo: ClassInfo;
	selectedLesson: number;
}

function ActiveClass({ classInfo, selectedLesson }: ActiveClassProps) {
	const selectedLessonNumber = selectedLesson + 1;
	const percentage = classInfo.lessons.length
		? (selectedLessonNumber / classInfo.lessons.length) * 100
		: 0;
	return (
		<>
			<div className="flex flex-col gap-3">
				<p className="text-xl font-semibold">Content Navigator</p>
				<div className="flex xs:flex-col xl:flex-row justify-between lg:items-center bg-black p-4 rounded-2xl">
					<div className="flex flex-col gap-2">
						<p>Chapter</p>
						<p className="text-base font-medium">{classInfo.chapterTitle}</p>
						<div className="flex gap-5">
							<span className="flex gap-2 text-sm">
								<i className="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
								<p>Video {classInfo.lessons.length}</p>
							</span>
							<span className="flex gap-2 text-sm">
								<i className="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
								<p>1 hrs</p>
							</span>
						</div>
					</div>
					<div className="progresess">
						<span
							className="title timer"
							data-from="0"
							data-to={percentage.toString()}
							data-speed="1500"
						>{`${selectedLessonNumber || 1}/${classInfo.lessons.length}`}</span>
						<div className="overlay"></div>
						<div className="left"></div>
						<div className="right"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(ActiveClass);
