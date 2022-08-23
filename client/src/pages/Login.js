import { useState } from "react";
import LoginForm from "../page_components/groups/LoginForm";
import SignUpForm from "../page_components/groups/SignUpForm";

export default function Login({ setUser }) {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </>
  );
}