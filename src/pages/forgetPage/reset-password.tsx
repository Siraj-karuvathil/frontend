import React, { useEffect, useMemo } from "react";
import { Logp1, Logp2, Logp3, Logp4, CookLogo } from "../../Assets";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { useResetPassword } from "./hooks/useResetPassword";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	token: Yup.string().required("Token is required"),
	password: Yup.string().required("Password is required"),
	cPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const ResetPassword = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	const { resetPasswordMR } = useResetPassword();
	const initialToken = useMemo(() => params.get('token'), [params]);
	const form = useFormik({
		initialValues: {
			token: initialToken,
			email: "",
			password: "",
			cPassword: "",
		},
		validationSchema,
		onSubmit: (val) => {
			if (val.token) {
				resetPasswordMR.mutate({
					token: val.token,
					password: val.password,
					confirmPassword: val.cPassword,
					email: val.email,
				});
			}
		},
	});

	useEffect(() => {
		if (initialToken) {
			form.setFieldValue('token', initialToken)
		} else {
			navigate('/forget-password');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialToken])

	const renderError = (name: keyof typeof form.values) => {
		if (form.touched[name] && form.errors[name]) {
			return <p className="text-red-500 text-xs">{form.errors[name]}</p>
		}
		return null;
	}


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
					<div className="col-span-2 xs:w-[80%] xl:w-[70%] mx-auto flex flex-col justify-center gap-10  h-full xl:-mt-40">
						<NavLink to="/">
							<div className="grid place-items-center">
								<img
									className="xs:h-fit md:h-14 xl:h-20  "
									src={CookLogo}
									alt="logo"
								/>
							</div>
						</NavLink>

						<form
							onSubmit={form.handleSubmit}
							className="flex flex-col xs:gap-5 md:gap-5 xl:gap-4 justify-center"
						>
							<p className="text-center text-2xl capitalize">Reset Password</p>
							<div className="relative">
								<input
									className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 xs:py-1.5 md:py-1 xl:py-1.5 rounded-lg"
									type="email"
									placeholder="Email"
									required
									{...form.getFieldProps("email")}
								/>
							</div>
							{renderError('email')}
							<div className="relative">
								<input
									className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 xs:py-1.5 md:py-1 xl:py-1.5 rounded-lg"
									type="password"
									placeholder="Password"
									required
									{...form.getFieldProps("password")}
								/>
							</div>
							{renderError('password')}
							<div className="relative">
								<input
									className="bg-transparent w-full outline-none border-2 border-primary-clr2 px-1 xl:px-3 xs:py-1.5 md:py-1 xl:py-1.5 rounded-lg"
									placeholder="Confirm Password"
									required
									{...form.getFieldProps("cPassword")}
								/>
							</div>
							{renderError('cPassword')}
							<button
								disabled={resetPasswordMR.isPending}
								type="submit"
								className="bg-primary-dark hover:bg-primary-clr1 xs:py-1 md:py-0 xl:py-1.5 transition-all duration-200 rounded-md capitalize"
							>
								{resetPasswordMR.isPending ? "Loading..." : "Reset Password"}
							</button>
						</form>
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
};

export default ResetPassword;
