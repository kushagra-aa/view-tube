import { makeAPIRequest } from "@/lib/useAPI";
import styles from "./page.module.css";
import { VideoType } from "@/models/VideoType";

type DataType = { items: VideoType[] };

const getChannel = async () => {
  const data: DataType = await makeAPIRequest("/videos", {
    q: "",
  }).then((resp: unknown) => resp as DataType);
  return data.items;
};

/* /channel?c=<channelID> */
async function Channel() {
  const data: VideoType[] = await getChannel().then((d) => {
    return d;
  });
  return (
    <div className={styles.main}>
      {data?.map((d) => (
        <>
          <span key={d.id.videoId}>{d.snippet.title}</span>
          <br />
          <span key={d.id.videoId}>{d.id.videoId}</span>
          <hr />
          {JSON.stringify(d)}
          <hr />
        </>
      ))}
    </div>
  );
}

export default Channel;
