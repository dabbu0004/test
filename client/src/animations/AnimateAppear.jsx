import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimateAppear = ({
  children,
  y = 60,
  duration = 1,
  delay = 0,
  ease = "power3.out",
  once = true,
}) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once,
        },
      }
    );
  }, [y, duration, delay, ease, once]);

  return <div ref={elRef}>{children}</div>;
};

export default AnimateAppear;
