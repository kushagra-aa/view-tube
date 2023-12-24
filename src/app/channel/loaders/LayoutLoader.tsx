import { ReactNode } from "react";
import "./loader.css";
import Link from "next/link";

function LayoutLoader({
  children,
  pathname,
  id,
}: {
  children: ReactNode;
  pathname: string;
  id: string;
}) {
  return (
    <main className="main">
      <div className="channel channel_loader">
        <div className="channel_banner channel_banner_loader" />
        <div className="channel_icon channel_icon_loader" />
        <h1 />
        <p className={"channel_action channel_action_loader"}>
          View Channel on Youtube
        </p>
      </div>
      <div className="channel_nav">
        <Link
          className={`${pathname === "/channel" ? "active" : ""}`}
          href={`/channel?c=${id}`}
        >
          Channel Statistics
        </Link>
        <Link
          className={`${pathname === "/channel/uploads" ? "active" : ""}`}
          href={`/channel/uploads?c=${id}`}
        >
          Channel Uploads
        </Link>
      </div>
      {children}
    </main>
  );
}

export default LayoutLoader;
