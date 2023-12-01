import Image from "next/image";
import SearchBox from "./SearchBox/SearchBox";
import { BellIcon, VideoCameraIcon } from "../Icons";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo_area">
        <button title="ViewTube Home" className="logo">
          <Image src="/home-bg.png" alt="view tube" fill sizes="100%" />
        </button>
      </div>
      <div className="search_area">
        <SearchBox />
      </div>

      <div className="side_actions">
        <button title="Create">
          <VideoCameraIcon />
        </button>
        <button title="Notifications">
          <BellIcon />
        </button>
        <div title="User" className="user_icon">
          <Image src="/Shape=Round.png" alt="user" fill sizes="100%" />
        </div>
      </div>
    </header>
  );
}

export default Header;
