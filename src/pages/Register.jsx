import React, { useState } from "react";
import AppRegister from "../components/AppRegister";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

export default function Register() {
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
    const history = useHistory();

    const handleOnRegisterU = async (e) => {
        e.preventDefault();
        const response = await authService.register(newUser);
        if (response) {
            alert('Registration successful.');
            history.push("/login");
        }
    };

    return (
        <AppRegister
            handleOnRegister={handleOnRegisterU}
            newUser={newUser}
            setNewUser={setNewUser}
        />
    )

}