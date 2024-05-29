import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchUserData from "../../API/services/fetchUserData";
import loginWithCredentials, {
	LoginCredentials,
} from "../../API/services/login";
import signupWithCredentials, {
	SignupCredentials,
} from "../../API/services/signup";
import { setAccessToken, setRefreshToken } from "../../helpers/localStorage";
import { syncTokens } from "../slices/authSlice";
import { clearMyCourse, fetchMyCourse } from "../slices/courseSlice";
import { fetchCart } from "./cartThunk";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const fetchUser = createAsyncThunk("fetch/user", async (_, ThunkApi) => {
	ThunkApi.dispatch(syncTokens());
	try {
		const res = await fetchUserData();
		ThunkApi.dispatch(fetchCart());
		ThunkApi.dispatch(fetchMyCourse());
		return res.data;
	} catch (error) {
		throw error;
	}
});

export const loginAction = createAsyncThunk(
	"login/action",
	async (credentials: LoginCredentials, ThunkApi) => {
		try {
			const res = await loginWithCredentials(credentials);
			const accessToken = res.headers["auth-access-token"];
			const refreshToken = res.headers["auth-refresh-token"];
			if (!accessToken || !refreshToken) {
				throw new Error("No access token obtained");
			}
			setAccessToken(accessToken);
			setRefreshToken(refreshToken);
			ThunkApi.dispatch(fetchUser());
			return {
				accessToken,
				refreshToken,
			};
		} catch (error) {
			const err = error as AxiosError<any>;
			toast.error(
				err?.response?.data?.message || err?.message || "Something went wrong"
			);
			throw error;
		}
	}
);

export const signupAction = createAsyncThunk(
	"signup/action",
	async (credentials: SignupCredentials, ThunkApi) => {
		try {
			await signupWithCredentials(credentials);
			const res = await loginWithCredentials(credentials);
			const accessToken = res.headers["auth-access-token"];
			const refreshToken = res.headers["auth-refresh-token"];
			if (!accessToken || !refreshToken) {
				throw new Error("No access token obtained");
			}
			setAccessToken(accessToken);
			setRefreshToken(refreshToken);
			ThunkApi.dispatch(fetchUser());
			return {
				accessToken,
				refreshToken,
			};
		} catch (error) {
			throw error;
		}
	}
);

export const logoutAction = createAsyncThunk(
	"logout/action",
	async (_, ThunkApi) => {
		ThunkApi.dispatch(clearMyCourse());
	}
);
