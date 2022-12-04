import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dummy from "./pages/DummyPage";
import useAuth from "./hooks/useAuth";

export default function Router() {

    const AuthRoute = ({ children, ...rest }) => {
        const { user } = useAuth();
        return <Route {...rest}> {user.name ? children : <Redirect to='/login' />}</Route>
    }
    const GuestRoute = ({ children, ...rest }) => {
        const { user } = useAuth();
        return <Route {...rest}>{user.name ? <Redirect to='/dummy' /> : children}</Route>
    }
    return <Switch>
        <GuestRoute path='/login' exact>
            <Login />
        </GuestRoute>
        <GuestRoute path='/register' exact>
            <Register />
        </GuestRoute>
        <AuthRoute path='/dummy' exact>
            <Dummy />
        </AuthRoute>
    </Switch>
}