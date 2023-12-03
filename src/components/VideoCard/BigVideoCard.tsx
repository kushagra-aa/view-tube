import Image from "next/image";
import "./video-card.css";
import { formatDate, formatTime, relativeTime } from "@/helpers/dateTime";

const videoDetails = {
  id: "ekPbZqPvCRA",
  thumbnail:
    "https://i.ytimg.com/vi/ekPbZqPvCRA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7RDTSW1V2Sz3I4k19ahgs4LapfA",
  title:
    "Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Something else that makes too much sense and is definitely not clickbait",
  channel: "Josh Never Tried Coding",
  uploaded: "2023-12-03T05:14:34Z",
};

function BigVideoCard() {
  return (
    <div className="big_video_card video_card">
      <div className="video_tumbnail">
        <Image src={videoDetails.thumbnail} alt="alt" sizes="100%" fill />
        <span className="ago">{relativeTime(videoDetails.uploaded)}</span>
      </div>
      <p className="video_title">{videoDetails.title}</p>
      <p className="video_channel">{videoDetails.channel}</p>
      <div className="video_upload">
        <span className="time">{formatTime(videoDetails.uploaded)}</span>
        <span>•</span>
        <span className="date">{formatDate(videoDetails.uploaded)}</span>
      </div>
    </div>
  );
}

export default BigVideoCard;
