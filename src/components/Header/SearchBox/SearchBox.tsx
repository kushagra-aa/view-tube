import { MicIcon, SearchIcon } from "@/components/Icons";
import "./search-box.css";

function SearchBox() {
  return (
    <div className="search_box">
      <div className="main_box">
        <label htmlFor="search">
          <input placeholder="Search" type="text" name="search" id="search" />
        </label>
        <button title="Search">
          <SearchIcon />
        </button>
      </div>
      <button className="voice_search" title="Voice Search">
        <MicIcon />
      </button>
    </div>
  );
}

export default SearchBox;
