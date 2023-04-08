import styles from "./Attribution.module.css";
const Attribution = () => {
  return (
    <div className={styles.attribution}>
      Challenge{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/JonathanP4">Jonathan Petersen</a>.
    </div>
  );
};
export default Attribution;
