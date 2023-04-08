import { BaseSyntheticEvent } from "react";
import styles from "./BirthDateForm.module.css";
import { Validate, ValidateApril } from "../../ts/validate";

const BirthDateForm: React.FC<{ onSubmitEvent: () => void }> = (props) => {
  const submitHandler = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    ValidateApril();
    props.onSubmitEvent();
  };
  const validateInput = (ev: BaseSyntheticEvent) => {
    const input = ev.target;
    const res = Validate(input.value, input.id);
    return res;
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputItem}>
        <label htmlFor="day">Day</label>
        <input onBlur={validateInput} id="day" type="number" placeholder="DD" />
        <span>Error</span>
      </div>

      <div className={styles.inputItem}>
        <label htmlFor="month">Month</label>
        <input
          onBlur={validateInput}
          id="month"
          type="number"
          placeholder="MM"
        />
      </div>

      <div className={styles.inputItem}>
        <label htmlFor="year">Year</label>
        <input
          onBlur={validateInput}
          id="year"
          type="number"
          placeholder="YYYY"
        />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

export default BirthDateForm;
