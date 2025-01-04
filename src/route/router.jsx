import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Brands from "../pages/Brands";
import BrandDetails from "../components/BrandDetails.jsx";
import Profile from "../pages/Profile.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";

const router =createBrowserRouter ([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=> fetch("../coupon.json")
            },
        
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:"/forgot-password",
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
                loader: ()=> fetch("../coupon.json")                
            },
            {
                path: "/brand/:id",
                element: <PrivateRoute><BrandDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                  const response = await fetch("../coupon.json"); 
                  const brands = await response.json();
                  return brands.find((brand) => brand._id === params.id); 
                },
              },
              {
                path:"/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
              },
              {
                path:"/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
              }
              
        ]

    }

])
export default router