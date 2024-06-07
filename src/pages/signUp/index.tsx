import { useFormik } from "formik";
import * as Yup from "yup";
import React, { FC, memo, useEffect, useMemo } from "react";
import useToggle from "../../hooks/useToggle";
import { signupAction } from "../../redux/thunks/authThunk";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Logp1, Logp2, Logp3, Logp4, CookLogo } from "../../Assets";
import { toast } from "react-toastify";

// let p1 =
// 	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707725207/Cooking%20Academy%20Assets/ycjxpntdul0pukl8kwz9.jpg";
// let p2 =
// 	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707725207/Cooking%20Academy%20Assets/nzxgyd4kqdccev6zcu4o.jpg";
// let p3 =
// 	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707725208/Cooking%20Academy%20Assets/y6xp00ca0qd5usel8dim.jpg";
// let p4 =
// 	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707725209/Cooking%20Academy%20Assets/uenoqnkkwdzyuz2ronea.jpg";
// let logo =
// 	"https://res.cloudinary.com/dxcgqtuhj/image/upload/v1707725202/Cooking%20Academy%20Assets/tu2g3ztzck6q6kljxp69.svg";

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Confirm Password"),
    isAgree: Yup.boolean().required().isTrue("Should Accept Terms and Conditions").label("Terms and Conditions"),
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

const InputItemComp: FC<InputItemProps> = ({
    input,
    onChange,
    value,
    error,
}) => {
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
                    type={
                        isPassword && !showPass
                            ? "password"
                            : isPassword
                                ? "text"
                                : input.type
                    }
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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signingUp, toggleSigningUp] = useToggle(false);
    const signUpForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            isAgree: true,
        },
        validationSchema,
        onSubmit(values, formik) {
            toggleSigningUp(true);
            dispatch(
                signupAction({
                    email: values.email,
                    confirmPassword: values.confirmPassword,
                    password: values.password,
                    username: values.username,
                    onError(error) {
                        const errorRes = error.response?.data;
                        const message = errorRes.message;
                        const fieldErrors = errorRes.errors;
                        formik.setErrors(fieldErrors);
                        toast.error(message);
                    },
                    onSuccess() {
                        toast.success("Signed Up Successfully");
                    },
                })
            )
                .finally(() => {
                    toggleSigningUp(false);
                });
        },
    });

    const auth = useAppSelector((state) => state.auth);
    useEffect(() => {
        if (auth.data) {
            navigate("/", {
                replace: true,
            });
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

    const termsError = signUpForm.errors.isAgree;

    const hasValidationErrors = useMemo(() => !!Object.keys(signUpForm.errors).length, [signUpForm.errors]);

    return (
        <>
            <section className="h-screen w-full grid place-items-center">
                <div className="lg:h-[80vh] w-full overflow-hidden grid grid-cols-1 lg:grid-cols-6">
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={Logp4}
                        alt="img"
                    />
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={Logp3}
                        alt="img"
                    />
                    <div className="col-span-2 xs:w-[80%] xl:w-[70%] mx-auto flex flex-col justify-center  md:justify-start md:mt-5 2xl:mt-14 h-full">
                        <div className="grid place-items-center">
                            <NavLink to="/">
                                <img
                                    className="xs:h-fit md:h-14 xl:h-20 "
                                    src={CookLogo}
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
                                    error={
                                        signUpForm.touched[input.name]
                                            ? signUpForm.errors[input.name]
                                            : undefined
                                    }
                                    input={input}
                                    onChange={signUpForm.handleChange}
                                    value={signUpForm.values[input.name]}
                                />
                            ))}
                            <div className="flex items-center mb-4 gap-2">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    checked={signUpForm.values.isAgree}
                                    onChange={(e) => {
                                        signUpForm.setFieldValue("isAgree", e.target.checked);
                                    }}
                                    className="w-4 h-4 text-primary-clr1 bg-gray-100 border-gray-300 rounded focus:bg-primary-clr2 dark:focus:ring-primary-clr3 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-checkbox"
                                    className="text-text-dark xs:text-xs md:text-[10px] xl:text-xs text-center md:w-[80%] mx-auto py-2"
                                >
                                    By creating an account you agree to our Terms of Service and
                                    Privacy Policy
                                </label>
                            </div>
                            {!!termsError && <p className="text-sm text-yellow-600">{termsError}</p>}

                            <button
                                type="submit"
                                disabled={hasValidationErrors || signingUp}
                                className="disabled:bg-gray-400 bg-primary-clr1 hover:bg-primary-clr3 xs:py-1 md:py-0 xl:py-1 transition-all duration-200 rounded-md"
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
                        src={Logp2}
                        alt="img"
                    />
                    <img
                        className="xs:hidden lg:block w-full h-full"
                        src={Logp1}
                        alt="img"
                    />
                </div>
            </section>
        </>
    );
}

export default memo(SignUp);
