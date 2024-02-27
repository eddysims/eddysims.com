import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, PropsWithChildren } from "react";

import { Icon } from "@/components/common/Icon";

type DrawerProps = {
  open: boolean;
  onRequestClose: () => void;
};

export function Drawer({
  open = false,
  onRequestClose,
  children,
}: PropsWithChildren<DrawerProps>) {
  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-surface/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed top-0 right-0 w-full">
          <div className="flex justify-end min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in duration-150"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel
                className={clsx(
                  "relative bg-text w-11/12 max-w-2xl transform shadow-xl transition-all",
                  "px-5 py-16",
                  "md:px-12",
                  "lg:px-16",
                )}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-7 md:text-text md:-left-12"
                >
                  <Icon icon="x" size="lg" />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
