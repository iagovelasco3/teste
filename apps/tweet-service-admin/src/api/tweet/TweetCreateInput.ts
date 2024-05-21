import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
  user?: string | null;
};
