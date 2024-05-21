import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "user";

export const LikeTitle = (record: TLike): string => {
  return record.user?.toString() || String(record.id);
};
