"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { VideoType } from "@/models/VideoType";
import VideoCard from "@/components/VideoCard/VideoCard";
import { makeAPIRequest } from "@/lib/useAPI";
import VideoCardLoader from "@/components/VideoCard/VideoCardLoader";

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
  const [isLoading, setIsLoading] = useState(true);
  const get = async (id: string) => {
    setIsLoading(true);
    await getVideos(id).then((d) => {
      setVideos(d);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    get(searchParams.c);
  }, [searchParams.c]);

  return (
    <div className={styles.main}>
      {isLoading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <VideoCardLoader type="big" key={i} />
          ))
        : null}
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </div>
  );
}

export default ChannelUploads;
