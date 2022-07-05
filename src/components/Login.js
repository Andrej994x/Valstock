import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="mainLogin">
        <div className="textForLogin">
          <h1>Join our stock community!</h1>
          <h3>
            Download free photos and videos powered by the best photographers
          </h3>
        </div>
        <div className="form">
          <div className="inputUserName">
            <label for="username">USERNAME</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="inputPassword">
            <h3>PASSWORD</h3>
            <label>
              <input type="text" name="name" />
            </label>
          </div>
        </div>
        <div className="buttonLogIn">
          <button onClick={goToHome}>Log in</button>
        </div>
      </div>
      <div className="footer"></div>;
    </>
  );
};

export default Login;
