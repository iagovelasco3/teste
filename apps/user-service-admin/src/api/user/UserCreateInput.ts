import { InputJsonValue } from "../../types";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  profilePicture?: InputJsonValue;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
