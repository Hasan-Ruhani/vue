import Login from "../pages/login/Login";
import PublicGard from "./PublicGard";



const PublicRouter = [

    {
        element: <PublicGard />,
        children: [

            {
                path: "/dashboard/login",
                element: <Login/>
            }
            
        ]
    }

]


export default PublicRouter;
