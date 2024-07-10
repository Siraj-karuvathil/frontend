import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import { loginAction } from "../../redux/thunks/authThunk";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { toast } from "react-toastify";


let Logo = "https://res.cloudinary.com/dxcgqtuhj/image/upload/v1704776168/Cooking%20Academy%20Assets/rero4j0wglocfe3v1gpd.svg";


const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});


const Login = () => {
  const [open1, setOpen1] = useState(false);
  // handle toggle
  const toggle1 = () => {
    setOpen1(!open1);
  };


  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);
  const [loggingIn, setLogingIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.data) {
      navigate('/admin/course-details', {
        replace: true,
      })
    }
  }, [auth.data, navigate]);


  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLogingIn(true);
      dispatch(loginAction(values))
        .then((val) => {
          console.log(val);
          toast.success('Success Login')
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setLogingIn(false);
        })
    },
  });

  return (
    <div className="grid place-items-center h-screen bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1672734620/Cooking%20Academy%20Assets/baaaaner_oja0kt.jpg)]">
      <form
        onSubmit={loginForm.handleSubmit}
        className="bg-[#363636b2] flex flex-col gap-8 rounded-lg border-[1px] border-primary-clr2 py-10 px-5 xs:w-[90%] md:w-[50%] lg:w-[24%]"
      >
        <img className="h-16" src={Logo} alt="logo" />
        <input
          name="username"
          className="bg-transparent outline-none border-b-2 border-bg-darks py-2"
          type="text"
          required
          placeholder="username*"
          onChange={loginForm.handleChange}
        />
        <div className="relative">
          <input
            className="bg-transparent w-full outline-none border-b-2 border-bg-darks py-2"
            type={open1 === false ? "password" : "text"}
            placeholder="Password*"
            required
            name="password"
            onChange={loginForm.handleChange}

          />
          <div className="absolute top-3 right-5">
            {open1 === false ? (
              <i class="fa-solid fa-eye" onClick={toggle1}></i>
            ) : (
              <i class="fa-solid fa-eye-slash" onClick={toggle1}></i>
            )}
          </div>
        </div>
        <p className="text-zinc-500 flex justify-end text-sm">
          Forgot Password ?
        </p>
        <button
          type="submit"
          disabled={loggingIn}
          className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 rounded-md py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
