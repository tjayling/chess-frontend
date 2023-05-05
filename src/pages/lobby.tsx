import React from 'react';
import ChessUi from "../chess/ChessUi";
import {useAppSelector} from "../store/hooks";
import {userState} from "../store/user-reducer";

const Lobby = () => {


    const user = useAppSelector(userState);

    return (
        <div>
            Lobby
            <div>
                <h1>{user.username}</h1>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
                <h1>{user.elo}</h1>
            </div>
            <ChessUi/>
        </div>
    );
};

export default Lobby;