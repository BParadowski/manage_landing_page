import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./slider.module.scss";
import { Pagination } from "swiper";

import ali from "../../public/images/avatar-ali.png";
import anisha from "../../public/images/avatar-anisha.png";
import richard from "../../public/images/avatar-richard.png";
import shanai from "../../public/images/avatar-shanai.png";

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      breakpoints={{
        560: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
      slidesPerView={1}
      allowSlideNext={true}
      allowSlidePrev={true}
      pagination={{ clickable: true, type: "bullets", el: ".pagination-dots" }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(Pagination)}
    >
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <Image src={anisha} layout="responsive" alt=""></Image>
          </div>
          <h3>Anisha Li</h3>
          <p>
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <Image src={ali} layout="responsive" alt=""></Image>
          </div>
          <h3>Ali Bravo</h3>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <Image src={richard} layout="responsive" alt=""></Image>
          </div>
          <h3>Richard Watts</h3>
          <p>
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <Image src={shanai} layout="responsive" alt=""></Image>
          </div>
          <h3>Shanai Gough</h3>
          <p>
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </p>
        </div>
      </SwiperSlide>
      <div className={`.pagination-dots ${styles.pagination}`}>
        <button className={`swiper-pagination-bullet ${styles.dot}`}></button>
        <button className={`swiper-pagination-bullet ${styles.dot}`}></button>
        <button className={`swiper-pagination-bullet ${styles.dot}`}></button>
        <button className={`swiper-pagination-bullet ${styles.dot}`}></button>
      </div>
    </Swiper>
  );
}
