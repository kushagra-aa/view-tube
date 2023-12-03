import moment from "moment";

export const relativeTime = (dateTimeString: string) =>
  moment(dateTimeString).fromNow();

export const formatDate = (dateTimeString: string) =>
  moment(dateTimeString).format("YYYY-MM-DD");

export const formatTime = (dateTimeString: string) =>
  moment(dateTimeString).format("hh:mm A");
