import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Notifications() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-100/50 ">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>

          <h1>test test test</h1>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
