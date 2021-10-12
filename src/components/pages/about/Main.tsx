import type { VFC } from "react";

import { Highlight, Image, Paragraph } from "@/components/basics";
import { Process, Section } from "@/components/ui";
import { Pc, PcAppDownload, Phone } from "@/components/vectors";
import useMedia from "@/hooks/useMediaQuery";

export const Main: VFC = () => {
  const isWide = useMedia("(min-width: 768px)"); // TODO: tailwind.config.jsから取得

  return (
    <>
      <Section heading="VIRTUAL VENUE" subHeading="バーチャル会場">
        <div className="px-5 md:px-12 md:ml-shead">
          <div className="lg:max-w-app lg:mx-auto">
            <Paragraph>
              バーチャルSNS<Highlight>「cluster」上に芸工のキャンパスが出現！</Highlight>
              {isWide && <br />}
              GEIKOTEN 2021」へ、スマホやPCから是非、ご来場ください。
            </Paragraph>
            <Paragraph>
              ※来場するためにはWindowsかMac、またはスマホにバーチャルSNSアプリ「cluster」をインストールする必要があります。
            </Paragraph>
          </div>
        </div>
        <div className="pt-16 md:pt-24 px-5 md:px-12 md:ml-shead">
          <div className="lg:max-w-app lg:mx-auto">
            <h3 className="text-text text-xl font-bold">参加方法</h3>
            <div className="mt-7 md:mt-8 flex flex-col space-y-6">
              <Process order={1} heading="clusterアプリをダウンロード">
                <div className="relative md:pl-24 py-8">
                  <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-start w-full">
                    {isWide && <div className="w-24 h-full"></div>}
                    <div className="flex flex-col items-center justify-between space-y-11 flex-shrink-0">
                      <div className="bg-green-10 text-sm text-white font-bold rounded-full py-1.5 px-4 min-w-[180px] text-center">
                        スマートフォンの方
                      </div>
                      <div className="flex flex-col items-center justify-between space-y-6 md:space-y-11">
                        <Phone />
                        <div className="flex items-center">
                          <AppStoreLink />
                          <GooglePlayLink />
                        </div>
                      </div>
                    </div>
                    {isWide && <div className="w-24 h-full"></div>}
                    <div className="flex flex-col items-center justify-between space-y-11 flex-shrink-0">
                      <div className="bg-green-10 text-sm text-white font-bold rounded-full py-1.5 px-4 min-w-[180px] text-center">
                        パソコンの方
                      </div>
                      <div className="flex flex-col items-center justify-between space-y-6 md:space-y-11">
                        <Pc />
                        <div className="pb-3">
                          <PcAppDownload />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Process>
              <Process order={2} heading="ワールドに訪れる" line={false}>
                <div className="md:flex py-4 md:pl-24 md:py-8">
                  {isWide && <div className="w-24 h-full"></div>}
                  <div>
                    <Paragraph className="flex-shrink-0">
                      cluster内で「GEIKOTEN2021」のワールドを探すか、
                      {isWide && <br />}
                      下記リンクよりご来場いただけます。
                    </Paragraph>
                    {/* TODO: clusterのリンクを追加 */}
                  </div>
                </div>
              </Process>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

const AppStoreLink = () => {
  return (
    <>
      <a href="https://apps.apple.com/us/app/cluster-%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%BF%E3%83%BC/id1490075175?itsct=apps_box_badge&amp;itscg=30200">
        <Image
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&amp;releaseDate=1582675200&h=305d134bc929cbf015bffbe80f5f1ec2"
          alt="Download on the App Store"
          width={115}
          height={32}
        />
      </a>

      <style jsx>{`
        a {
          overflow: hidden;
          border-radius: 13px;
        }
        img {
          border-radius: 13px;
        }
      `}</style>
    </>
  );
};

const GooglePlayLink = () => {
  return (
    <>
      <a href="https://play.google.com/store/apps/details?id=mu.cluster.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <Image
          alt="Google Play で手に入れよう"
          src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
          width={115}
          height={45}
        />
      </a>
    </>
  );
};
