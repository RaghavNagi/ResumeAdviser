import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Protected from "./features/auth/components/protected"
import Home from "./features/interview/pages/Home"



export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/Register",
        element: <Register/>
    },
    {
        path:"/",
        element: <Protected><Home/></Protected>
    },
    {
        path:'/interview/:InterviewId',
        element: <Protected> <Home/> </Protected>
    }
])