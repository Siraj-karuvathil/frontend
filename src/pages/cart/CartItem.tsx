import { FC, memo, useCallback } from "react";
import useToggle from "../../hooks/useToggle";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import { Course } from "../../redux/slices/courseSlice";
import { deleteFromCart } from "../../redux/thunks/cartThunk";
export interface CourseData {
	image: string;
	instructorName: string;
	about: string;
	unit: number;
	lesson: number;
	task: number;
	subscriptionCount: number;
	_id: string;
	name: string;
	duration: string;
	price: number;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	isSubscribed: boolean;
}

interface CartItemProps {
	item: Course;
}

const CartItem: FC<CartItemProps> = ({ item }) => {

	const dispatch = useAppDispatch();

	const [deleting, setDeleting] = useToggle(false);

	const handleDeleteFromCart = useCallback(() => {
		setDeleting();
		dispatch(deleteFromCart(item._id)).finally(() => {
			setDeleting();
		});
	}, [dispatch, item._id, setDeleting]);

	return (
		<div className="grid gap-3 lg:gap-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 text-black">
			<img
				className="lg:h-28 lg:w-44 object-cover rounded-md"
				src={item?.image}
				alt={item.name}
			/>
			<div className="lg:col-span-2 flex justify-center flex-col">
				<h4 className="font-semibold lg:text-xl">{item.name}</h4>
				<p>By {item.instructorName}</p>
				<span className="flex gap-2">
					<p>4.9</p>
					<div className="text-primary-clr2 grid grid-flow-col place-items-center gap-1">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
					</div>
					<p>(239 ratings)</p>
				</span>
				<p> total hours | {item.lesson} lessons</p>
			</div>
			<div className="flex justify-between">
				<div className="flex gap-1 flex-col justify-center align-middle text-blue-800 font-medium">
					<button
						disabled={deleting}
						onClick={handleDeleteFromCart}
						className="cursor-pointer text-blue-800"
					>
						{deleting ? "Removing..." : "Remove"}
					</button>
					<p className="cursor-pointer">Save for Later</p>
				</div>
				<div className="flex flex-col justify-center align-middle">
					<h2 className="font-bold text-3xl">QAR{item.price}</h2>
				</div>
			</div>
		</div>
	);
};

export default memo(CartItem);
