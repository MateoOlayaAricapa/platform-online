import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../app/auth/routes/auth-routes";
import { Dashboard } from "../app/dashboard/pages/dashboard";

type Status = 'authenticated' | 'no-authenticated';

export const AppRouter = () => {

    const status: Status = 'no-authenticated';
  
    return (
        <Routes>
            
            {
                ( status === 'no-authenticated' )
                    ? (
                        <>
                            <Route path="/auth/*" element={ <AuthRoutes/> }/>
                            <Route path="/*" element={ <Navigate to='/auth/login'/> }/>
                        </>
                    )
                    : (
                        <>
                            <Route path="/dashboard/*" element={ <Dashboard/> }/>
                            <Route path="/*" element={ <Navigate to='/dashboard/home'/> }/>
                        </>
                    )
            }

        </Routes>
    );

}
