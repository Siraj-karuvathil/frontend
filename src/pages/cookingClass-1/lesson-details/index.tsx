import { FC, memo } from "react";
import Classinfo from "../classinfo";
import MainVideo, { VideoControlls } from "../mainVideo";
import { ClassInfo, Lesson } from "../useClassDetails";

interface LessonDetailsProps {
	lesson: Lesson | null;
	selectedLesson: number;
	videoControls: VideoControlls;
    classDetails: ClassInfo | null;
}

const LessonDetails: FC<LessonDetailsProps> = ({
	lesson,
	selectedLesson,
	videoControls,
    classDetails,
}) => {
	return (
		<div className="lg:col-span-2 md:my-5 overflow-hidden">
			<MainVideo
				videoControls={videoControls}
				selectedLesson={selectedLesson}
				lesson={lesson}
			/>
			<Classinfo classDetails={classDetails} lesson={lesson} />
		</div>
	);
};

export default memo(LessonDetails);
