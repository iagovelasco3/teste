import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  retweets?: RetweetUpdateManyWithoutTweetsInput;
  user?: string | null;
};
