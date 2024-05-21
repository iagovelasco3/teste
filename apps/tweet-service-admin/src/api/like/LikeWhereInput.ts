import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LikeWhereInput = {
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
  user?: StringNullableFilter;
};
