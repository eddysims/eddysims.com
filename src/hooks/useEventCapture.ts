import posthog from "posthog-js";

type Events = "downloaded-resume";

export function useEventCapture() {
  function capture(event: Events, properties?: Record<string, string>) {
    posthog.capture(event, properties);
  }

  return capture;
}
