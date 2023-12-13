"use client";
import Link from "next/link";
import {
  BagIcon,
  CodeBoxedIcon,
  CodeIcon,
  CodingIcon,
  FireIcon,
  GamingIcon,
  HomeIcon,
  MusicIcon,
} from "../Icons";
import "./nav-bar.css";
import { usePathname, useSearchParams } from "next/navigation";
import useURLSearchParams from "@/hooks/useURLSearchParams";

const homeItem = {
  name: "Home",
  icon: <HomeIcon />,
  route: "/",
};
const exploreItems = [
  {
    name: "Trending",
    icon: <FireIcon />,
    route: "Trending",
  },
  {
    name: "Music",
    icon: <MusicIcon />,
    route: "Music",
  },
  {
    name: "Gaming",
    icon: <GamingIcon />,
    route: "Gaming",
  },
  {
    name: "Coding",
    icon: <CodingIcon />,
    route: "Coding",
  },
  {
    name: "Shopping",
    icon: <BagIcon />,
    route: "Shopping",
  },
];
const categoryItems = [
  {
    name: "NextJS",
    route: "NextJS",
  },
  {
    name: "ReactJS",
    route: "ReactJS",
  },
  {
    name: "JavaScript",
    route: "JavaScript",
  },
  {
    name: "TypeScript",
    route: "TypeScript",
  },
  {
    name: "TailwindCSS",
    route: "TailwindCSS",
  },
  {
    name: "CSS",
    route: "CSS",
  },
];

function NavBar() {
  const pathname = usePathname();
  const [searchParams] = useURLSearchParams();
  return (
    <nav>
      <Link
        href={homeItem.route}
        key={homeItem.name}
        title={homeItem.name}
        className={`nav_item ${pathname === homeItem.route ? "active" : ""}`}
      >
        {homeItem.icon}
        {homeItem.name}
      </Link>
      <span>Explore</span>
      {exploreItems.map((item) => (
        <Link
          href={`/results?search=${item.route}`}
          key={item.name}
          title={item.name}
          className={`nav_item explore_items ${
            searchParams.search === item.route ? "active" : ""
          }`}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
      <span>Categories</span>
      {categoryItems.map((item, i) => (
        <Link
          href={`/results?search=${item.route}`}
          key={item.name}
          title={item.name}
          className={`nav_item categories_items ${
            searchParams.search === item.route ? "active" : ""
          }`}
        >
          {i % 2 !== 0 ? <CodeBoxedIcon /> : <CodeIcon />}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
