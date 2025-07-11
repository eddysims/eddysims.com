import { useEffect, useState, useRef } from "react";

export const useIsSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel goes out of view, sticky element is stuck
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return { isSticky, stickyRef, sentinelRef };
};
