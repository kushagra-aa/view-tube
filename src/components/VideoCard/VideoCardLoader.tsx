import "./video-card.css";

function VideoCardLoader({ type }: { type: "big" | "small" }) {
  return (
    <div className={`loader_video_card ${type}_video_card video_card`}>
      <div className="video_tumbnail" />
      <p className="video_title">
        <span />
        <span />
      </p>
      <p className="video_channel" />
      <div className="video_upload">
        <span className="time" />
        <span>•</span>
        <span className="date" />
      </div>
    </div>
  );
}

export default VideoCardLoader;
