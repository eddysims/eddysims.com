import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, type PropsWithChildren } from "react";

import { Icon } from "@/components/ui/Icon";

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
          <div className="fixed inset-0 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed right-0 top-0 w-full">
          <div className="flex min-h-screen justify-end">
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
                  "relative w-11/12 max-w-2xl transform bg-stone-50 shadow-xl transition-all",
                  "px-5 py-16",
                  "md:px-12",
                  "lg:px-16",
                )}
              >
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-7 md:-left-12 md:text-stone-50"
                >
                  <Icon icon="close-line" size="lg" />
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
