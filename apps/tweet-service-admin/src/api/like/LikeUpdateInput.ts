import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeUpdateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: string | null;
};
