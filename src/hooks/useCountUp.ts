import { useEffect, useState } from "react";

interface UseCountUpProps {
  end: number;
  duration?: number;
  enabled: boolean;
}

export function useCountUp({
  end,
  duration = 1200,
  enabled,
}: UseCountUpProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number | null = null;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percentage = Math.min(progress / duration, 1);
      const current = Math.floor(end * percentage);

      setValue(current);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [enabled, end, duration]);

  return value;
}
