import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { fetchCart } from "../../thunks/cartThunk";
import { Course } from "../courseSlice";

export interface CartData {
	itemId: Course[];
	_id: string;
	userId: string;
	price: number;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface CartState {
	data: CartData | null;
	status: "idle" | "loading" | "error";
	error: SerializedError | null;
}

const initialState: CartState = {
	data: null,
	status: "idle",
	error: null,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
    extraReducers (builder) {
        builder.addCase(fetchCart.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.data = action.payload.data.data;
            state.error = null;
            state.status = 'idle';
        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.error = action.error;
            state.status = 'idle';
        })
    }
});

export default cartSlice.reducer;
