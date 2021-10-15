import { Dialog as HeadlessuiDialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, VFC } from "react";

import { HamburgerMenu } from "@/components/layouts/SPLayout/HamburgerMenu";

type Props = {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export const Dialog: VFC<Props> = (props) => {
  const { open, onClose, children } = props;

  return (
    <>
      <Transition show={open} as={Fragment}>
        <HeadlessuiDialog
          static
          open={open}
          onClose={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <HeadlessuiDialog.Overlay className="fixed inset-0 bg-brown bg-opacity-80" />

          <Transition.Child
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            // TODO: アニメーションより先にsponsorがnullになる為CLSが起きる
            // leave="transition duration-200 ease-out"
            // leaveFrom="transform scale-100 opacity-100"
            // leaveTo="transform scale-95 opacity-0"
          >
            <div className="flex items-center justify-center">
              <div className="relative flex items-center justify-center bg-white border-4 rounded border-green-40">
                <div className="absolute z-10 right-3 top-3">
                  <HamburgerMenu buttonRole="close" onClick={onClose} color="black" />
                </div>
                <div className="flex justify-center px-5 pt-16 overflow-y-auto dimension">{children}</div>
              </div>
            </div>
          </Transition.Child>
        </HeadlessuiDialog>
      </Transition>

      <style jsx>{`
        .dimension {
          width: 91.6666vw;
          max-height: 83.3333vh;
          max-width: 1200px;
        }
      `}</style>
    </>
  );
};
