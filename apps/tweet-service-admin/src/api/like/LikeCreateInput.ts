import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeCreateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: string | null;
};
