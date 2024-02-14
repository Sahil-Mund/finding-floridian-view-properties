import { get_loggedIn_user } from "backend";
import { AuthContext } from "providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

export const useAuth = () => {
    return useContext(AuthContext);
};


export const useAuthProvider = () => {
    const [userData, setUserData] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const authToken = JSON.parse(sessionStorage.getItem('user_access_token') as string);
        setToken(authToken);

        if (authToken) {
            setIsLoggedIn(true);
        }


    }, []);

    const updateToken = (newToken: string) => {
        setToken(newToken);
        sessionStorage.setItem('user_access_token', JSON.stringify(newToken));
    };

    return { userData, setUserData, isLoggedIn, setIsLoggedIn, token, setToken: updateToken };

};

