import React from "react";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";

const Layout = ({ children }) => {
    const { user, login } = useAuth();
    return <Fragment>
        <MainNavigation />
        <main>{children}</main>
        <footer> {user && user.name}</footer>
    </Fragment>
}

export default Layout;