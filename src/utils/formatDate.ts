import dayjs from "dayjs";

export const formatDate = (dateString: string) => {
  let date: string[] | string = dateString.split(" ");
  date.splice(0, 1);
  date = date.join(" ");
  const formattedDate = dayjs(date, "MMM DD HH-mm-ss ZZ YYYY");
  return {
    day: formattedDate.date(),
    month: formattedDate.month(),
    year: formattedDate.year(),
    fullDate: formattedDate.toString(),
  };
};
