import {
  InfoIcon,
  SubscriberIcon,
  VideoIcon,
  ViewIcon,
} from "@/components/Icons";
import "./loader.css";

function StatsLoader() {
  return (
    <div className="main_loader">
      <div className="stat_card_loader">
        <SubscriberIcon />
        <h2 className="stat_title_loader">Subscribers:</h2>
        <p className="stat_value_loader" />
      </div>
      <div className="stat_card_loader">
        <VideoIcon />
        <h2 className="stat_title_loader">Total Videos:</h2>
        <p className="stat_value_loader" />
      </div>
      <div className="stat_card_loader">
        <ViewIcon />
        <h2 className="stat_title_loader">Total Views:</h2>
        <p className="stat_value_loader" />
      </div>
      <div className="stat_card_loader">
        <InfoIcon />
        <h2 className="stat_title_loader">Joined On:</h2>
        <p className="stat_value_loader" />
      </div>
      <div className="description_loader">
        <h2 className="description_title_loader">Description:</h2>
        <p className="description_value_loader" />
      </div>
    </div>
  );
}

export default StatsLoader;
