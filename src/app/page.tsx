import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";
import { VideoType } from "@/models/VideoType";
import { makeAPIRequest } from "@/lib/useAPI";

type DataType = { items: VideoType[] };

const getVideos = async () => {
  const data: DataType = await makeAPIRequest("/search", { q: "" }).then(
    (resp: unknown) => resp as DataType
  );
  return data.items;
};

export default async function Home() {
  const videos: VideoType[] = await getVideos().then((d) => {
    return d;
  });
  return (
    <main className={styles.main}>
      {videos?.map((v) => (
        <VideoCard key={v.id.videoId} size="big" video={v} />
      ))}
    </main>
  );
}
