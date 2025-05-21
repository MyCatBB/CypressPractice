import React from "react";
import { login } from "../auth";
import { useState } from "react";
import { users } from "../data/userInfo";
import Main from "../images/Main.jpg";
import { useNavigate } from "react-router-dom";

const validateUser = (id: string, password: string): boolean => {
  return users.some((user) => user.id === id && user.password === password);
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const isValid = validateUser(id, password);

    if (isValid) {
      login("dummy-token");
      navigate("/home");
    } else {
      setError("Id or Password Invalid");
    }
  };

  return (
    <div className="LogInPage__contaner">
      <div className="LogInPage__content">
        <h1>Welcome to BB's World</h1>
        <img className="LogInPage__mainImage" src={Main} alt="Login image" />
        <h3>Login</h3>
        <input
          placeholder="ID"
          className="loginInput"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
        <input
          placeholder="Password"
          className="passwordInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
        <br />
        {error && <p className="errorMessage">{error}</p>}
        <button
          className="loginButton"
          onClick={handleLogin}
          tabIndex={0}
        >
          LogIn{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
