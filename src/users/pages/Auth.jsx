import React from "react";
import "./Auth.css";
import Login from "../components/Login";

const Auth = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-content-wrap">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
