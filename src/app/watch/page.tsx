"use client";

import ReactPlayer from "react-player";
import styles from "./page.module.css";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { useEffect, useState } from "react";
import { VideoStatsType, VideoType } from "@/models/VideoType";
import { makeAPIRequest } from "@/lib/useAPI";
import Link from "next/link";
import VideoCard from "@/components/VideoCard/VideoCard";
import { formatDate, formatTime } from "@/helpers/dateTime";
import { ChannelType } from "@/models/ChannelType";
import Image from "next/image";
import { CommentIcon, LikeIcon, ViewIcon } from "@/components/Icons";

type VideoDetailsType = VideoType & VideoStatsType;
type DataType = { items: VideoDetailsType[] };
type ChannelDataType = { items: ChannelType[] };

const getVideo = async (videoID: string) => {
  const data: DataType = await makeAPIRequest("/videos", {
    id: videoID,
    part: "contentDetails,snippet,statistics",
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};
const getRelatedVideos = async (videoID: string) => {
  const data: DataType = await makeAPIRequest("/search", {
    relatedToVideoId: videoID,
    type: "video",
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};
const getChannelAPI = async (id: string) => {
  const data: ChannelDataType = await makeAPIRequest("/channels", {
    id: id,
    part: "snippet,statistics",
  }).then((resp: unknown) => resp as ChannelDataType);
  return data.items;
};

function Watch() {
  const [video, setVideo] = useState<VideoDetailsType>();
  const [relatedVideos, setRelatedVideos] = useState<VideoType[]>([]);
  const [channel, setChannel] = useState<ChannelType>();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [searchParams] = useURLSearchParams();

  const getChannel = async (id: string) => {
    await getChannelAPI(id).then((d) => {
      setChannel(d[0]);
    });
  };
  const get = async (videoID: string) => {
    await getVideo(videoID).then((d) => {
      setVideo(d[0]);
    });
    await getRelatedVideos(videoID).then((d) => {
      setRelatedVideos(d);
    });
  };

  useEffect(() => {
    get(searchParams.v);
  }, [searchParams.v]);
  useEffect(() => {
    if (video) getChannel(video.snippet.channelId);
  }, [video]);

  if (!video)
    return (
      <main className={`${styles.main} flex-col items-center justify-center`}>
        <h1 className="text-6xl text-center text-red-300">
          Video Not Found:{"("}
        </h1>
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8"
        >
          Go Home
        </Link>
      </main>
    );

  return (
    <main className={styles.main}>
      <div className={styles.video}>
        <div className={styles.player}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${searchParams.v}`}
          />
        </div>
        <div className={styles.video_details}>
          <h1 className={styles.title}>{video.snippet.title}</h1>
          <div className={styles.stats}>
            <div title="Views" className={styles.stat}>
              <ViewIcon />
              {video.statistics.viewCount}
            </div>
            <div title="Likes" className={styles.stat}>
              <LikeIcon />
              {video.statistics.likeCount}
            </div>
            <div title="Comments" className={styles.stat}>
              <CommentIcon />
              {video.statistics.commentCount}
            </div>
          </div>
          <p className={styles.date}>
            <span className={styles.time}>
              {formatTime(video.snippet.publishedAt)}
            </span>
            <span>•</span>
            <span className={styles.date}>
              {formatDate(video.snippet.publishedAt)}
            </span>
          </p>
          <p className={styles.tags}>
            {video.snippet.tags?.slice(0, 5).map((tag) => (
              <Link
                className={styles.tag}
                href={`/results?search=${tag}`}
                key={tag}
              >
                #{tag}
              </Link>
            ))}
          </p>
          <Link
            className={styles.action_video}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
          >
            Watch On Youtube
          </Link>
          {channel && (
            <div className={styles.channel}>
              <Link
                className={styles.channel_link}
                href={`/channel?c=${channel.id}`}
              >
                <div className={styles.channel_icon}>
                  <Image
                    src={channel.snippet?.thumbnails?.high?.url}
                    alt={channel.snippet?.title}
                    fill
                    sizes="100%"
                  />
                </div>
                <h2 className={styles.channel_title}>
                  {channel.snippet.title}
                </h2>
              </Link>
              <div className={styles.channel_action}>
                <Link
                  className={styles.channel_action_link}
                  href={`https://www.youtube.com/${channel?.snippet.customUrl}`}
                  target="_blank"
                >
                  View Channel on Youtube
                </Link>
              </div>
            </div>
          )}
          <div className={styles.description}>
            {isDescriptionOpen ? (
              <>
                <p
                  className={styles.full_description}
                  dangerouslySetInnerHTML={{
                    __html: video.snippet.description,
                  }}
                />
                <button
                  className={styles.collapse_btn}
                  onClick={() => setIsDescriptionOpen(false)}
                  title="Click To Collapse"
                >
                  Read Less
                </button>
              </>
            ) : (
              <p
                className={styles.short_description}
                onClick={() => setIsDescriptionOpen(true)}
                title="Click To Expand"
                dangerouslySetInnerHTML={{ __html: video.snippet.description }}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.related_videos}>
        {relatedVideos.map((v) => (
          <VideoCard key={v.id.videoId} size="small" video={v} />
        ))}
      </div>
    </main>
  );
}

export default Watch;
