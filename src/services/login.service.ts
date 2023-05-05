import {LoginDetails} from "./login.types";
import axios from "axios";

export const login = async (loginDetails: LoginDetails) => {
    const baseUrl = `${process.env.REACT_APP_API_SERVER}/profile/login`;
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Private-Network': 'true',
        },
    };

    return axios.post(baseUrl, loginDetails, headers)
}