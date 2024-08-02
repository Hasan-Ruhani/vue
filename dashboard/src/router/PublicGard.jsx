import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PublicGard = () => {
  
    const { profile } = useSelector(state => state.admin);

    if(localStorage.getItem("profile")){
        return profile ? <Navigate to={"/dashboard"}/> : <Outlet/>;
    }
    return <Outlet />;

}

export default PublicGard;
