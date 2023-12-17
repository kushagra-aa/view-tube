"use client";
import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";
import { VideoType } from "@/models/VideoType";
import { makeAPIRequest } from "@/lib/useAPI";
import { useEffect, useState } from "react";
import VideoCardLoader from "@/components/VideoCard/VideoCardLoader";

type DataType = { items: VideoType[] };

const getVideos = async () => {
  const data: DataType = await makeAPIRequest("/search", { q: "" }).then(
    (resp: unknown) => resp as DataType
  );
  return data.items;
};

export default function Home() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const get = async () => {
    setIsLoading(true);
    await getVideos().then((d) => {
      setVideos(d);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <main className={styles.main}>
      {isLoading
        ? [1, 2, 3, 4, 5, 6].map((i) => <VideoCardLoader type="big" key={i} />)
        : null}
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </main>
  );
}
