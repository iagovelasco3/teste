import { JsonValue } from "type-fest";
import { Profile } from "../profile/Profile";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  profilePicture: JsonValue;
  profiles?: Array<Profile>;
  updatedAt: Date;
  username: string | null;
};
