import { Dialog, Transition } from "@headlessui/react";
import type { VFC } from "react";
import { Fragment } from "react";

import { Image } from "@/components/basics";
import { Comment, Place, Store, Tel, Time } from "@/components/icons";
import { HamburgerMenu } from "@/components/layouts/SPLayout/HamburgerMenu";
import type { Sponsor } from "@/models/Sponsor";

type Props = {
  open: boolean;
  onClose: () => void;
  sponsor: Sponsor;
};

export const SponsorDialog: VFC<Props> = (props) => {
  const { open, onClose, sponsor } = props;

  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog static open={open} onClose={onClose} className="fixed inset-0 z-10 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-brown bg-opacity-80" />

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
                <div className="flex justify-center px-5 pt-16 overflow-y-auto dimension">
                  {sponsor && (
                    <div className="flex flex-col items-center">
                      <figure className="relative max-w-[400px] w-full">
                        <Image
                          src={sponsor.images.mainUrl}
                          width={287}
                          height={193}
                          layout="responsive"
                          loading="lazy"
                          alt={sponsor.name}
                        />
                      </figure>
                      <div className="max-w-[560px] mt-6 flex flex-col items-start space-y-3 pb-10">
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
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>

      <style jsx>{`
        .dimension {
          width: 91.6666vw;
          max-height: 83.3333vh;
          max-width: 1200px;
        }

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
