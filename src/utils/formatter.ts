import moment from "moment";

export function useFormatterDate(date: string) {
  return moment(date).fromNow();
}
