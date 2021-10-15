import type { VFC } from "react";

import { Image } from "@/components/basics";
import { Dialog } from "@/components/ui/Dialog";
import { Comment, Place, Store, Tel, Time } from "@/components/vectors";
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
      <Dialog open={open} onClose={onClose}>
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
      </Dialog>
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
