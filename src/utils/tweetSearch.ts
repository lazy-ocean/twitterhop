/* import data from "../mocks/tweets1.json"; */
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { formatDate } from "./formatDate";
import { Tweet } from "../interfaces";

export const searchTweets = (data: { tweet: Tweet }[]) => {
  const todayDay = dayjs().date();
  const todayMonth = dayjs().month();
  dayjs.extend(customParseFormat);

  const collection: { [key: number]: Tweet[] } = {};

  (data as any[]).forEach(({ tweet }) => {
    let { year, month, day } = formatDate(tweet?.created_at);

    if (day === todayDay && todayMonth === month)
      collection[year]
        ? collection[year].push(tweet)
        : (collection[year] = [tweet]);
  });

  return collection;
};
