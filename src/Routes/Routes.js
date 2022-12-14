import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Project from "../Pages/Projects/Project";

export const routes = createBrowserRouter([
    {
        path:'/atiqur-portfolio',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                
                    path:'/atiqur-portfolio',
                    element:<Home></Home>
                
            },
            {
                path:'/atiqur-portfolio/project/:id',
                element: <Project></Project>,
                loader: ({params}) => fetch(`https://my-portfolio-server-eight.vercel.app/atiqur-portfolio/projects/${params.id}`)
            },
        ]
    }
])