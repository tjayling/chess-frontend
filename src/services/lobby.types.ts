import {User} from "../types/user";

export type LobbyData = |{
    action: 'currentUsers';
    payload: string[];
}|{
    action: 'sessionId';
    payload: string;
}