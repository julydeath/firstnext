import Image from "next/image";
import Link from "next/link";
import styles from "../components/card.module.css";
import cls from "classnames";

const Card = (props) => {
  return (
    <Link legacyBehavior href={props.href}>
      <a className={styles.cardLink}>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.img}
              width={260}
              height={160}
              alt="image"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
