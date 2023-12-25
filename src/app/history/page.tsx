"use client";

import VideoCardLoader from "@/components/VideoCard/VideoCardLoader";
import styles from "./page.module.css";
import VideoCard from "@/components/VideoCard/VideoCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import { HistoryType } from "@/models/HistoryType";
import { useEffect, useState } from "react";
import HistoryVideoCard from "@/components/VideoCard/HistoryVideoCard";

const getHistory = async (history: string | null): Promise<HistoryType[]> => {
  const historyArray: HistoryType[] = JSON.parse(history || "[]");
  return historyArray;
};

function History() {
  const [videos, setVideos] = useState<HistoryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { get: getLocalStorage, set: setLocalStorage } = useLocalStorage();

  const get = async () => {
    setIsLoading(true);
    await getHistory(getLocalStorage("history")).then((s) => {
      setVideos(s);
      setIsLoading(false);
    });
  };

  const clearHistory = () => {
    setLocalStorage("history", "[]");
    get();
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.actions}>
        <h1>User Watch History</h1>
        <button className={styles.clear_action} onClick={clearHistory}>
          Clear History
        </button>
      </div>
      <div className={styles.history_grid}>
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <VideoCardLoader type="big" key={i} />
            ))
          : null}
        {videos?.map((v) => (
          <HistoryVideoCard key={v.id} video={v} />
        ))}
      </div>
    </main>
  );
}

export default History;
