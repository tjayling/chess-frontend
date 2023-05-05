import React, {useState} from 'react';
import {useAppDispatch} from "../../store/hooks";
import {submitLogin} from "../../store/actions";

const Login = () => {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("");

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitLogin({username, password}));
    }

    return (
        <div>
            <form onSubmit={(e) => login(e)} className="flex flex-col gap-y-2">
                <input type="text" placeholder="Username:" className="text-input" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password:" className="text-input" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" className="button"/>
            </form>
        </div>
    );
};

export default Login;