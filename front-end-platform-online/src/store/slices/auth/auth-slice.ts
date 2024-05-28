import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    status: 'authenticated' | 'no-authenticated';
    user: {};
    isLoadingAuth?: boolean; 
};

const initialState: InitialState = {
    status: 'no-authenticated',
    user: {},
    isLoadingAuth: undefined,
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
            state.status = 'authenticated';
            state.user = payload;
        },
        onLogout: ( state ) => {
            state.isLoadingAuth = true;
            state.status = 'no-authenticated';
            state.user = {};
        },
        onResetAuth: ( state ) => {
            state.isLoadingAuth = undefined;
            state.status = 'no-authenticated';
            state.user = {};
        }
    }
});

export const { onLoadingAuth, onLogin, onLogout, onResetAuth } = authSlice.actions;