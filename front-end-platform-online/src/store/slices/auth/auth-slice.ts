import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../models/user";

interface InitialState {
    status          : 'authenticated' | 'no-authenticated';
    user            : User | {};
    isLoadingAuth?  : boolean;
    error           : string | undefined;
};

const initialState: InitialState = {
    status          : 'no-authenticated',
    user            : {},
    isLoadingAuth   : true,
    error           : undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLoadingAuth: ( state ) => {
            state.isLoadingAuth = false;
        },
        onLogin: ( state, { payload } ) => {
            state.isLoadingAuth = true;
            state.status        = 'authenticated';
            state.user          = payload;
            state.error         = undefined;
        },
        onLogout: ( state ) => {
            state.isLoadingAuth = true;
            state.status        = 'no-authenticated';
            state.user          = {};
            state.error         = undefined;
        },
        onError: ( state, { payload } ) => {
            state.isLoadingAuth = true;
            state.status        = 'no-authenticated';
            state.user          = {};
            state.error         = payload;
        },
    }
});

export const { onLoadingAuth, onLogin, onLogout, onError } = authSlice.actions;