export const DisplayErrorMessage = (el: HTMLInputElement, id: string) => {
  const span = el.parentNode!.querySelector("span")!;

  if (el.value.trim().length === 0) {
    span.textContent = "This field is required";
    return;
  }
  if (+el.value < 0) {
    span.textContent = `Must be a valid ${id}`;
    return;
  }
  if (id === "day" && +el.value > 31) {
    span.textContent = `Must be a valid ${id}`;
    return;
  }
  if (id === "month" && +el.value > 12) {
    span.textContent = `Must be a valid ${id}`;
    return;
  }
  span.textContent = "";
};

export const ValidateApril = (d: HTMLInputElement, m: HTMLInputElement) => {
  const spanEl = document.getElementById("day-error")! as HTMLSpanElement;

  if (+m.value === 4 && +d.value >= 31) {
    spanEl.textContent = "Must be a valid date";
    return false;
  }
  return true;
};
