import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import instance from "../../API/api_instance";
import { CookLogo } from "../../Assets";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { onPurchaseDataLayer } from "../../helpers/dataLayer";
import useAppSelector from "../../redux/hooks/useAppSelector";

const validationSchema = Yup.object({
	firstName: Yup.string().required(),
	mobile: Yup.string().required(),
	email: Yup.string().required(),
	street: Yup.string().required(),
	city: Yup.string().required(),
	postalCode: Yup.string().required(),
});

const Login = () => {
	const [loggingIn, setLoggingIn] = useState(false);

	const [error, setError] = useState<string | null>(null);

	const cart = useAppSelector((state) => state.cart.data);

	const loginForm = useFormik({
		initialValues: {
			firstName: "",
			mobile: "",
			email: "",
			street: "",
			city: "",
			postalCode: "",
		},
		validationSchema,
		onSubmit: (values) => {
			setLoggingIn(true);
			setError(null);
			instance
				.post("/student/payment", values)
				.then((res) => {
					onPurchaseDataLayer(
						cart?.itemId.map((item) => ({
							id: item._id,
							name: item.name,
							price: item.price.toFixed(2),
							url: "/courses",
						})) ?? [],
						{
							affiliation: "",
							id: cart?._id ?? "",
							revenue: cart?.price.toFixed(2) ?? "",
							shipping: "0.00",
							tax: "0.00",
							coupon: "",
						}
					);
					if (res.data.data) {
						window.location = res.data.data;
					}
					// throw new Error("Failed To Checkout");
				})
				.catch((err) => {
					const message =
						err.response.data.message || err.message || "Something went wrong";
					toast(message, {
						type: "error",
					});
					setError(message);
				})
				.finally(() => {
					setLoggingIn(false);
				});
		},
	});

	return (
		<div className="grid mt-[5px] place-items-center h-screen bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1672734620/Cooking%20Academy%20Assets/baaaaner_oja0kt.jpg)]">
			<form
				onSubmit={loginForm.handleSubmit}
				className="bg-[#363636b2] flex flex-col gap-12 rounded-lg border-[1px] border-primary-clr2 py-10 px-5 xs:w-[90%] md:w-[50%] "
			>
				<img className="h-16" src={CookLogo} alt="logo" />
				<input
					name="firstName"
					className=" bg-transparent outline-none border-b-2 border-bg-darks py-2"
					type="text"
					required
					placeholder="first name*"
					onChange={loginForm.handleChange}
				/>
				<input
					className="bg-transparent w-full outline-none border-b-2 border-bg-darks py-2"
					type="tel"
					placeholder="Mobile No*"
					required
					name="mobile"
					onChange={loginForm.handleChange}
				/>
				<input
					className="bg-transparent w-full outline-none border-b-2 border-bg-darks py-2"
					type="email"
					placeholder="Email*"
					required
					name="email"
					onChange={loginForm.handleChange}
				/>
				<input
					className="bg-transparent w-full outline-none border-b-2 border-bg-darks py-2"
					type="text"
					placeholder="Street*"
					required
					name="street"
					onChange={loginForm.handleChange}
				/>
				<input
					className="bg-transparent w-full outline-none border-b-2 border-bg-darks py-2"
					type="text"
					placeholder="City*"
					required
					name="city"
					onChange={loginForm.handleChange}
				/>
				<input
					className="bg-transparent w-full outline-none border-b-2 border-bg-darks py-2"
					type="text"
					placeholder="PostalCode*"
					required
					name="postalCode"
					onChange={loginForm.handleChange}
				/>
				<button
					type="submit"
					disabled={loggingIn}
					className="disabled:bg-slate-400 bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 rounded-md py-2 flex gap-2 text-center items-center justify-center"
				>
					{loggingIn && <Spinner className="!w-4 !h-4" />}
					Place Order
				</button>
				{!!error && <p className="text-center text-xs text-red-500">{error}</p>}
			</form>
		</div>
	);
};

export default Login;
