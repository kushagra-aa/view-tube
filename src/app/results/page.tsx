"use client";

import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";
import { VideoType } from "@/models/VideoType";
import { makeAPIRequest } from "@/lib/useAPI";
import { useEffect, useState } from "react";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import VideoCardLoader from "@/components/VideoCard/VideoCardLoader";

type DataType = { items: VideoType[] };

const getVideos = async (searchTerm: string) => {
  const data: DataType = await makeAPIRequest("/search", {
    q: searchTerm,
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};

export default function Results() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [searchParams] = useURLSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const get = async (searchQuery: string) => {
    setIsLoading(true);
    await getVideos(searchQuery).then((d) => {
      setVideos(d);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    get(searchParams.search);
  }, [searchParams]);

  return (
    <main className={styles.main}>
      {isLoading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <VideoCardLoader type="big" key={i} />
          ))
        : null}
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </main>
  );
}
