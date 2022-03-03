import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useAuthContext();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html">
                            <b>Admin</b>LTE
                        </a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">
                                Sign in to start your session
                            </p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    login(credentials);
                                }}
                            >
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        onChange={onChange}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        onChange={onChange}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary my-auto">
                                            <input
                                                type="checkbox"
                                                id="remember"
                                            />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
