import { Navigate, Route, Routes } from "react-router-dom";
import { routesAuth } from "./lazyLoad-auth-routes";

export const AuthRoutes = () => {

    return (
        <Routes>
            {
                routesAuth.map(({ Component, id, path }) => (
                    <Route 
                        id={ id }
                        path={ path }
                        element={ <Component/> }
                    />
                ))
            }

            <Route path="/*" element={ <Navigate to={ routesAuth[0].path } replace/> }/>
        </Routes>
    );

}

