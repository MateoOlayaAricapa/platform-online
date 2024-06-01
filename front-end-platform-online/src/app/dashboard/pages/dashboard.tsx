import { Header } from '../components/header/header';
import './_dashboard.scss';
import { DashboardRoutes } from '../routes/dashboard-routes';

export const Dashboard = () => {

    return (
        <div className="dashboard">
            
            { /* Agregando componente header */ }
            <Header/>
            
            { /* Establecer rutas para sub-páginas */ }
            <DashboardRoutes/>

        </div>
    );

}
