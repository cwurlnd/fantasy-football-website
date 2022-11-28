import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import Button from 'react-bootstrap/Button';

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div id="temp">
      <br />
      <Link to="/auth/register">
        <Button variant="primary">Register</Button>{' '}
      </Link>
      <br />
      <br />
      <Link to="/auth/login">
        <Button variant="primary">Login</Button>{' '}
      </Link>
    </div>
  );
};

export default AuthModule;
