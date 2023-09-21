import { createSlice, SerializedError } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchUser, loginAction, logoutAction, signupAction } from "../../thunks/authThunk";
import { getAccessToken, getRefreshToken } from "../../../helpers/localStorage";

export interface UserData {
	email: string;
	status: string;
	createdBy: string;
	address: string;
	city: string;
	state: string;
	countryId: string;
	pincode: string;
	gender: string;
	location: string;
	designation: string;
	qualification: string;
	_id: string;
	username: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface AuthState {
	data: UserData | null;
	status: "idle" | "loading" | "error";
	error: SerializedError | null;
	accessToken: null | string;
	refreshToken: null | string;
}

const initialState: AuthState = {
	data: null,
	accessToken: null,
	refreshToken: null,
	status: "idle",
	error: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchUser.pending, function (state) {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchUser.fulfilled, function (state, action) {
				state.data = action.payload;
				state.status = "idle";
			})
			.addCase(fetchUser.rejected, function (state, action) {
				state.error = action.error;
				state.data = null;
			})
			.addCase(loginAction.pending, function (state) {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loginAction.fulfilled, function (state, action) {
				state.status = "idle";
				state.accessToken = action.payload.accessToken;
				state.refreshToken = action.payload.refreshToken;
			})
			.addCase(loginAction.rejected, function (state, action) {
				state.error = action.error;
				state.status = "idle";
			})

			.addCase(signupAction.pending, function (state) {
				state.status = "loading";
				state.error = null;
			})
			.addCase(signupAction.fulfilled, function (state, action) {
				state.status = "idle";
				state.accessToken = action.payload.accessToken;
				state.refreshToken = action.payload.refreshToken;
			})
			.addCase(signupAction.rejected, function (state, action) {
				state.error = action.error;
				state.status = "idle";
			})
			.addCase(logoutAction.pending, function (state) {
				state.status = "loading";
				state.error = null;
			})
			.addCase(logoutAction.fulfilled, function (state, action) {
				localStorage.clear();
				state.status = "idle";
				state.accessToken = null;
				state.refreshToken = null;
				state.data = null;
			})
			.addCase(logoutAction.rejected, function (state, action) {
				state.error = action.error;
				state.status = "idle";
			});
	},
	reducers: {
		updateUser(state, action: PayloadAction<UserData>) {
			state.data = action.payload;
		},
		upadateAccessToken(state, action: PayloadAction<string | null>) {
			state.accessToken = action.payload;
		},
		upadateRefreshToken(state, action: PayloadAction<string | null>) {
			state.refreshToken = action.payload;
		},
		syncTokens(state) {
			state.accessToken = getAccessToken() || null;
			state.refreshToken = getRefreshToken() || null;
		},
		removeUser(state) {
			state.data = null;
		},
		logout(state) {
			localStorage.clear();
			state.accessToken = null;
			state.refreshToken = null;
			state.data = null;
		},
	},
});

export const {
	logout,
	updateUser,
	removeUser,
	syncTokens,
	upadateAccessToken,
	upadateRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
