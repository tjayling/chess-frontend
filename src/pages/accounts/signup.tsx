import React, {useState} from 'react';

const MyComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const signup = (e: React.FormEvent<HTMLFormElement>) => {

        return (
            <div>
                <form onSubmit={(e) => signup(e)} className={"flex flex-col gap-y-2"}>
                    <input type="text" placeholder="Username:" className="text-input" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" placeholder="Password:" className="text-input" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" className="button"/>
                </form>
            </div>
        );
    };
}

export default MyComponent;
