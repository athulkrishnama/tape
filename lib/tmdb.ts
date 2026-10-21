import { TMDB, IMAGE_SECURE_BASE_URL } from "@lorenzopant/tmdb";
import { env } from "./env";

export const tmdb = new TMDB(env.TMDB_ACCESS_TOKEN, {
  language: "en-US",
  deduplication: true,
  rate_limit: true,
  retry: true,
});

export function getTMDBImageUrl(
  path: string | null | undefined,
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original" = "w500",
  fallbackUrl = ""
): string {
  if (!path) return fallbackUrl;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${IMAGE_SECURE_BASE_URL}${size}/${cleanPath}`;
}

export {
  TMDB,
  IMAGE_SECURE_BASE_URL,
  POSTER_SIZES,
  BACKDROP_SIZES,
  PROFILE_SIZES,
  STILL_SIZES,
  LOGO_SIZES,
} from "@lorenzopant/tmdb";
export type * from "@lorenzopant/tmdb";
