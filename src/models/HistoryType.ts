export type HistoryType = {
  id: string;
  publishedAt: string;
  channelId: string;
  title: string;
  thumbnail: {
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
};
