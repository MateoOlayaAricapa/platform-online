import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/login-page";

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/register" element={ <h1>Register Page</h1> }/>

            <Route path="/*" element={ <Navigate to='/login'/> }/>
        </Routes>
    );

}

