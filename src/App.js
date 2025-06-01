import './App.css';
import { ToastContainer } from 'react-toastify'
import { ScrollToTop } from 'react-router-scroll-to-top';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { client } from './API/react-query/client';
import { withReduxProvider } from './redux/store'
import Login from './pages/login/index';
import ForgetPage from './pages/forgetPage/index';
import OTP from './pages/otp/index';
import SignUp from './pages/signUp/index';
import Home from './pages/home/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/aboutus/index';
import Cookingclass from './pages/cookingClasses/index';
import CookingclassInside from './pages/cookingClassInside/index';
import Cookingclassone from './pages/cookingClass-1/index';
import KitchenStudio from './pages/kitchenStudio/index';
import Menuconsultancy from './pages/menu consultancy/index';
import Profile from './pages/profile/index';
import Cart from './pages/cart/index';
import Success from './pages/success/success';
import TermsAndConditions from './pages/termsAndConditions/termsAndConditions';
import CancellationPolicy from './pages/cancellation/cancellationPolicy';

import AdminLogin from './Admin/Pages/login';
import CheckoutPage from './pages/CheckoutPage';
import FAQ from './Admin/Pages/Faq';
import Email from './Admin/Pages/Email';
import CourseDetail from './Admin/Pages/Course Details';
import ClassDetail from './Admin/Pages/Class Details';
import ClassDetailInner from './Admin/Pages/Class Detail Inner';
import ClassInnerEdit from './Admin/Pages/Class Detail Inner Edit';
import CourseEdit from './Admin/Pages/Course Details Edit';

import useInitializeApp from './hooks/useInitializeApp';
import PaymentSuccess from './pages/PaymentSuccess';
import { QueryClientProvider } from '@tanstack/react-query';
import ResetPassword from './pages/forgetPage/reset-password';



const Layout = () => {
  return (
    <div className='app'>
      <ScrollToTop />
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/cooking-class",
        element: <Cookingclass />
      },
      {
        path: "/cooking-class/:name",
        element: <CookingclassInside />
      },
      {
        path: "/cooking-class-1",
        element: <Cookingclassone />
      },
      {
        path: "/kitchen-studio",
        element: <KitchenStudio />
      },
      {
        path: "/menu-consultancy",
        element: <Menuconsultancy />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/success",
        element: <Success />
      },
      {
        path: "*",
        element: <div className='h-[80vh] grid place-items-center'><h1>Page Not Found</h1></div>
      },
      {
        path: "/admin/login",
        element: <AdminLogin />
      },
      {
        path: "/verify-otp",
        element: <OTP />
      },
      {
        path: "/forget-password",
        element: <ForgetPage />
      },
      {
        path: "/reset-password",
        element: <ResetPassword />
      },
      {
        path: "/admin/faq",
        element: <FAQ />
      },
      {
        path: "/admin/email",
        element: <Email />
      },
      {
        path: "/admin/class-details",
        element: <ClassDetail />
      },
      {
        path: "/admin/course-details",
        element: <CourseDetail />
      },
      {
        path: "/admin/course-edit/:id",
        element: <CourseEdit />
      },
      {
        path: "/admin/class-edit/:id/:courseId",
        element: <ClassInnerEdit />
      },
      {
        path: "/admin/class/:id",
        element: <ClassDetailInner />
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions />
      },
      {
        path: "/CancellationPolicy",
        element: <CancellationPolicy />
      }
    ]
  },
  {
    path: "/checkout-page",
    element: <CheckoutPage />
  },
]);





function App() {
  useInitializeApp();
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}


export default withReduxProvider(App);