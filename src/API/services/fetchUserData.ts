import { UserData } from "../../redux/slices/authSlice";
import instance from "../api_instance";
import routes from "./routes";
import { Response } from "./types";

export default async function fetchUserData() {
    const res = await instance.get<Response<UserData>>(routes.profile);
    return res.data;
}