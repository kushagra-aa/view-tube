"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChannelType } from "@/models/ChannelType";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { makeAPIRequest } from "@/lib/useAPI";
import "./layout.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

type DataType = { items: ChannelType[] };

const getChannelAPI = async (id: string) => {
  const data: DataType = await makeAPIRequest("/channels", {
    id: id,
    part: "snippet",
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};

/* /channel?c=<channelID> */
function ChannelLayout({ children }: { children: React.ReactNode }) {
  const [channel, setChannel] = useState<ChannelType>();
  const [searchParams] = useURLSearchParams();
  const pathname = usePathname();

  const get = async (id: string) => {
    await getChannelAPI(id).then((d) => {
      setChannel(d[0]);
    });
  };

  useEffect(() => {
    get(searchParams.c);
  }, [searchParams.c]);

  if (!channel)
    return (
      <main className={`main flex-col items-center justify-center`}>
        <h1 className="text-6xl text-center text-red-300">
          Channel Not Found:{"("}
        </h1>
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8"
        >
          Go Home
        </Link>
      </main>
    );

  return (
    <main className="main">
      <div className="channel">
        <div className="channel_banner">
          <Image
            src={channel.brandingSettings.image.bannerExternalUrl}
            alt="banner"
            fill
            sizes="100%"
          />
        </div>
        <div className="channel_icon">
          <Image
            src={channel.snippet.thumbnails.high.url}
            alt="banner"
            fill
            sizes="100%"
          />
        </div>
        <h1>{channel?.snippet.title}</h1>
        <Link
          className={"channel_action"}
          href={`https://www.youtube.com/${channel?.snippet.customUrl}`}
          target="_blank"
        >
          View Channel on Youtube
        </Link>
      </div>
      <div className="channel_nav">
        <Link
          className={`${pathname === "/channel" ? "active" : ""}`}
          href={`/channel?c=${channel.id}`}
        >
          Channel Statistics
        </Link>
        <Link
          className={`${pathname === "/channel/uploads" ? "active" : ""}`}
          href={`/channel/uploads?c=${channel.id}`}
        >
          Channel Uploads
        </Link>
      </div>
      <div className="channel_details">{children}</div>
    </main>
  );
}

export default ChannelLayout;
