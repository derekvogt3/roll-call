import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AddAvatarModal from "../page_components/profile/AddAvatarModal";
import UserRollcallPostsContainer from "../page_components/profile/UserRollcallPostsCotainer";

import 'react-toastify/dist/ReactToastify.css';

export default function Profile({ user, setUser, refresh, setRefresh }) {

  const [openCreate, setOpenCreate] = useState(false);
  const [userWithPosts, setUserWithPosts] = useState({});
  const [groups, setGroups] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  {/*
  const notify = () =>
    toast.info(`${user.username} sent you a new rollcall!`, {
      position: "top-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    <div>
      <button
        style={{background: "red"}} 
        onClick={notify}
      >
        Notification Button Test
      </button>
      <ToastContainer />
    </div>
  */}

  useEffect(() => {
    fetch(`/user/groups`).then((r) => {
      setLoaded(false);
      if (r.ok) {
        setLoaded(true);
        r.json().then((data) => {
          console.log("'/ME' USER: ", user)
          console.log("USER POSTS: ", data)
          //setUserWithPosts(data)
        });
      }
    });
  }, []);

  {/*
  useEffect(() => {
    setLoaded(false);
    fetch(`/groups/${user.id}`).then((r) => {
      setLoaded(true);
      if (r.ok) {
        r.json().then((data) => {
          console.log("USER GROUPS: ", data)
          setUser(data)
        });
      }
    });
  }, []);
  */}
  
  function logout(){
    fetch("/logout", { method: "DELETE" })
    setUser(null)
    navigate("/login")
  };

  function notification(){

    

    
    if(groups.map(user)
    
    .filter((user) => user.includes(user))){
      
      
      
      
      
      
      toast.info(`${user.username} sent you a new rollcall!`, {
        position: "top-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return ( 
    <div className="basis-1/4 flex items-center flex-col justify-center py-12 px-4 sm:px-6 lg:px-80">
      <h1>WELCOME {user.username.toUpperCase()}!</h1>
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
      {}
      <ToastContainer />
      <p>Lorem ipsum dolor sit amet. Quo corporis fugiat aut sapiente dolor a nemo asperiores eum ipsam omnis nam fuga corrupti et minus excepturi. Sed sint ipsum ut asperiores debitis et dolores sunt qui tempore odio.</p>
      <br/>
      <button 
        type="submit" className="group relative w-1/5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => logout()} 
      >
        logout
      </button>
      {openCreate ? 
        <AddAvatarModal openCreate={openCreate} setOpenCreate={setOpenCreate} user={user} refresh={refresh} setRefresh={setRefresh}/>
        : <></>
      }
      {userWithPosts.roll_call_posts?.length > 0 ? 
        <UserRollcallPostsContainer user={userWithPosts} /> 
        : <></>
      }
    </div>
    );
}
