import React, { useEffect, useState } from "react";

//css
import classes from "./LoginPage.module.css";
import amazon from "../../assets/amazon.png";
import tree from "../../assets/tree.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import errorIcon from "../../assets/error.svg";

const LoginPage = ({ onLogin }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [error, setError] = useState(null);

  const formIsValid = emailIsValid && passwordIsValid;

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredEmail === "") {
        setEmailIsValid(false);
        setError((prevState) => {
          return {
            ...prevState,
            email: "The email field is required",
          };
        });
        return;
      }
      if (enteredEmail.includes("@")) {
        setEmailIsValid(true);
        setError((prevState) => {
          return {
            ...prevState,
            email: null,
          };
        });
        return;
      }
      setEmailIsValid(false);
      setError((prevState) => {
        return {
          ...prevState,
          email: "Enter valid email address",
        };
      });
    }, [1000]);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredPassword.trim().length === 0) {
        setPasswordIsValid(false);
        setError((prevState) => {
          return {
            ...prevState,
            password: "Please enter the password",
          };
        });
        return;
      }
      if (enteredPassword.trim().length > 7) {
        setPasswordIsValid(true);
        setError((prevState) => {
          return {
            ...prevState,
            password: null,
          };
        });
        return;
      }
      setPasswordIsValid(false);
      setError((prevState) => {
        return {
          ...prevState,
          password: "Password length has to be greater than 7",
        };
      });
    }, [1000]);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredPassword]);

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
    if (enteredEmail === "") {
      setError((prevState) => {
        return {
          ...prevState,
          email: "The email field is required",
        };
      });
      return;
    }
  };

  const passwordBlurHandler = () => {
    setPasswordIsTouched(true);
    if (enteredPassword.trim().length === 0) {
      setError((prevState) => {
        return {
          ...prevState,
          password: "Please enter the password",
        };
      });
      return;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin();
  };

  // console.log("entereEmail :", enteredEmail);
  // console.log("is valid :", emailIsValid);
  // console.log("error :", error);
  // console.log("isTouched :", emailIsTouched);

  // console.log("enterePassword :", enteredPassword);
  // console.log("is valid :", passwordIsValid);
  // console.log("error :", error);
  // console.log("isTouched :", passwordIsTouched);
  // console.log(formIsValid);

  return (
    <div className={classes.loginPage}>
      <div className={classes.bg}></div>
      <div className={classes.login}>
        <header className={classes.loginHeader}>
          <img src={amazon} alt="amazon" className={classes.logo} />
        </header>

        <section className={classes.main}>
          <h4>Login</h4>
          <img src={tree} alt="tree" className={classes.tree} />

          <form onSubmit={submitHandler}>
            <div className={classes.loginFields}>
              <input
                type="text"
                placeholder="Email"
                value={enteredEmail}
                onChange={emailHandler}
                onBlur={emailBlurHandler}
              />
              {emailIsTouched && !emailIsValid && (
                <div className={classes.errorMsg}>
                  <img src={errorIcon} alt="error" />
                  {error.email}
                </div>
              )}
            </div>
            <div className={classes.loginFields}>
              <input
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordIsTouched && !passwordIsValid && (
                <div className={classes.errorMsg}>
                  <img src={errorIcon} alt="error" />
                  {error.password}
                </div>
              )}
            </div>
            <div className={classes.submit}>
              <button type="submit" disabled={!formIsValid}>
                Submit
              </button>
            </div>

            <div className={classes.userRecover}>
              <div className={classes.forgot}>
                <button type="button">Forgot password ?</button>
              </div>
              <div className={classes.newUser}>
                <span>New User ? </span>
                <button type="button">Sign up</button>
              </div>
            </div>
          </form>

          <p>or</p>

          <div className={classes.socialSignIn}>
            <div className={classes.links}>
              <img src={google} alt="google" />
              <span>CONTINUE WITH GOOGLE</span>
            </div>
            <div className={classes.links}>
              <img src={facebook} alt="google" />
              <span>CONTINUE WITH FACEBOOK</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
