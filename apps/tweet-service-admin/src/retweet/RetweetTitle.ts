import { Retweet as TRetweet } from "../api/retweet/Retweet";

export const RETWEET_TITLE_FIELD = "user";

export const RetweetTitle = (record: TRetweet): string => {
  return record.user?.toString() || String(record.id);
};
