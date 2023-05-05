import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserDetails} from "../types/user";
import {RootState} from "./index";
import {deleteCookie, setCookie} from "../services/cookie.service";


const initialState: User = {
    sessionId: null,
    isLoggedIn: false,
    currentChannel: null,

    id: null,
    name: null,
    username: null,
    email: null,
    elo: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        setSessionId: (state, action: PayloadAction<string>) => {
            state.sessionId = action.payload;
        },
        logUserIn: (state, action: PayloadAction<UserDetails>) => {
            state.isLoggedIn = true;

            state.id = action.payload.id;
            console.log("User id in user reducer: " + action.payload.id);
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.elo = action.payload.elo;

            //todo: move to another place :)
            setCookie("loggedIn", true, 5);
            setCookie("user", action, 5);
        },
        logUserOut: (state) => {
            state.isLoggedIn = false

            state.id = null;
            state.username = null;
            state.name = null;
            state.elo = null;

            setCookie("loggedIn", false, 5);
            deleteCookie("user");
        },
        setCurrentChannel: (state, action: PayloadAction<string>) => {
            state.currentChannel = action.payload;
        }
    },
})

export const {setUserId, setSessionId, logUserIn, logUserOut, setCurrentChannel} = userSlice.actions;

export const userState = (state: RootState) => state.userState;
export default userSlice.reducer;