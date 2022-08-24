import React from "react";
import { ToastContainer, toast } from "react-toastify";
import PictureMap from "../common/PictureMap";
import ImageMarker from "../common/ImageMarker";
import Login from "./Login";
import RollCallHome from "../common/RollCallHome";

export default function Home({ user }) {
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

  return (
    <div className="overflow-auto p-2">
      {/* <RollCallHome />
=======
      <div>
        <button style={{background: "red"}} onClick={notify}>Notification Button Test</button>
        <ToastContainer />
      </div>
>>>>>>> 5ab2371ddd1e2cd8647c01e9f04f38cd2a0855e1
      <RollCallHome />
      <RollCallHome />
      <RollCallHome /> */}
    </div>
  );
}
