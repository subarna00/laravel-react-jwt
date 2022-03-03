import {
    Children,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import axiosClient from "../axios/axios";
import authReducer from "../reducers/AuthReducer";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AuthContext = createContext();
const cookies = new Cookies();

let initialState = {
    user: {
        access_token: cookies.get("access_token"),
    },
    isAuthenticated: cookies.get("access_token") ? true : false,
};

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [state, dispatch] = useState(authReducer, initialState);
    const login = async (credentails) => {
        return axiosClient
            .post("/auth/login", credentails)
            .then((res) => {
                console.log(res);
                cookies.set("access_token", res.data.access_token);
                initialState.isAuthenticated = true;
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <AuthContext.Provider value={{ ...initialState, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
