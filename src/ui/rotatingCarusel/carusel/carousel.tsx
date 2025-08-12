"use client";

import { useEffect, useRef } from "react";
import classes from "./carousel.module.scss";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}

export const Carousel = <T,>({
  items,
  renderItem,
  direction = "right",
  speed = 30,
}: CarouselProps<T>) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const isLeft = direction === "left";
    const baseSpeed = speed / 60;
    let offset = 0;

    const animate = () => {
      offset += isLeft ? -baseSpeed : baseSpeed;

      const trackWidth = track.scrollWidth / 2;

      if (isLeft && offset <= -trackWidth) {
        offset += trackWidth;
      } else if (!isLeft && offset >= 0) {
        offset -= trackWidth;
      }

      track.style.transform = `translateX(${offset}px)`;
      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [direction, speed]);

  return (
    <div className={classes.carousel}>
      <div className={classes.trackWrapper}>
        <div ref={trackRef} className={classes.track}>
          {[...items, ...items].map((item, i) => (
            <div key={i} className={classes.card}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
