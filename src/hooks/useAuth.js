import React, { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { authService } from "../services/AuthService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const history = useHistory();
    const [user, setUser] = useState({});

    const handleLogin = async (data) => {
        const response = await authService.login(data);
        setUser(response.data.user);
        history.push("/users");
    };

    const handleRefreshToken = async () => {
        const token = handleGetItemFromLS("token");
        if (token) {
            const { user } = await authService.refresh();
            setUser(user);
        }
    };

    const handleGetItemFromLS = (value) => {
        return localStorage.getItem(value);
    };

    useEffect(() => {
        handleRefreshToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login: handleLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
