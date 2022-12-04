import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import useAuth from '../hooks/useAuth';





const MainNavigation = (props) => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const token = localStorage.getItem("token");

    const handleLogout = async () => {
        await authService.logout();
        history.push("/login");
    };

    return <header>

        <nav>
            <ul>
                {!user.name && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {!user.name && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
                {user.name &&
                    <li>
                        <Link to="/dummy">Dummy</Link>
                    </li>}
            
                {user.name && <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>}

            </ul>
        </nav>
    </header >
}

export default MainNavigation;