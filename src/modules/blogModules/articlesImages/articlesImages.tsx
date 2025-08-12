import Image from "next/image";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./articlesImages.module.scss";

interface ArticlesImagesProps {
  images: { image: string; caption: string }[];
}

export default function ArticlesImages({ images }: ArticlesImagesProps) {
  return (
    <section className={classes.articlesImages}>
      <MultiContainer>
        <div className={classes.articlesImagesItems}>
          {images.map((item, index) => (
            <div key={index} >
              <div className={classes.articlesImagesItem}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={553}
                  height={365}
                />
              </div>
            </div>
          ))}
        </div>
      </MultiContainer>
    </section>
  );
}
