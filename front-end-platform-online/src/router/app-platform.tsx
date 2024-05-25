import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app-router";

export const PlatformApp = () => {

    return (
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
    );

}
