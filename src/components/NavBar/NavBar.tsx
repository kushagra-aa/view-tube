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

const homeItem = {
  name: "Home",
  icon: <HomeIcon />,
  route: "",
};
const exploreItems = [
  {
    name: "Trending",
    icon: <FireIcon />,
    route: "",
  },
  {
    name: "Shopping",
    icon: <BagIcon />,
    route: "",
  },
  {
    name: "Music",
    icon: <MusicIcon />,
    route: "",
  },
  {
    name: "Gaming",
    icon: <GamingIcon />,
    route: "",
  },
  {
    name: "Coding",
    icon: <CodingIcon />,
    route: "",
  },
];
const categoryItems = [
  {
    name: "NextJS",
    route: "",
  },
  {
    name: "ReactJS",
    route: "",
  },
  {
    name: "JavaScript",
    route: "",
  },
  {
    name: "TypeScript",
    route: "",
  },
  {
    name: "TailwindCSS",
    route: "",
  },
  {
    name: "CSS",
    route: "",
  },
];

function NavBar() {
  return (
    <nav>
      <Link
        href={homeItem.route}
        key={homeItem.name}
        title={homeItem.name}
        className="nav_item"
      >
        {homeItem.icon}
        {homeItem.name}
      </Link>
      <span>Explore</span>
      {exploreItems.map((item) => (
        <Link
          href={item.route}
          key={item.name}
          title={item.name}
          className="nav_item"
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
      <span>Categories</span>
      {categoryItems.map((item, i) => (
        <Link
          href={item.route}
          key={item.name}
          title={item.name}
          className="nav_item"
        >
          {i % 2 !== 0 ? <CodeBoxedIcon /> : <CodeIcon />}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
