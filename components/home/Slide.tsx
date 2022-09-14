import styles from "./slide.module.scss";
import Image, { StaticImageData } from "next/image";

interface SlideProps {
  imgUrl: StaticImageData;
  heading: string;
  para: string;
}

export default function Slide({ imgUrl, heading, para }: SlideProps) {
  return (
    <div className={styles.slide}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          <Image src={imgUrl} layout="responsive" alt=""></Image>
        </div>
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}
