import { BaseSyntheticEvent } from "react";
import { ValidateSubmission } from "../../ts/validate";
import styles from "./BirthDateForm.module.css";

const BirthDateForm: React.FC<{ onSubmitEvent: () => void }> = (props) => {
  const submitHandler = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    props.onSubmitEvent();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputItem}>
        <label htmlFor="day">Day</label>
        <input id="day" type="number" placeholder="DD" />
        <span id="day-error"></span>
      </div>

      <div className={styles.inputItem}>
        <label htmlFor="month">Month</label>
        <input id="month" type="number" placeholder="MM" />
        <span></span>
      </div>

      <div className={styles.inputItem}>
        <label htmlFor="year">Year</label>
        <input id="year" type="number" placeholder="YYYY" />
        <span></span>
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

export default BirthDateForm;
