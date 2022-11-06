import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../Components/Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/auth");
  };
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div>
        <p>Unauthorized!</p> <button onClick={goBackHandler}>Please register or login.</button>
      </div>
    );
  }
};

export default ProtectedRoute;