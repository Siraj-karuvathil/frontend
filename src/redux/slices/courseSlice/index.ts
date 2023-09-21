import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";
import instance from "../../../API/api_instance";
import { Response } from "../../../API/services/types";

export interface CourseData {
	courses: Course[];
	total: number;
}

export interface Course {
	image: string;
	instructorName: string;
	about: string;
	unit: number;
	lesson: number;
	task: number;
	subscriptionCount: number;
	_id: string;
	name: string;
	duration: string;
	price: number;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const listCourseService = async () => {
	const res = await instance.get<Response<CourseData>>(
		"/student/course/my-course"
	);
	return res.data;
};

export const fetchMyCourse = createAsyncThunk('fetchMyCourse', async () => {
    const courses = await listCourseService();
    return courses.data
})

interface MyCourse {
    data: null | CourseData;
    status: "idle" | "loading" | "error";
    error: SerializedError | null;
}

interface CourseState {
    myCourse: MyCourse;
}

const initialState: CourseState = {
    myCourse: {
        data: null,
        status: 'idle',
        error: null,
    },
};

export const courseSlice = createSlice({
	name: "course",
	initialState,
	reducers: {
        clearMyCourseError: (state) => {
            state.myCourse.error = null;
            state.myCourse.status = 'idle';
        },
        clearMyCourse: (state) => {
            state.myCourse.data = null;
            state.myCourse.error = null;
            state.myCourse.status = 'idle';
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchMyCourse.pending, (state) => {
            state.myCourse.status = 'loading';
        })
        .addCase(fetchMyCourse.rejected, (state, action) => {
            state.myCourse.status = 'error';
            state.myCourse.error = action.error;
        })
        .addCase(fetchMyCourse.fulfilled, (state, action) => {
            state.myCourse.status = 'idle';
            state.myCourse.data = {
                ...action.payload,
                courses: action.payload.courses.filter(c => c !== null),
            }
        })
    },
});

export const {clearMyCourseError, clearMyCourse} = courseSlice.actions;

export default courseSlice.reducer;