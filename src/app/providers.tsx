"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ToastContainer } from "react-toastify";

import { env } from "@/env/client";
import { getQueryClient } from "@/lib/react-query";

import type { PropsWithChildren } from "react";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}

export function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer />
      </QueryClientProvider>
    </PostHogProvider>
  );
}
