import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ user, setUser }) {

  const navigate = useNavigate();
  
  function logout(){
    fetch("/logout", { method: "DELETE" })
    setUser(null)
    navigate("/login")
  };

  return ( 
    <div className="basis-1/4 flex items-center flex-col justify-center py-12 px-4 sm:px-6 lg:px-80">
      <h1>WELCOME {user.username.toUpperCase()}</h1>
      <br/>
      <div>
        <img className="w-40 h-40 rounded-full" src={user.avatar_url} alt={"user's avatar!"} />
      </div>
      <br/>
      <p>Lorem ipsum dolor sit amet. Quo corporis fugiat aut sapiente dolor a nemo asperiores eum ipsam omnis nam fuga corrupti et minus excepturi. Sed sint ipsum ut asperiores debitis et dolores sunt qui tempore odio.</p>
      <br/>
      <button 
         type="submit" className="group relative w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => logout()} 
      >
        logout
      </button>
    </div>
  );
}
