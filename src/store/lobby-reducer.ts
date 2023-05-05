import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserDetails} from "../types/user";


const initialState: { currentUsers: User[] } = {
    currentUsers: [],
}

export const lobbySlice = createSlice({
    name: "lobby",
    initialState,
    reducers: {
        setCurrentUsers: (state, action: PayloadAction<string[]>) => {
            console.log("action: " + action)
            // update list of current users
        },
        sendGameRequest: (state, action: PayloadAction<User>) => {
            // Use service to send a game request to specified user
        },
        receiveGameRequest: (state, action: PayloadAction<UserDetails>) => {
            // update gameRequests and use the state update to trigger a game request on the f/e
        },
        establishConnectionToLobby: (state, action) => {

        },
    }
})

export const {setCurrentUsers, sendGameRequest, receiveGameRequest} = lobbySlice.actions;

export default lobbySlice.reducer;