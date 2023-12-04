export type ChannelType = {
  kind: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    country: string;
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      trackingAnalyticsAccountId: string;
      unsubscribedTrailer: string;
      country: string;
    };
    image: {
      bannerExternalUrl: string;
    };
  };
};
