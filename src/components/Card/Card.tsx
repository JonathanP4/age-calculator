import styles from "./Card.module.css";

const Card = (props: any) => {
  return <main className={styles.card}>{props.children}</main>;
};

export default Card;
