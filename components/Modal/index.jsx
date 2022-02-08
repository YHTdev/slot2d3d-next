import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

export const ModalTitle = ({ className, children }) => {
  return (
    <Dialog.Title
      as="h3"
      className={`${
        className || ""
      }  flex items-center px-5 py-4 border-b border-slate-100 font-semibold text-slate-800`}>
      {children}
    </Dialog.Title>
  );
};

export const ModalBody = ({ className, children }) => {
  return (
    <Dialog.Description as="div" className={`${className || ""} px-5 py-4`}>
      {children}
    </Dialog.Description>
  );
};

export default function MyModal({
  className,
  children,
  isModalOpen,
  setIsModalOpen,
}) {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 z-10 overflow-y-auto "
          open={isModalOpen}
          onClose={() => setIsModalOpen(true)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-slate-900 opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div
                className={`${
                  className || ""
                } inline-block relative w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl`}>
                {children}

                <div className="absolute top-5 right-5">
                  <button className="" onClick={() => setIsModalOpen(false)}>
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
