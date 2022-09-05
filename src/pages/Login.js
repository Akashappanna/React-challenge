import React, { useEffect, useState } from "react";
import LoginPage from "../components/Login/LoginPage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLogged") == 1) {
      navigate("/video");
    }
  }, []);

  console.log(localStorage.getItem("isLogged"));

  const loginHandler = () => {
    localStorage.setItem("isLogged", 1);
    navigate("/video");
  };

  return (
    <React.Fragment>
      <LoginPage onLogin={loginHandler} />
    </React.Fragment>
  );
};

export default Login;
