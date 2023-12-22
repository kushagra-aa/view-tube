import React from "react";
import styles from "./page.module.css";
import { CommentIcon, LikeIcon, ViewIcon } from "@/components/Icons";

function VideoLoader() {
  return (
    <div className={`${styles.video} ${styles.video_loader}`}>
      <div className={`${styles.player} ${styles.player_loader}`}></div>
      <div className={`${styles.video_details} ${styles.video_details_loader}`}>
        <h1 className={`${styles.title} ${styles.title_loader}`}></h1>
        <div className={`${styles.stats} ${styles.stats_loader}`}>
          <div title="Views" className={`${styles.stat} ${styles.stat_loader}`}>
            <ViewIcon />
          </div>
          <div title="Likes" className={`${styles.stat} ${styles.stat_loader}`}>
            <LikeIcon />
          </div>
          <div
            title="Comments"
            className={`${styles.stat} ${styles.stat_loader}`}
          >
            <CommentIcon />
          </div>
        </div>
        <p className={`${styles.date}`}>
          <span className={`${styles.time} ${styles.time_loader}`}></span>
          <span>•</span>
          <span className={`${styles.date} ${styles.date_loader}`}></span>
        </p>
        <p className={`${styles.tags} ${styles.tags_loader}`}>
          {[1, 2, 3, 4].map((t) => (
            <span
              className={`${styles.tag} ${styles.tag_loader}`}
              key={t}
            ></span>
          ))}
        </p>
        <p className={`${styles.action_video} ${styles.action_video_loader}`}>
          Watch On Youtube
        </p>
        <div className={`${styles.channel} ${styles.channel_loader}`}>
          <div
            className={`${styles.channel_link} ${styles.channel_link_loader}`}
          >
            <div
              className={`${styles.channel_icon} ${styles.channel_icon_loader}`}
            ></div>
            <h2
              className={`${styles.channel_title} ${styles.channel_title_loader}`}
            ></h2>
          </div>
          <div
            className={`${styles.channel_action} ${styles.channel_action_loader}`}
          >
            <p
              className={`${styles.channel_action_link} ${styles.channel_action_link_loader}`}
            >
              View Channel on Youtube
            </p>
          </div>
        </div>
        <div
          className={`${styles.description} ${styles.description_loader}`}
        ></div>
      </div>
    </div>
  );
}

export default VideoLoader;
