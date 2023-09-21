import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import instance from "../../API/api_instance";
import { Response } from "../../API/services/types";
import { Course } from "../../redux/slices/courseSlice";

export interface ClassData {
	classes: ClassInfo[];
	total: number;
}

export interface ClassInfo {
	instrecterName: string;
	_id: string;
	instructorName: string;
	chapterTitle: string;
	classInfo: string;
	lessons: Lesson[];
	courseId: Course;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface Lesson {
	title: string;
	videoLink: string;
	_id: string;
}

const fetchClassService = async (courseId: string) => {
	const url = "/student/class/:courseId/class".replace(":courseId", courseId);
	const res = await instance.get<Response<ClassData>>(url);
	return res.data;
};

const useClassDetails = (courseId?: string | null) => {
	const [fetching, setFetching] = useState(false);
	const [data, setData] = useState<ClassData | null>(null);
	const fetchClass = useCallback(() => {
		setFetching(true);
		if (courseId) {
			fetchClassService(courseId)
				.then((res) => {
					setData(res.data);
				})
				.catch((err: AxiosError) => {
					console.log(err);
				})
				.finally(() => {
					setFetching(false);
				});
		}
	}, [courseId]);

	useEffect(() => {
		fetchClass();
	}, [fetchClass]);

	return { fetching, classData: data };
};

export default useClassDetails;
