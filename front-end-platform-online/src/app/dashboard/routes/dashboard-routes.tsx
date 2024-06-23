import { Navigate, Route, Routes } from "react-router-dom";
import { routesDashboard } from "./lazyLoad-routes";

export const DashboardRoutes = () => {

    return (
        <Routes>

            {
                routesDashboard.map(({ Component, path, id }) => (
                    <Route
                        key={ id } 
                        path={ path } 
                        element={ <Component/> }
                    />
                ))
            }

            <Route path="/*" element={ <Navigate to={ routesDashboard[0].path } replace/> }/>
            
        </Routes>
    );

}
