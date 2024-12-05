import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    RESEND_API_KEY: z.string(),
    RESEND_PERSONAL_EMAIL: z.string().email(),
    RESEND_SENDER_EMAIL: z.string().email(),
  },
  experimental__runtimeEnv: process.env,
});
