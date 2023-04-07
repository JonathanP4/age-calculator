import { BaseSyntheticEvent } from "react";
import "./AgeForm.css";

const AgeForm: React.FC<{ onSubmitEvent: () => void }> = (props) => {
  const submitHandler = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    props.onSubmitEvent();
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="inputs">
        <label htmlFor="day">Day</label>
        <input id="day" type="number" min={1} max={31} placeholder="DD" />
      </div>

      <div className="inputs">
        <label htmlFor="month">Month</label>
        <input id="month" type="number" min={1} max={12} placeholder="MM" />
      </div>

      <div className="inputs">
        <label htmlFor="year">Year</label>
        <input id="year" type="number" min={1} placeholder="YYYY" />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

export default AgeForm;
