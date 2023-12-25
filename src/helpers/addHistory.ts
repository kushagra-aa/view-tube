import { HistoryType } from "@/models/HistoryType";
import { VideoType } from "@/models/VideoType";

const addHistory = (historyString: string | null, video: VideoType): string => {
  const historyArray: HistoryType[] = JSON.parse(historyString || "[]");
  let newHistory: HistoryType[] = [];
  const historyVideo: HistoryType = {
    channelId: video.snippet.channelId,
    channelTitle: video.snippet.channelTitle,
    id: video.id as unknown as string,
    publishedAt: video.snippet.publishedAt,
    thumbnail: {
      high: video.snippet.thumbnails.high,
    },
    title: video.snippet.title,
  };
  const videoInHistory = historyArray.findIndex(
    (h) => h.id === historyVideo.id
  );
  historyArray.forEach((h, i) => {
    if (videoInHistory !== i) newHistory.push(h);
  });
  newHistory = [historyVideo, ...newHistory];
  return JSON.stringify(newHistory);
};

export default addHistory;
