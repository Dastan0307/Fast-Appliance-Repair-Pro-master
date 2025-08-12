import { StaticImageData } from "next/image";

interface CarouselItem {
  id: string;
  image: StaticImageData;
}

export interface CarouselProps {
  items: CarouselItem[];
  direction?: "left" | "right";
  cardStyle?: "blue" | "gray";
  speed?: number;
}
