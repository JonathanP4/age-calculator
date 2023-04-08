import { BaseSyntheticEvent, useState } from "react";
import { DisplayErrorMessage } from "../../ts/validate";
import styles from "./BirthDateForm.module.css";

const BirthDateForm: React.FC<{ onSubmitEvent: () => void }> = (props) => {
  const [stateDay, setStateDay] = useState(true);
  const [stateMonth, setStateMonth] = useState(true);
  const [stateYear, setStateYear] = useState(true);

  const dayValidator = (ev: BaseSyntheticEvent) => {
    DisplayErrorMessage(ev.target, ev.target.id);

    const targetVal = ev.target.value;
    if (targetVal.trim().length === 0 || +targetVal > 31 || +targetVal <= 0)
      setStateDay(false);
    else setStateDay(true);
  };
  const monthValidator = (ev: BaseSyntheticEvent) => {
    DisplayErrorMessage(ev.target, ev.target.id);

    const targetVal = ev.target.value;
    if (targetVal.trim().length === 0 || +targetVal > 12 || +targetVal <= 0)
      setStateMonth(false);
    else setStateMonth(true);
  };
  const yearValidator = (ev: BaseSyntheticEvent) => {
    DisplayErrorMessage(ev.target, ev.target.id);

    const targetVal = ev.target.value;
    if (targetVal.trim().length === 0 || +targetVal <= 0) setStateYear(false);
    else setStateYear(true);
  };

  const submitHandler = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    props.onSubmitEvent();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={`${styles.inputItem} ${!stateDay && styles.invalid}`}>
        <label htmlFor="day">Day</label>
        <input onBlur={dayValidator} id="day" type="number" placeholder="DD" />
        <span id="day-error"></span>
      </div>

      <div className={`${styles.inputItem} ${!stateMonth && styles.invalid}`}>
        <label htmlFor="month">Month</label>
        <input
          onBlur={monthValidator}
          id="month"
          type="number"
          placeholder="MM"
        />
        <span></span>
      </div>

      <div className={`${styles.inputItem} ${!stateYear && styles.invalid}`}>
        <label htmlFor="year">Year</label>
        <input
          onBlur={yearValidator}
          id="year"
          type="number"
          placeholder="YYYY"
        />
        <span></span>
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

export default BirthDateForm;
