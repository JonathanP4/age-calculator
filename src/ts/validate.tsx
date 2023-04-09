import styles from "../components/Form/BirthDateForm.module.css";

const displayError = (el: HTMLInputElement, text: string) => {
  const span = el.parentNode!.querySelector("span")!;
  span.textContent = `${text}`;
  el.parentElement!.classList.add(styles.invalid);
};

const checkIfValidDate = () => {
  const dayInput = document.getElementById("day")! as HTMLInputElement;

  if (+dayInput.value >= 31) {
    displayError(dayInput, "Must be a valid date");
    return false;
  }
  dayInput.parentElement!.classList.remove(styles.invalid);
  return true;
};

export const ValidateSubmission = (el: HTMLInputElement, id: string) => {
  if (el.value.trim().length === 0) {
    displayError(el, "This field is required");
    return false;
  }
  if (+el.value < 0) {
    displayError(el, `Must be a valid ${id}`);
    return false;
  }
  if (id === "day" && +el.value > 31) {
    displayError(el, `Must be a valid ${id}`);
    return false;
  }
  if (id === "month" && +el.value > 12) {
    displayError(el, `Must be a valid ${id}`);
    return false;
  }
  if (!checkIfValidDate()) {
    return false;
  }

  displayError(el, "");
  el.parentElement!.classList.remove(styles.invalid);

  return true;
};
