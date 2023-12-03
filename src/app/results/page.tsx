"use client";

import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";
import { VideoType } from "@/models/VideoType";
import { makeAPIRequest } from "@/lib/useAPI";
import { useEffect, useState } from "react";
import useURLSearchParams from "@/hooks/useURLSearchParams";

type DataType = { items: VideoType[] };

const getVideos = async (searchTerm: string) => {
  const data: DataType = await makeAPIRequest("/search", {
    q: searchTerm,
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};

export default function Home() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [searchParams] = useURLSearchParams();
  const get = async (searchQuery: string) => {
    await getVideos(searchQuery).then((d) => {
      setVideos(d);
    });
  };
  useEffect(() => {
    get(searchParams.search);
  }, [searchParams]);
  return (
    <main className={styles.main}>
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </main>
  );
}
