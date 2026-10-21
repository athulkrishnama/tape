import { z } from "zod";
import { TMDB_ACCESS_TOKEN_REQUIRED } from "./constants";

const envSchema = z.object({
  TMDB_ACCESS_TOKEN: z.string().min(1, TMDB_ACCESS_TOKEN_REQUIRED),
});

export const env = envSchema.parse(process.env);
