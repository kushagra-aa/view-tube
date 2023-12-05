"use client";
import { ChannelType } from "@/models/ChannelType";
import styles from "./page.module.css";
import { makeAPIRequest } from "@/lib/useAPI";
import { useEffect, useState } from "react";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { usePathname } from "next/navigation";
import { formatDate } from "@/helpers/dateTime";
import {
  InfoIcon,
  SubscriberIcon,
  VideoIcon,
  ViewIcon,
} from "@/components/Icons";

type DataType = { items: ChannelType[] };

const getChannelAPI = async (id: string) => {
  const data: DataType = await makeAPIRequest("/channels", {
    id: id,
    part: "snippet,statistics",
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};

/* /channel?c=<channelID> */
function ChannelStats() {
  const [channel, setChannel] = useState<ChannelType>();
  const [searchParams] = useURLSearchParams();

  const get = async (id: string) => {
    await getChannelAPI(id).then((d) => {
      setChannel(d[0]);
    });
  };

  useEffect(() => {
    get(searchParams.c);
  }, [searchParams.c]);
  if (!channel) return <></>;

  return (
    <div className={styles.main}>
      <div className={styles.stat_card}>
        <SubscriberIcon />
        <h2 className={styles.stat_title}>Subscribers:</h2>
        <p className={styles.stat_value}>
          {channel.statistics.subscriberCount}
        </p>
      </div>
      <div className={styles.stat_card}>
        <VideoIcon />
        <h2 className={styles.stat_title}>Total Videos:</h2>
        <p className={styles.stat_value}>{channel.statistics.videoCount}</p>
      </div>
      <div className={styles.stat_card}>
        <ViewIcon />
        <h2 className={styles.stat_title}>Total Views:</h2>
        <p className={styles.stat_value}>{channel.statistics.viewCount}</p>
      </div>
      <div className={styles.stat_card}>
        <InfoIcon />
        <h2 className={styles.stat_title}>Joined On:</h2>
        <p className={styles.stat_value}>
          {formatDate(channel.snippet.publishedAt)}
        </p>
      </div>
      <div className={styles.description}>
        <h2 className={styles.description_title}>Description:</h2>
        <p className={styles.description_value}>
          {channel.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default ChannelStats;
