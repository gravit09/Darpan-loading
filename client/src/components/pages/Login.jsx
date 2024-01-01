import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { u_email, u_password } from "../../Function/Signup";
import { update } from "../../Function/User";
import validator from "validator";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.signup);
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.email) {
      Navigate("/");
    }
  }, [user]);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = data;

    if (!email || !validator.isEmail(email)) {
      setLoading(false);
      return alert("Please enter a valid email");
    } else if (!validator.isStrongPassword(password)) {
      setLoading(false);
      return alert("Please enter a Strong password");
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let res = await response.json();

      if (response.status === 200) {
        alert("logged in");
        window.location.replace("/");
      } else {
        alert(res.message);
      }
    } catch (error) {
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const loginwithgoogle = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/google/url", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      window.location.replace(data.url);
    } catch (error) {
      alert("Some error occurred");
    }
  };

  return (
    <>
      <div className="flxcenter container">
        <div className="wrapper">
          <form action="">
            <h2>Welcome Back</h2>
            <div className="input">
              <input
                className="input-box"
                type="text"
                placeholder="Email"
                value={data.email}
                onChange={(e) => {
                  dispatch(u_email(e.target.value));
                }}
              />
            </div>
            <div className="input">
              <input
                className="input-box"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => {
                  dispatch(u_password(e.target.value));
                }}
              />
            </div>
            <button type="submit" className="login-btn-1" onClick={login}>
              {loading ? (
                <RingLoader css={override} size={30} color={"#fff"} />
              ) : (
                "Login"
              )}
            </button>
            <p>
              <button
                type="button"
                className="login-btn"
                onClick={loginwithgoogle}
              >
                <ion-icon name="logo-google" className="s-icon"></ion-icon>
                <p className="signin-para"> Sign in with Google</p>
              </button>
              <br />
              Don't have an account? <Link to="/Signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
