import React, { useCallback, useEffect, useMemo } from "react";
import CLASS from "../../components/sliders/explore-slider";
import useAppSelector from "../../redux/hooks/useAppSelector";
import CartItem from "./CartItem";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useAddCourseToCart from "../../hooks/useAddCourseToCart";
import Spinner from "../../components/Spinner";
import { onCheckoutDataLayer } from "../../helpers/dataLayer";

function Cart() {
	const navigate = useNavigate();
	const { data: cart, status } = useAppSelector((state) => state.cart);

	const HandleCart = useCallback(() => {
		onCheckoutDataLayer(
			cart?.itemId.map((it) => ({
				id: it._id,
				name: it.name,
				price: it.price.toFixed(2),
				url: "/courses",
			})) ?? [],
			() => {
				navigate("/checkout-page");
			}
		);
	}, [cart?.itemId, navigate]);

	const isLoadingCart = status === "loading";

	const [searchParams] = useSearchParams();

	const itemId = searchParams.get("item_id");

	const { handleAddCourseToCart, adding: addingItemToCart } =
		useAddCourseToCart();

	useEffect(() => {
		if (itemId) {
			handleAddCourseToCart(itemId);
			navigate("", {
				replace: true,
			});
		}
	}, [handleAddCourseToCart, itemId, navigate]);

	const itemsInCart = useMemo(
		() => cart?.itemId?.length || 0,
		[cart?.itemId?.length]
	);

	const hasItems = !!itemsInCart;

	return (
		<>
			<section className="w-11/12 mx-auto">
				{hasItems && (
					<h1 className="text-xl font-bold py-5">
						{itemsInCart} {itemsInCart > 1 ? "Courses" : "Course"} in Cart
					</h1>
				)}
				{isLoadingCart ? (
					<div className="flex items-center justify-center flex-col gap-2 min-h-[40vh]">
						<Spinner className="w-10 h-10" />
						<p className="text-lg">Please wait while we fetch the cart</p>
					</div>
				) : !hasItems ? (
					<div className="flex items-center justify-center flex-col gap-2 min-h-[40vh]">
						<p className="text-xl font-bold">
							You have no items in your cart{" "}
							<Link to="/cooking-class" className="text-primary-clr1">
								Continue
							</Link>
						</p>
					</div>
				) : addingItemToCart ? (
					<div className="flex items-center justify-center flex-col gap-2 min-h-[40vh]">
						<Spinner className="w-10 h-10" />
						<p className="text-lg">
							Please wait while we add the course to your cart
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
						<div className="lg:col-span-2 grid gap-10 rounded-xl overflow-hidden bg-white xs:p-5 lg:p-10">
							{cart?.itemId?.map((item, idx, arr) => (
								<React.Fragment key={item._id}>
									<CartItem item={item} />
									{arr.length - 1 > idx && <hr />}
								</React.Fragment>
							))}
							{/* CheckOut Btn */}
							<div className="flex justify-end">
								{/* <NavLink to="/checkout-page"> */}
								<button
									// href="#"
									onClick={HandleCart}
									//   disabled={checkingOut}
									className="bg-primary-clr2 hover:bg-primary-clr1 h-fit disabled:bg-slate-300 transition-all cursor-pointer duration-300 rounded-md px-16 lg:px-24 py-2 lg:py-5"
								>
									Proceed
								</button>
								{/* </NavLink> */}
							</div>
						</div>

						<div className="grid gap-10 h-fit">
							{/* course details */}
							<div className="text-black bg-white rounded-md p-5">
								<h1 className="uppercase font-semibold">price details</h1>
								<hr className="py-2" />
								<div className="flex justify-between">
									<p>Price({itemsInCart} item)</p>
									<p>QAR{cart?.price}</p>
								</div>
								{/* <div className="flex justify-between">
								<p>Tax 18%</p>
								<p>$5.7</p>
							</div> */}
								<hr className="py-2" />
								<div className="flex justify-between font-semibold">
									<h3>Total Amount</h3>
									<h3>QAR{cart?.price}</h3>
								</div>
							</div>

							<div>
								<p className="font-medium pb-3">Promotions</p>
								<div className="block relative rounded-md overflow-hidden">
									<input
										className="w-[100%] p-3 text-black"
										type="text"
										placeholder="Enter Coupon"
									/>
									<button className="bg-primary-clr2 absolute rounded-tl-md rounded-bl-md text-base right-0 top-0 py-3 px-10 hover:text-white">
										Apply
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>

			{/* Classes */}
			<section className="py-20">
				<h1 className="xs:text-3xl md:text-4xl w-11/12 mx-auto">
					More Classes
				</h1>
				<CLASS />
			</section>
		</>
	);
}

export default Cart;
