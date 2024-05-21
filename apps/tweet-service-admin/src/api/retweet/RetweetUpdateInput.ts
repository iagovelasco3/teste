import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type RetweetUpdateInput = {
  tweet?: TweetWhereUniqueInput | null;
  user?: string | null;
};
