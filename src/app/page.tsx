"use client";
import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";
import { VideoType } from "@/models/VideoType";
import { makeAPIRequest } from "@/lib/useAPI";
import { useEffect, useState } from "react";

type DataType = { items: VideoType[] };

const getVideos = async () => {
  const data: DataType = await makeAPIRequest("/search", { q: "" }).then(
    (resp: unknown) => resp as DataType
  );
  return data.items;
};

export default function Home() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const get = async () => {
    await getVideos().then((d) => {
      setVideos(d);
    });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <main className={styles.main}>
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </main>
  );
}
