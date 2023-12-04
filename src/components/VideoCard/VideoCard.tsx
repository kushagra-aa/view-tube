import { VideoType } from "@/models/VideoType";
import BigVideoCard from "./BigVideoCard";
import SmallVideoCard from "./SmallVideoCard";
import Link from "next/link";

function VideoCard({
  size,
  video,
}: {
  size: "big" | "small";
  video: VideoType;
}) {
  if (size === "small")
    return (
      <Link href={`/watch?v=${video.id.videoId}`}>
        <SmallVideoCard video={video} />
      </Link>
    );
  if (size === "big")
    return (
      <Link href={`/watch?v=${video.id.videoId}`}>
        <BigVideoCard video={video} />
      </Link>
    );
}

export default VideoCard;
