import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app-router";
import { Provider } from "react-redux";
import { store } from "../store/stores";
import { Suspense } from "react";
import { Loading } from "../app/dashboard/components";

export const PlatformApp = () => {

    return (
        <Provider store={ store }>
            <Suspense fallback={ <Loading/> }>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </Suspense>
        </Provider>
    );

}
