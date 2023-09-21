import instance from "../api_instance";
import routes from "./routes";

export interface LoginCredentials {
    username: string;
    password: string;
}

export default async function loginWithCredentials(credentials: LoginCredentials) {
    const res = await instance.post(routes.login, credentials);
    return res;
}