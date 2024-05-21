import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  profilePicture?: JsonFilter;
  profiles?: ProfileListRelationFilter;
  username?: StringNullableFilter;
};
