import {setCurrentChannel, setSessionId} from "../store/user-reducer";
import {LobbyData} from "./lobby.types";
import {setCurrentUsers} from "../store/lobby-reducer";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState, store} from "../store";

class LobbyConnection {
    private webSocketClient: WebSocket | null = null;
    private sessionId: string | null = null;

    init(dispatch: Dispatch, getState: () => RootState) {
        this.webSocketClient = new WebSocket(
            `${process.env.REACT_APP_WS_SERVER}/lobby`
            // `${process.env.WS_SERVER}?userId=${userId}`
        );

        this.webSocketClient?.addEventListener("open", () => {
            // const userId = dispatch(setCurrentChannel("lobby"));
            const userId = getState().userState.id;
            console.log("userId: " + userId);
            if (userId) {
                this.webSocketClient?.send(`userId:${userId}`);
            }
        })

        this.webSocketClient?.addEventListener("message", (event) => {
            if (!Boolean(event.data)) return;
            try {
                const parsedData = JSON.parse(event.data);
                if (parsedData.gameId) {
                }
                if (!Boolean(parsedData.action)) return;
                const {action, payload} = parsedData as LobbyData;
                switch (action) {
                    case "currentUsers":
                        dispatch(setCurrentUsers(payload));
                        break;
                    case "sessionId":
                        dispatch(setSessionId(payload));
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log("Error in lobby handling", error, event.data);
            }
        })
    }
}


export const LobbyService = new LobbyConnection();