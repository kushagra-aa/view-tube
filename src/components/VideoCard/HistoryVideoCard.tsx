import Image from "next/image";
import { formatDate, formatTime, relativeTime } from "@/helpers/dateTime";
import { HistoryType } from "@/models/HistoryType";
import "./video-card.css";

function HistoryVideoCard({ video }: { video: HistoryType }) {
  return (
    <div className="big_video_card video_card">
      <div className="video_tumbnail">
        <Image src={video.thumbnail?.high?.url} alt="alt" sizes="100%" fill />
        {video.publishedAt && (
          <span className="ago">{relativeTime(video?.publishedAt)}</span>
        )}
      </div>
      <p className="video_title">{video?.title}</p>
      <p className="video_channel">{video?.channelTitle}</p>
      <div className="video_upload">
        <span className="time">
          {video.publishedAt ? formatTime(video?.publishedAt) : "--"}
        </span>
        <span>•</span>
        <span className="date">
          {video.publishedAt ? formatDate(video?.publishedAt) : "--"}
        </span>
      </div>
    </div>
  );
}

export default HistoryVideoCard;
