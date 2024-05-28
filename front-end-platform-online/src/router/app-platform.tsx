import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app-router";
import { Provider } from "react-redux";
import { store } from "../store/stores";

export const PlatformApp = () => {

    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    );

}
