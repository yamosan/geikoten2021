import type { VFC } from "react";

import { ExternalLink, FadeIn, Highlight, Image, Paragraph } from "@/components/basics";
import { Process, Section } from "@/components/ui";
import { Pc, PcAppDownload, Phone } from "@/components/vectors";
import { CLUSTER_URL } from "@/constants/urls";
import useMedia from "@/hooks/useMediaQuery";

export const Main: VFC = () => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <>
      <Section heading="VIRTUAL VENUE" subHeading="バーチャル会場">
        <div className="px-5 md:px-12 md:ml-shead">
          <div className="lg:max-w-app lg:mx-auto">
            <FadeIn>
              <Paragraph>
                バーチャルSNS<Highlight>「cluster」上に芸工のキャンパスが出現！</Highlight>
                {isWide && <br />}
                GEIKOTEN 2021」へ、スマホやPCから是非、ご来場ください。
              </Paragraph>
            </FadeIn>
            <FadeIn>
              <Paragraph>
                ※来場するためにはWindowsかMac、またはスマホにバーチャルSNSアプリ「cluster」をインストールする必要があります。
              </Paragraph>
            </FadeIn>
          </div>
        </div>
        <div className="py-16 md:py-24 px-5 md:px-12 md:ml-shead">
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
                          <ExternalLink href="https://cluster.mu/downloads">
                            <PcAppDownload />
                          </ExternalLink>
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
                    <FadeIn>
                      <Paragraph className="flex-shrink-0">
                        cluster内で「GEIKOTEN2021」のワールドを探すか、
                        {isWide && <br />}
                        下記リンクよりご来場いただけます。
                      </Paragraph>
                    </FadeIn>

                    <div className="mt-4 flex justify-center">
                      <ClusterLinkCard />
                    </div>
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

const ClusterLinkCard = () => {
  return (
    <ExternalLink href={CLUSTER_URL}>
      <div className="flex border-2 border-lightBrown h-auto sm:h-[138px] sm:w-[530px]">
        <div className="flex-[2.2] sm:flex-[1.8] border-r-2 border-lightBrown flex flex-col justify-center items-start p-4 md:px-6">
          <h5 className="text-[11px] md:text-[15px] font-bold">GEIKOTEN2021</h5>
          <p className="pt-1 text-[10px]">バーチャルSNS Cluster(クラスター)</p>

          <p className="pt-2 md:pt-6 text-[10px] leading-none">{CLUSTER_URL}</p>
        </div>
        <div className="flex-1 relative">
          <Image src="/images/about/card.png" layout="fill" objectFit="cover" alt="バーチャル会場" />
        </div>
      </div>
    </ExternalLink>
  );
};
