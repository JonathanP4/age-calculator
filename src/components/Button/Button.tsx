import arrow from "/src/assets/img/icon-arrow.svg";
import styles from "./Button.module.css";

const Button: React.FC<{ onClickEvent: () => void }> = (props) => {
  const clickHandler = () => props.onClickEvent();
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.dividerBorder}></div>
      <div onClick={clickHandler}>
        <img src={arrow} alt="arrow_img" />
      </div>
    </div>
  );
};
export default Button;
