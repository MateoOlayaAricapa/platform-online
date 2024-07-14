import { useSelector } from "react-redux"
import { RootState } from "../store/stores"

export const useAuthStore = () => {

    //* Attributes.
    const { status, user, isLoadingAuth } = useSelector( ( state: RootState ) => state.auth );
    //const dispatch = useDispatch();

    //* Methods.
    const onHandleLoginAuth = async(): Promise<void> => {}
    const onHandleLogoutAuth = async(): Promise<void> => {}
    const onHandleResetAuth = (): void => {}

    return {
        //* Attributes.
        status,
        user,
        isLoadingAuth,

        //* Methods.
        onHandleLoginAuth,
        onHandleLogoutAuth,
        onHandleResetAuth
    }
    
}
