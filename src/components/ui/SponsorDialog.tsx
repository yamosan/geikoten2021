import { Dialog, Transition } from "@headlessui/react";
import type { VFC } from "react";
import { Fragment } from "react";

import { Image } from "@/components/basics";
import { Comment, Place, Store, Tel, Time } from "@/components/icons";
import { HamburgerMenu } from "@/components/layouts/SPLayout/HamburgerMenu";
import type { Sponsor } from "@/types/Sponsor";

type Props = {
  open: boolean;
  onClose: () => void;
  sponsor: Sponsor;
};

export const SponsorDialog: VFC<Props> = (props) => {
  const { open, onClose, sponsor } = props;

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog static open={open} onClose={onClose} className="fixed inset-0 z-10 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-brown bg-opacity-80" />

          <Transition.Child
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="relative flex items-center justify-center w-11/12 h-5/6">
              <div className="w-full max-h-full px-5 pt-16 pb-10 overflow-y-scroll bg-white border-4 rounded border-green-40">
                <div className="absolute z-10 right-3 top-3">
                  <HamburgerMenu buttonRole="close" onClick={onClose} color="black" />
                </div>

                <div className="flex flex-col">
                  <figure className="relative max-w-[400px] mx-auto w-full">
                    <Image
                      src={sponsor.images.mainUrl}
                      width={287}
                      height={193}
                      layout="responsive"
                      alt={sponsor.name}
                    />
                  </figure>
                  <div className="max-w-[560px] mx-auto mt-6 flex flex-col items-start space-y-3">
                    {sponsor.name && (
                      <dl className="table">
                        <dt aria-label="店名">
                          <Store />
                        </dt>
                        <dd>{sponsor.name}</dd>
                      </dl>
                    )}
                    {sponsor.address && (
                      <dl className="table">
                        <dt aria-label="住所">
                          <Place />
                        </dt>
                        <dd>{sponsor.address}</dd>
                      </dl>
                    )}
                    {sponsor.name && (
                      <dl className="table">
                        <dt aria-label="営業日">
                          <Time />
                        </dt>
                        <dd>{sponsor.businessHours}</dd>
                      </dl>
                    )}
                    {sponsor.name && (
                      <dl className="table">
                        <dt aria-label="電話番号">
                          <Tel />
                        </dt>
                        <dd>{sponsor.tel}</dd>
                      </dl>
                    )}
                    {sponsor.name && (
                      <dl className="table">
                        <dt aria-label="コメント">
                          <Comment />
                        </dt>
                        <dd>{sponsor.comment}</dd>
                      </dl>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <style jsx>{`
        .table {
          @apply flex space-x-4 items-start;
        }
        .table > dt {
          @apply w-5 h-5 flex-shrink-0;
          margin-top: 0.2em;
        }
        .table > dd {
          @apply text-xs text-text leading-loose whitespace-pre-wrap;
        }
      `}</style>
    </>
  );
};

// export const SponsorDialog: VFC<Props> = (props) => {
//   return (
//     <Transition.Root show={props.open} as={Fragment}>
//       <Dialog static open={props.open} onClose={props.onClose} className="fixed inset-0 z-10 overflow-y-auto">
//         <div className="min-h-screen text-center min-w-screen">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
//           </Transition.Child>

//           <div className="fixed w-full sm:align-middle sm:transform">
//             <Transition.Child
//               as={Fragment}
//               enter="transform ease-in-out duration-300 sm:ease-out"
//               enterFrom="translate-y-full sm:translate-y-0 sm:opacity-0 sm:scale-95"
//               enterTo="translate-y-0 sm:opacity-100 sm:scale-100"
//               leave="transform ease-in-out duration-200 sm:ease-in"
//               leaveFrom="translate-y-0 sm:opacity-100 sm:scale-100"
//               leaveTo="translate-y-full sm:translate-y-0 sm:opacity-0 sm:scale-95"
//             >
//               <div className="relative px-6 pt-20 pb-12 bg-white dark:bg-gray-800 rounded-t-3xl sm:rounded-2xl">
//                 <HamburgerMenu buttonRole="close" onClick={props.onClose} />
//                 <div>{props.children}</div>
//               </div>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// };
