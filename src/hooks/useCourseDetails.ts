import { useCallback, useEffect, useState } from 'react'
import instance from '../API/api_instance';
import { Response } from '../API/services/types';
import { Course } from '../redux/slices/courseSlice';

export const fetchCourseService =async (courseId: string) => {
    const url = '/gust/course/' + courseId;
    const res = await instance.get<Response<{course: Course}>>(url);
    return res.data;
}

const useCourseDetails = (courseId: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [fetching, setFetching] = useState(false);

  const fetchCourse = useCallback(
    () => {
      if(courseId) {
        setFetching(true)
        fetchCourseService(courseId)
        .then(res => {
            setCourse(res.data.course);
        })
        .catch(err => {})
        .finally(() => {
            setFetching(false);
        })
      }
    },
    [courseId],
  )

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);
  
  return {course, fetching}
}

export default useCourseDetails