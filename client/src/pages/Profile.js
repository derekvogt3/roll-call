import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AddAvatarModal from "../page_components/profile/AddAvatarModal";

export default function Profile({ user, setUser }) {

  const [openCreate, setOpenCreate] = useState(false);

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
        {user.avatar_url ? <img className="w-40 h-40 rounded-full" src={user.avatar_url} alt={"user's avatar!"} />
        : 
          <div onClick={() => setOpenCreate(!openCreate)}>
            <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-100">
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
        }
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
      {openCreate ? 
        <AddAvatarModal openCreate={openCreate} setOpenCreate={setOpenCreate} user={user}/> : <></>
      }
    </div>
    );
}

/*
<div>
                <label htmlFor="avatar" className="sr-only">
                  Avatar
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  autoComplete="avatar"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </div>
*/

// avatar click setOpenCreate