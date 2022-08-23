import { useState } from "react";
import LoginForm from "../page_components/authentication/LoginForm";
import SignUpForm from "../page_components/authentication/SignUpForm";

export default function Login({ setUser }) {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-full flex items-center flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
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
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}