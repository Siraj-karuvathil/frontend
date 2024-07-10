import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import { loginAction } from "../../redux/thunks/authThunk";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { NavLink } from "react-router-dom";
import {Logp1,Logp2,Logp3,Logp4,CookLogo} from '../../Assets'

const validationSchema = Yup.object({
	username: Yup.string().required(),
	password: Yup.string().required(),
});

function Login() {
	const [open1, setOpen1] = useState(false);
	// handle toggle
	const toggle1 = () => {
		setOpen1(!open1);
	};

	const dispatch = useAppDispatch();
	const auth = useAppSelector(state => state.auth);
	const [loggingIn, setLogingIn] = useState(false);
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const referrer = searchParams.get('referrer');

	useEffect(() => {
		if (auth.data) {
			navigate(referrer ? referrer : '/', {
				replace: true,
			})
		}
	}, [auth.data, navigate, referrer]);


	const loginForm = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema,
		onSubmit: (values) => {
			setLogingIn(true);
			dispatch(loginAction(values))
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					setLogingIn(false);
				})
		},
	});

	return (
		<>
			<section className="h-screen w-full grid place-items-center">
				<div className="lg:h-[80vh] w-full overflow-hidden grid grid-cols-1 lg:grid-cols-6 place-items-center">
					<img
						className="xs:hidden lg:block w-full h-full"
						src={Logp1}
						alt="img"
					/>
					<img
						className="xs:hidden lg:block w-full h-full "
						src={Logp2}
						alt="img"
					/>
					<div className="col-span-2 xs:w-[80%] xl:w-[70%] mx-auto flex flex-col mt-10 xl:mt-20 2xl:mt-44  h-full">
						<NavLink to='/'>
							<div className="grid place-items-center">
								<img className="xs:h-fit md:h-14 xl:h-20  " src={CookLogo} alt="logo" />
							</div>
						</NavLink>
						<p className="text-primary-clr2 py-5">
							New user?
							<a className="pl-5 text-text-dark" href={`/signup${referrer ? `?referrer=${referrer || "/"}` : ""}`}>
								Create an account
							</a>
						</p>
						<form className="flex flex-col xs:gap-5 md:gap-5 xl:gap-2 justify-center" onSubmit={loginForm.handleSubmit}>
							<input
								className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 xs:py-1.5 md:py-1 xl:py-1.5 rounded-lg"
								type="text"
								placeholder="Username*"
								required
								name="username"
								onChange={loginForm.handleChange}
							/>
							<div className="relative">
								<input
									className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 xs:py-1.5 md:py-1 xl:py-1.5 rounded-lg"
									type={open1 === false ? "password" : "text"}
									placeholder="Password*"
									required
									name="password"
									onChange={loginForm.handleChange}
								/>
								<div className="absolute xs:top-2 md:top-2 xl:top-2 right-5">
									{open1 === false ? (
										<i class="fa-solid fa-eye" onClick={toggle1}></i>
									) : (
										<i class="fa-solid fa-eye-slash" onClick={toggle1}></i>
									)}
								</div>
							</div>
							<p className="text-right text-sm hover:underline cursor-pointer"><Link to={'/forget-password'}>Forgot Password ?</Link></p>
							<button
								type="submit"
								disabled={loggingIn}
								className="bg-primary-dark hover:bg-primary-clr1 xs:py-1 md:py-0 xl:py-1.5 transition-all duration-200 rounded-md"
							>
								{loggingIn ? "Please Wait..." : "Sign In"}
							</button>
						</form>
						{/*<p className="text-xs text-text-dark text-center py-5">
							or sign up using
						</p>
						<div className="flex gap-4 justify-center">
							<i class="text-primary-clr1 hover:text-white transition-all duration-200 text-2xl fa-brands fa-google"></i>
							<i class="text-primary-clr1 hover:text-white transition-all duration-200 text-2xl fa-brands fa-facebook"></i>
							<i class="text-primary-clr1 hover:text-white transition-all duration-200 text-3xl fa-brands fa-apple"></i>
									</div>*/}
					</div>
					<img
						className="xs:hidden lg:block w-full h-full"
						src={Logp3}
						alt="img"
					/>
					<img
						className="xs:hidden lg:block w-full h-full"
						src={Logp4}
						alt="img"
					/>
				</div>
			</section>
		</>
	);
}

export default Login;
