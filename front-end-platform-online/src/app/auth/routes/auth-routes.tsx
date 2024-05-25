import { Navigate, Route, Routes } from "react-router-dom";

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={ <h1>Login Page</h1> }/>
            <Route path="/register" element={ <h1>Register Page</h1> }/>

            <Route path="/*" element={ <Navigate to='/login'/> }/>
        </Routes>
    );

}

