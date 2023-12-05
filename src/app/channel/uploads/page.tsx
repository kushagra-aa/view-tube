"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { VideoType } from "@/models/VideoType";
import VideoCard from "@/components/VideoCard/VideoCard";
import { makeAPIRequest } from "@/lib/useAPI";

type DataType = { items: VideoType[] };

const getVideos = async (id: string) => {
  const data: DataType = await makeAPIRequest("/search", {
    channelId: id,
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};

/* /channel?c=<channelID> */
function ChannelUploads() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [searchParams] = useURLSearchParams();

  const get = async (id: string) => {
    await getVideos(id).then((d) => {
      setVideos(d);
    });
  };

  useEffect(() => {
    get(searchParams.c);
  }, [searchParams.c]);

  return (
    <div className={styles.main}>
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </div>
  );
}

export default ChannelUploads;
