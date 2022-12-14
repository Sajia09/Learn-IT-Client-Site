import { createBrowserRouter } from "react-router-dom";
import GetPremiumAccess from "../../GetPremiumAccess/GetPremiumAccess";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch('https://assignment10-server-site.vercel.app/courses')
            },
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://assignment10-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/getpremium/:id',
                element:<PrivateRoutes><GetPremiumAccess></GetPremiumAccess></PrivateRoutes>,
                loader: ({params}) => fetch(`https://assignment10-server-site.vercel.app/getpremium/${params.id}`)
            },
           
        ]
       
    },
    {path:'*', element: <div>This route is not found</div>}
])