import { useEffect, useState } from "react";
import LoginForm from "../page_components/authentication/LoginForm";
import SignUpForm from "../page_components/authentication/SignUpForm";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ setUser }) {

  const [showLogin, setShowLogin] = useState(true);
  const [invalidLogin, setinvalidLogin] = useState(false)

  const noProfile = () => {
    console.log("INCORRECT LOGIN")
    
    toast.error(
      "Incorrect username and/or password",
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    );
    setinvalidLogin(false)
  };

  return (
    <div className="min-h-full flex items-center flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      {invalidLogin ? noProfile() : <></>}
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} setinvalidLogin={setinvalidLogin} />
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