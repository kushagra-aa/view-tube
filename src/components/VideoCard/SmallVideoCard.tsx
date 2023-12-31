import Image from "next/image";
import "./video-card.css";
import { formatDate, formatTime, relativeTime } from "@/helpers/dateTime";
import { VideoType } from "@/models/VideoType";

function SmallVideoCard({ video }: { video: VideoType }) {
  return (
    <div className="small_video_card video_card">
      <div className="video_tumbnail">
        <Image
          src={video.snippet?.thumbnails?.high?.url}
          alt="alt"
          sizes="100%"
          fill
        />
        {video.snippet.publishedAt && (
          <span className="ago">
            {relativeTime(video.snippet?.publishedAt)}
          </span>
        )}
      </div>
      <p className="video_title">{video.snippet?.title}</p>
      <p className="video_channel">{video.snippet?.channelTitle}</p>
      <div className="video_upload">
        <span className="time">
          {video.snippet.publishedAt
            ? formatTime(video.snippet?.publishedAt)
            : "--"}
        </span>
        <span>•</span>
        <span className="date">
          {video.snippet.publishedAt
            ? formatDate(video.snippet?.publishedAt)
            : "--"}
        </span>
      </div>
    </div>
  );
}

export default SmallVideoCard;
