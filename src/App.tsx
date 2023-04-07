import AgeForm from "./components/AgeForm";
import "./App.css";
import Card from "./components/Card";
import Divider from "./components/Divider";
import AgeResults from "./components/AgeResults";
import CalculateDiff from "./calculator/age-calculator";
import { useState } from "react";
import Attribution from "./components/Attribution";

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
    <div>
      <Card>
        <AgeForm onSubmitEvent={submitHandler} />
        <Divider onClickEvent={submitHandler} />
        <AgeResults data={state} />
      </Card>
      <Attribution />
    </div>
  );
};
export default App;
