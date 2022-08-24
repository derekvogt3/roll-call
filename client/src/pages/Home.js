import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import PictureMap from "../common/PictureMap";
import ImageMarker from "../common/ImageMarker";
import Login from "./Login";
import RollCallHome from "../page_components/home/RollCallHome";

export default function Home({ user }) {

  const notify = () => toast.info(`${user.username} sent you a new rollcall!`, {
    position: "top-left",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    })

  return (
    <div className="overflow-auto p-2">
      <div>
        <button style={{background: "red"}} onClick={notify}>Notification Button Test</button>
        <ToastContainer />
      </div>
      <RollCallHome />
      <RollCallHome />
      <RollCallHome />
      <RollCallHome />
    </div>
  );
}
