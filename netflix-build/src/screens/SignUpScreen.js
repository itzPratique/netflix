import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignupScreen() {
  const emailRef = useRef(null); //To capture the email from signIn (useRef is like a finger which points to HTML element)
  const passwordRef = useRef(null); //To capture the password from signIn (useRef is like a finger which points to HTML element )

  //useState renders on each change, useRef is silent (doesn't re-render)

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now!
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
