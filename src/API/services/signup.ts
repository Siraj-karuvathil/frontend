import instance from "../api_instance";
import routes from "./routes";

export interface SignupCredentials {
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
}

export default async function signupWithCredentials(credentials: SignupCredentials) {
    const res = await instance.post(routes.signup, credentials);
    return res;
}