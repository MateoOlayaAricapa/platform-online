import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/home-page";

export const DashboardRoutes = () => {

    return (
        <Routes>

            <Route path="/home" element={ <HomePage/> }/>
            <Route path="/my-courses" element={ <h1>Mis cursos page</h1> }/>
            <Route path="/instructor" element={ <h1>Instructor page</h1> }/>
            <Route path="/community" element={ <h1>Community page</h1> }/>

            <Route path="/*" element={ <Navigate to='/home'/> }/>
            
        </Routes>
    );

}
