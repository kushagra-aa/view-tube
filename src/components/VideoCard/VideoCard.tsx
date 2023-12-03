import BigVideoCard from "./BigVideoCard";
import SmallVideoCard from "./SmallVideoCard";

function VideoCard({ size }: { size: "big" | "small" }) {
  if (size == "small") return <SmallVideoCard />;
  if (size == "big") return <BigVideoCard />;
}

export default VideoCard;
