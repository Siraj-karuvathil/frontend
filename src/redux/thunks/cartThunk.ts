import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../API/api_instance";
import { CartData } from "../slices/cartSlice";

interface ResponseData<T = null> {
    "statusCode": number;
    "message": string;
    "data": T;
}

const addCourseToCartService = async (itemId: string) => {
    const res = instance.post('student/cart', {
        itemId,
    })
    return res;
}
const deleteCourseFromCartService = async (itemId: string) => {
    const res = instance.delete('student/cart', {
        data : {
            itemId
        }
    })
    return res;
}

export const fetchCart = createAsyncThunk("fetch/cart", async () => {
    const cart = await instance.get<ResponseData<CartData>>('/student/cart');
    return cart;
});

export const addToCart = createAsyncThunk("addTo/cart", async (itemId: string, ThunkApi) => {
    const cart = await addCourseToCartService(itemId);
    await ThunkApi.dispatch(fetchCart());
    return cart;
});

export const deleteFromCart = createAsyncThunk("deleteFrom/cart", async (itemId: string, ThunkApi) => {
    const cart = await deleteCourseFromCartService(itemId);
    await ThunkApi.dispatch(fetchCart());
    return cart;
});

