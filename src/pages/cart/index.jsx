import React, { useCallback, useMemo, useState } from "react";
import instance from "../../API/api_instance";
import CLASS from "../../components/sliders/explore-slider";
import useAppSelector from "../../redux/hooks/useAppSelector";
import CartItem from "./CartItem";
import { NavLink, useNavigate } from "react-router-dom";


function Cart() {
	const navigate=useNavigate()
  const cart = useAppSelector((state) => state.cart.data);
  const [checkingOut, setCheckingOut] = useState(false);
  const HandleCart = useCallback(() => {
    
	navigate("/checkout-page")
  }, []);

  const itemsInCart = useMemo(
    () => cart?.itemId?.length || 0,
    [cart?.itemId?.length]
  );

  return (
    <>
      <section className="w-11/12 mx-auto">
        <h1 className="text-xl font-bold py-5">
          {itemsInCart} {itemsInCart.length > 1 ? "Courses" : "Cource"} in Cart
        </h1>
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
              {/* <p className="text-sm pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                ullam perspiciatis minus voluptatibus aspernatur dolores at
                fugiat cupiditate voluptates autem consectetur et inventore
                nesciunt neque nobis mollitia facilis a asperiores, iste nulla
                possimus perferendis alias esse cumque! Voluptates reiciendis,
                ipsa nihil porro ex tenetur cum amet.
              </p> */}
            </div>
          </div>
        </div>
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
