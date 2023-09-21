import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import { loginAction } from "../../redux/thunks/authThunk";
import useAppSelector from "../../redux/hooks/useAppSelector";
import instance from "../../API/api_instance";

let Logo =
  "https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg";

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  mobile: Yup.string().required(),
  email: Yup.string().required(),
  street: Yup.string().required(),
  city: Yup.string().required(),
  postalCode: Yup.string().required(),
});

const Login = () => {
  const [open1, setOpen1] = useState(false);
  // handle toggle
  const toggle1 = () => {
    setOpen1(!open1);
  };

  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [loggingIn, setLogingIn] = useState(false);
  const navigate = useNavigate();


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
      setLogingIn(true)
    instance
      .post("/student/payment", values)
      .then((res) => {
        if (res.data.data) {
          window.location = res.data.data;
        }
        throw new Error("Failed To Checkout");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLogingIn(true);
      });
      console.log(values);
    },
  });

  return (
    <div
      className="grid place-items-center h-screen bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1672734620/Cooking%20Academy%20Assets/baaaaner_oja0kt.jpg)]"
      style={{ marginTop: 5 }}
    >
      <form
        onSubmit={loginForm.handleSubmit}
        className="bg-[#363636b2] flex flex-col gap-12 rounded-lg border-[1px] border-primary-clr2 py-10 px-5 xs:w-[90%] md:w-[50%] "
      >
        <img className="h-16" src={Logo} alt="logo" />

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
          className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 rounded-md py-2"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Login;
