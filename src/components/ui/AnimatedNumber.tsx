import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  className = "",
}: AnimatedNumberProps) {
  const { ref, isVisible } = useInView<HTMLSpanElement>();
  const animatedValue = useCountUp({
    end: value,
    enabled: isVisible,
  });

  return (
    <span ref={ref} className={className}>
      {animatedValue}
      {suffix}
    </span>
  );
}
