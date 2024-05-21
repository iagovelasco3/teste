import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
  updatedAt: Date;
  user: string | null;
};
