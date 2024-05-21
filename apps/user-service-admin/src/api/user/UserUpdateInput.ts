import { InputJsonValue } from "../../types";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  profilePicture?: InputJsonValue;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  username?: string | null;
};
