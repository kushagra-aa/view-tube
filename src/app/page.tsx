import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="py-2 px-8 flex gap-x-4 gap-y-14 flex-wrap justify-between items-start">
      <VideoCard size="small" />
      <VideoCard size="small" />
      <VideoCard size="small" />
      <VideoCard size="small" />
    </main>
  );
}
