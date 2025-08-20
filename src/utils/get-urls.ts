import { env } from "@/lib/env/client";

const canUseDOM = Boolean(
  typeof window !== "undefined" &&
    window.document &&
    window.document.createElement,
);

export const getClientSideUrl = () => {
  if (canUseDOM) {
    const { protocol, port, hostname } = window.location;

    return `${protocol}//${hostname}${port ? `:${port}` : ""}`;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return env.NEXT_PUBLIC_SERVER_URL;
};

export const getServerSideUrl = () => {
  const url = env.NEXT_PUBLIC_SERVER_URL;

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return process.env.VERCEL_PROJECT_PRODUCTION_URL;
  }

  return url;
};

