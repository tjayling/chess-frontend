import {LoginDetails} from "../services/login.types";
import {Dispatch} from "@reduxjs/toolkit";
import {UserDetails} from "../types/user";
import {LobbyService} from "../services/lobby.service";
import {logUserIn} from "./user-reducer";
import {login} from "../services/login.service";
import {RootState} from "./index";

export const submitLogin = (loginDetails: LoginDetails) => {
    return async (dispatch: Dispatch, getState:() => RootState) => {
        const loginResponse = await login(loginDetails);

        try {
            const userData: UserDetails = loginResponse.data;
            dispatch(logUserIn(userData));
            LobbyService.init(dispatch, getState);
        } catch (err) {
            console.error(err);
        }
    }
}