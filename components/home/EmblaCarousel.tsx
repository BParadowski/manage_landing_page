import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Slide from "./Slide";
import styles from "./emblaCarousel.module.scss";

import { testimonies } from "./carousel-data";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: 1 });
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () =>
        setCurrentIndex(emblaApi.selectedScrollSnap())
      );
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {testimonies.map((person) => (
            <Slide
              key={person.name}
              imgUrl={person.imgData}
              heading={person.name}
              para={person.testimony}
            />
          ))}
        </div>
      </div>

      <div className={styles["nav-wrapper"]}>
        <div className={styles["mobile-nav"]}>
          {testimonies.map((testimony, index) => (
            <button
              type="button"
              key={index}
              className={styles.bullet}
              onClick={() => scrollTo(index)}
              data-selected={currentIndex === index}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
