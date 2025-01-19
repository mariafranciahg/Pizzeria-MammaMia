import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [token, setToken] = useState(true);

    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;