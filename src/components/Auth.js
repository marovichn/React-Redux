import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/redux";
import { useRef } from "react";
import { useState } from "react";

const Auth = () => {
  const inputEmailRef = useRef();
  const passwordInput = useRef();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loginErrorPassword, setLoginErrorPassword] = useState(false);
  const [loginErrorEmail, setLoginErrorEmail] = useState(false);
  const emailHandler = (e) => {
    setInputs((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const passwordHandler = (e) => {
    setInputs((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      inputEmailRef.current.value.includes("@") &&
      inputEmailRef.current.value.trim().length !== 0 &&
      passwordInput.current.value.trim().length >= 5
    ) {
      dispatch(authActions.login());
    }
    if (inputEmailRef.current.value.trim().length === 0) {
      setLoginErrorEmail(true);
    }
    if (passwordInput.current.value.trim().length <= 5) {
      setLoginErrorPassword(true);
    }

    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <main onSubmit={submitFormHandler} className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={emailHandler}
              value={inputs.email}
              ref={inputEmailRef}
              type="email"
              id="email"
            />
            {loginErrorEmail && (
              <p className={classes.invalid}>Enter valid Email</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={passwordHandler}
              value={inputs.password}
              ref={passwordInput}
              type="password"
              id="password"
            />
            {loginErrorPassword && (
              <p className={classes.invalid}>Enter valid password</p>
            )}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
