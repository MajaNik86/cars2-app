import React, { useState } from "react";
import AppLogin from "../components/AppLogin";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import useAuth from "../hooks/useAuth";

export default function Login() {
    const [newUser, setNewUser] = useState({ email: "", password: "" });
    const { user, login } = useAuth();

    const history = useHistory();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await login(newUser);
    };
    return <AppLogin
        handleOnLogin={handleSubmitForm}
        newUser={newUser}
        setNewUser={setNewUser} />;
}
