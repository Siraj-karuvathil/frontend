import React from "react";
import { ClassInfo } from "./useClassDetails";

interface MoreClassProps {
	classInfo: ClassInfo;
	onSelect: (idx: number) => void;
  idx: number;
}

function MoreClass({ classInfo, onSelect, idx }: MoreClassProps) {
	return (
		<div onClick={() => onSelect(idx)} className="flex cursor-pointer justify-between items-center p-4">
			<div className="flex flex-col gap-2">
				<div className="flex gap-5">
					<span className="flex gap-2 text-sm">
						<i className="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
						<p>Video(s) {classInfo.lessons.length}</p>
					</span>
					<span className="flex gap-2 text-sm">
						<i className="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
						<p>1 hrs</p>
					</span>
				</div>
				<p className="text-base font-medium">{classInfo.chapterTitle}</p>
			</div>

			<i className="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
		</div>
	);
}

export default MoreClass;
