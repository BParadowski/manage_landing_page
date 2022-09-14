import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Slide from "./Slide";
import styles from "./emblaCarousel.module.scss";

import ali from "../../public/images/avatar-ali.png";
import anisha from "../../public/images/avatar-anisha.png";
import richard from "../../public/images/avatar-richard.png";
import shanai from "../../public/images/avatar-shanai.png";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          <Slide
            imgUrl={anisha}
            heading="Anisha Li"
            para="“Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”"
          />
          <Slide
            imgUrl={ali}
            heading="Ali Bravo"
            para="“We have been able to cancel so many other subscriptions since
            using Manage. There is no more cross-channel confusion and
            everyone is much more focused.”"
          />
          <Slide
            imgUrl={richard}
            heading="Richard Watts"
            para=" “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to
            everyone I talk to!”"
          />
          <Slide
            imgUrl={shanai}
            heading="Shanai Gough"
            para="“Their software allows us to track, manage and collaborate on
            our projects from anywhere. It keeps the whole team in-sync
            without being intrusive.”"
          />
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};
