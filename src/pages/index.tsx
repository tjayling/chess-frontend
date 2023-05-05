import React, {useEffect} from 'react';
import Login from "./accounts/login";
import Lobby from "./lobby";
import {useAppSelector} from "../store/hooks";
import {getCookie} from "../services/cookie.service";

const Index = () => {
    const loggedInCookie = getCookie("loggedIn");
    const userIsLoggedIn = useAppSelector((state) => state.userState.isLoggedIn);

    useEffect(() => {

    }, [userIsLoggedIn]);

    return (
        userIsLoggedIn ?  <Lobby/> : <Login />
    );
};

export default Index;