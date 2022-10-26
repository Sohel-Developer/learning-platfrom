import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import CourseDetails from "../components/Pages/CourseDetails/CourseDetails";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/signup',
                element: <SignUp />

            },
            {
                path: '/login',
                element: <Login />

            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses />

            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails />

            }
        ]
    },
]);