import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "user";

export const TweetTitle = (record: TTweet): string => {
  return record.user?.toString() || String(record.id);
};
