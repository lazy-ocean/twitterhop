import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

export const formatDate = (dateString: string) => {
  dayjs.extend(utc);
  let date: string[] | string = dateString.split(" ");
  date.splice(0, 1);
  date = date.join(" ");
  const formattedDate = dayjs(date, "MMM DD HH-mm-ss ZZ YYYY");

  return {
    day: formattedDate.date(),
    month: formattedDate.month(),
    year: formattedDate.year(),
    fullDate: formattedDate.toString(),
    time: formattedDate.utc().format("HH:mm:ss [UTC]"),
  };
};
