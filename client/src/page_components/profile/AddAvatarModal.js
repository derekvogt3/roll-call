import { useState } from "react"
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";

export default function AddAvatarModal({ openCreate, setOpenCreate,user }){

    const [avatar, setAvatar] = useState("")

    const formData = new FormData()
    formData.append("avatar", avatar)

    function handleAddAvatr(){
        fetch(`/users/avatar/${user.id}`, {
            method: "PATCH",
            body: formData,
        })
        .then((r) => r.json())
    };

    function postPage(){
        return(
            <div className="p-4 flex flex-col">
            <div>
            <label
                htmlFor="name"
                className="ml-px pl-4 block text-sm font-medium text-gray-700"
            >
                Upload Avatar
            </label>
            <div className="mt-1">
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
            </div>
            <div className="p-2">
            <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                handleAddAvatr();
                }}
            >
                Add Avatar
            </button>
            </div>
        </div>
        )
    }
    
    return (
        <Transition.Root show={openCreate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenCreate}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center p-0">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-0 scale-95"
            >
            <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
                <div className="flex flex-col">
                <XIcon
                    className="h-6 w-6 text-indigo-600 absolute top-0 right-0"
                    onClick={() => setOpenCreate(false)}
                />
                {postPage()}
                </div>
            </Dialog.Panel>
            </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}
