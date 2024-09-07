import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores"

import { AxiosApiAdapter } from "../api";
import { onError, onLoadingAuth, onLogin } from "../store/slices/auth/auth-slice";
import { ResponseGetUser } from "./interface/interface";
import { serverUserToModel } from "../mappers";

const http = new AxiosApiAdapter();

export const useAuthStore = () => {

    //* Attributes.
    const { status, user, isLoadingAuth, error } = useSelector( ( state: RootState ) => state.auth );
    const dispatch = useDispatch();

    //* Methods.
    const onHandleLoginAuth = async( credentials: { email: string, password: string } ): Promise<void> => {

        dispatch( onLoadingAuth() );

        try {
            
            const { data } = await http.post<ResponseGetUser>( '/auth/login', credentials );
            dispatch( onLogin( serverUserToModel( data['user'] ) ) );

            localStorage.setItem( 'token', JSON.stringify( data['token'] ) );

        } catch (error) {
            const result = http.error( error );
            dispatch( onError( result ) );
        }

    }
    
    const onHandleLogoutAuth = async(): Promise<void> => {}
    const onHandleResetAuth = (): void => {}

    const onHandleErrorAuth = ( content: string | undefined ) => {
        dispatch( onError( content ) );
    }

    return {
        //* Attributes.
        status,
        user,
        isLoadingAuth,
        error,

        //* Methods.
        onHandleLoginAuth,
        onHandleLogoutAuth,
        onHandleResetAuth,
        onHandleErrorAuth,
    }
    
}
