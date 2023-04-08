import BirthDateForm from "./components/Form/BirthDateForm";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import AgeResults from "./components/AgeResults/AgeResults";

import CalculateDiff from "./ts/age-calculator";
import { useState } from "react";

const initialValues = {
  years: "--",
  months: "--",
  days: "--",
};

const App = () => {
  const [state, setState] = useState(initialValues);
  const submitHandler = () => {
    const year = document.getElementById("year")! as HTMLInputElement;
    const month = document.getElementById("month")! as HTMLInputElement;
    const day = document.getElementById("day")! as HTMLInputElement;

    const input = [+year.value, +month.value, +day.value];
    const result = CalculateDiff(input);

    setState(result);
  };
  return (
    <Card>
      <BirthDateForm onSubmitEvent={submitHandler} />
      <Button onClickEvent={submitHandler} />
      <AgeResults data={state} />
    </Card>
  );
};
export default App;
