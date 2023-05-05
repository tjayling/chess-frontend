export interface UserDetails {
    id: string | null;
    name: string | null;
    username: string | null;
    email: string | null;
    elo: string | null;
}

export interface User extends UserDetails {
    sessionId: string | null;
    isLoggedIn: boolean;
    currentChannel: string | null;
}
