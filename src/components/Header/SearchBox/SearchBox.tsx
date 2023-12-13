"use client";
import { MicIcon, SearchIcon } from "@/components/Icons";
import "./search-box.css";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useURLSearchParams from "@/hooks/useURLSearchParams";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const [shouldStopSearch, setShouldStopSearch] = useState(false);
  const router = useRouter();
  const [searchParams] = useURLSearchParams();

  const handleSearchValueChange = (val: string) => {
    setSearchValue(val);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  };

  const onSearch = (v: string) => {
    if (v && v !== "") {
      setShouldStopSearch(true);
      router.push(`/results?search=${v}`);
      setShouldStopSearch(false);
    }
  };

  useDebounce(
    () => {
      if (onSearch && !shouldStopSearch) {
        onSearch(searchValue);
      }
    },
    [searchValue],
    500
  );
  useEffect(() => {
    setSearchValue(searchParams.search);
  }, [searchParams.search]);

  return (
    <div className="search_box">
      <div className="main_box">
        <label htmlFor="search">
          <input
            placeholder="Search"
            type="text"
            name="search"
            id="search"
            value={searchValue || ""}
            onChange={(e) => {
              handleSearchValueChange(e.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
        </label>
        <button onClick={() => onSearch(searchValue)} title="Search">
          <SearchIcon />
        </button>
      </div>
      <button
        onClick={() => onSearch(searchValue)}
        className="voice_search"
        title="Voice Search"
      >
        <MicIcon />
      </button>
    </div>
  );
}

export default SearchBox;
