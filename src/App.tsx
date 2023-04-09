import BirthDateForm from "./components/Form/BirthDateForm";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import AgeResults from "./components/AgeResults/AgeResults";

import CalculateDiff from "./ts/age-calculator";
import { useState } from "react";
import { ValidateSubmission } from "./ts/validate";
import Attribution from "./components/Attribution/Attribution";

const initialValues = {
  years: "--",
  months: "--",
  days: "--",
};

const App = () => {
  const [state, setState] = useState(initialValues);
  const submitHandler = () => {
    const dayInput = document.getElementById("day")! as HTMLInputElement;
    const monthInput = document.getElementById("month")! as HTMLInputElement;
    const yearInput = document.getElementById("year")! as HTMLInputElement;

    const inputArr = [dayInput, monthInput, yearInput];
    const isValid = inputArr.map((el) => ValidateSubmission(el, el.id));

    if (!isValid.every((el) => el === true)) return;

    const result = CalculateDiff([
      +yearInput.value,
      +monthInput.value,
      +dayInput.value,
    ]);

    setState(result);
  };
  return (
    <div>
      <Card>
        <BirthDateForm onSubmitEvent={submitHandler} />
        <Button onClickEvent={submitHandler} />
        <AgeResults data={state} />
      </Card>
      <Attribution />
    </div>
  );
};
export default App;
