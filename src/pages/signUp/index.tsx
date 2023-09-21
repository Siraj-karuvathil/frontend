import { useFormik } from "formik";
import * as Yup from "yup";
import React, { FC, memo, useEffect, useMemo } from "react";
import useToggle from "../../hooks/useToggle";
import { signupAction } from "../../redux/thunks/authThunk";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

let p1 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099281/Cooking%20Academy%20Assets/Login-Signup/vadim-markin-Dn82UF7qsso-unsplash_u9zgzm.jpg";
let p2 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099281/Cooking%20Academy%20Assets/Login-Signup/nordwood-themes-wtevVfGYwnM-unsplash_wtwkjh.jpg";
let p3 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099281/Cooking%20Academy%20Assets/Login-Signup/pexels-mister-mister-3434523_bj7xu1.jpg";
let p4 =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671099282/Cooking%20Academy%20Assets/Login-Signup/pexels-rajesh-tp-1633525_xmjtun.jpg";
let logo =
    "https://res.cloudinary.com/dvbplh4z9/image/upload/v1671101445/Cooking%20Academy%20Assets/Login-Signup/Layer_2_tzsagt.svg";

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').label("Confirm Password"),
});

type Names = "username" | "password" | "email" | "confirmPassword";

type InputTypes = "text" | "password" | "email";

interface InputFieldItem {
    name: Names;
    type: InputTypes;
    placeholder: string;
}

interface InputItemProps {
    input: InputFieldItem;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    error: string | undefined;
}

const InputItemComp: FC<InputItemProps> = ({ input, onChange, value, error }) => {
    const [showPass, toggleShowPass] = useToggle(false);
    const isPassword = input.type === "password";
    return (
        <>
            <div className="relative">
                <input
                    name={input.name}
                    onChange={onChange}
                    value={value}
                    className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 py-1 xl:py-1 rounded-lg"
                    type={isPassword && !showPass ? "password" : isPassword ? "text" : input.type}
                    placeholder={input.placeholder}
                    required
                />
                {isPassword && (
                    <div className="absolute xs:top-2 md:top-2 xl:top-2 right-5">
                        <i
                            className={`fa-solid ${!showPass ? "fa-eye" : "fa-eye-slash"}`}
                            onClick={toggleShowPass as any}
                        ></i>
                    </div>
                )}
            </div>
            {!!error && <p className="text-sm text-yellow-600">{error}</p>}
        </>
    );
};

const InputItem = memo(InputItemComp);

function SignUp() {
    const dispatch = useAppDispatch();
    const [signingUp, toggleSigningUp] = useToggle(false);
    const signUpForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit(values) {
            toggleSigningUp(true);
            dispatch(signupAction({
                email: values.email,
                confirmPassword: values.confirmPassword,
                password: values.password,
                username: values.username,
            })).finally(() => {
                toggleSigningUp(false);
            })
            console.log(values);
        },
    });

    const auth = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.data) {
            navigate('/', {
                replace: true,
            })
        }
    }, [auth.data, navigate]);

    const inputs: InputFieldItem[] = useMemo(
        () => [
            {
                name: "username",
                type: "text",
                placeholder: "Username",
            },
            {
                name: "email",
                type: "email",
                placeholder: "Email",
            },
            {
                name: "password",
                type: "password",
                placeholder: "Password",
            },
            {
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
            },
        ],
        []
    );

    return (
        <>
            <section className="h-screen w-full grid place-items-center">
                <div className="lg:h-[80vh] w-full overflow-hidden grid grid-cols-1 lg:grid-cols-6">
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={p1}
                        alt="img"
                    />
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={p2}
                        alt="img"
                    />
                    <div className="col-span-2 xs:w-[80%] xl:w-[70%] mx-auto flex flex-col justify-center  md:justify-start md:mt-5 2xl:mt-14 h-full">
                        <div className="grid place-items-center">
                        <NavLink to='/'>
                            <img
                                className="xs:h-fit md:h-14 xl:h-20 "
                                src={logo}
                                alt="logo"
                            />
                            </NavLink>
                        </div>
                        <p className="text-primary-clr2 py-5">
                            Already an user?
                            <a className="pl-5 text-text-dark" href="/login">
                                Sign In
                            </a>
                        </p>
                        <form
                            className="flex flex-col xs:gap-4 md:gap-3 xl:gap-2 justify-center"
                            onSubmit={signUpForm.handleSubmit}
                        >
                            {inputs.map((input) => (
                                <InputItem
                                    key={input.name}
                                    error={signUpForm.touched[input.name] ? signUpForm.errors[input.name] : undefined}
                                    input={input}
                                    onChange={signUpForm.handleChange}
                                    value={signUpForm.values[input.name]}
                                />
                            ))}
                            <p className="text-text-dark xs:text-xs md:text-[10px] xl:text-xs text-center md:w-[80%] mx-auto py-2">
                                By creating an account you agrre to our Terms of Service and
                                Privacy Policy
                            </p>
                            <button
                                type="submit"
                                disabled={signingUp}
                                className="bg-primary-dark hover:bg-primary-clr1 xs:py-1 md:py-0 xl:py-1 transition-all duration-200 rounded-md"
                            >
                                {signingUp ? "Please Wait..." : "Sign Up"}
                            </button>
                        </form>
                       {/* <p className="text-xs text-text-dark text-center py-5">
                            or sign up using
                        </p>
                        <div className="flex gap-4 justify-center">
                            <i className="text-primary-clr1 hover:text-white transition-all duration-200 text-2xl fa-brands fa-google"></i>
                            <i className="text-primary-clr1 hover:text-white transition-all duration-200 text-2xl fa-brands fa-facebook"></i>
                            <i className="text-primary-clr1 hover:text-white transition-all duration-200 text-3xl fa-brands fa-apple"></i>
                        </div>*/}
                    </div>
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={p3}
                        alt="img"
                    />
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={p4}
                        alt="img"
                    />
                </div>
            </section>
        </>
    );
}

export default memo(SignUp);
