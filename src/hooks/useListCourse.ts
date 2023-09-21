import { useEffect } from "react";
import useAppDispatch from "../redux/hooks/useAppDispatch";
import useAppSelector from "../redux/hooks/useAppSelector";
import { fetchMyCourse } from "../redux/slices/courseSlice";

const useListCourse = () => {
	const course = useAppSelector((state) => state.course.myCourse);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchMyCourse());
	}, [dispatch])
	
	return { courses: course.data, fetching: course.status === "loading" };
};

export default useListCourse;
