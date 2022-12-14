import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  MenuIcon,
  UserIcon,
  XIcon,
  BookOpenIcon,
  UserGroupIcon,
  BellIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import History from "./pages/History";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import GroupFocus from "./page_components/groups/GroupFocus";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

/*
const user = {
  name: "Emily Selman",
  email: "emily.selman@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
*/

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Groups", href: "groups", icon: UserGroupIcon },
  // { name: "Notifications", href: "notifications", icon: BellIcon },
  // { name: "History", href: "history", icon: BookOpenIcon },
  // { name: "Chat", href: "chats", icon: ChatAlt2Icon },
  { name: "Profile", href: "profile", icon: UserIcon },
];

function App() {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notify, setNotify] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoaded(false);
    fetch("/me").then((r) => {
      setLoaded(true);
      if (r.ok) {
        r.json().then((data) => setUser(data));
      }
    });
  }, [refresh]);

  const pushNotifications = () => {
    toast.info(
      `${
        user.username.charAt(0).toUpperCase() + user.username.slice(1)
      } you've got a new rollcall!`,
      {
        position: "top-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    );
  };

  if (!loaded) return <></>;

  if (!user) return <Login user={user} setUser={setUser} />;

  return (
    <>
      <div className="h-screen flex">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="pt-5 pb-4">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt="Workflow"
                      />
                      <ToastContainer />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                    {/*
                    <a href="#" className="flex-shrink-0 group block">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            Account Settings
                          </p>
                        </div>
                      </div>
                    </a>
                    */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-20 h-screen">
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-indigo-600">
              <div className="flex-1">
                <div className="bg-indigo-700 py-4 flex items-center justify-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <nav
                  aria-label="Sidebar"
                  className="py-6 flex flex-col items-center space-y-3"
                >
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700"
                    >
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex pb-5">
                {/*
                <a href="#" className="flex-shrink-0 w-full">
                  <img
                    className="block mx-auto h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                  <div className="sr-only">
                    <p>{user.name}</p>
                    <p>Account settings</p>
                  </div>
                </a>
                  */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="groups" element={<Groups />}></Route>
            <Route
              path="groups/:groupId"
              element={
                <GroupFocus
                  notify={notify}
                  setNotify={setNotify}
                  pushNotifications={pushNotifications}
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
              }
            />
            <Route path="notifications" element={<Notifications />} />
            <Route path="history" element={<History />} />
            {/* <Route path="chats" element={<Chats />} /> */}
            <Route
              path="/profile"
              element={
                <Profile
                  setUser={setUser}
                  user={user}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  pushNotifications={pushNotifications}
                  notify={notify}
                />
              }
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
