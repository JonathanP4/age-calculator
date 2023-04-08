export const Validate = (input: string, id: string) => {
  const curEl = document.querySelector(`#${id}`)! as HTMLInputElement;
  if (input.trim().length === 0) {
    curEl.style.borderColor = "var(--Light-red)";
    return;
  }
  if (id === "day" && +input > 31) {
    curEl.style.borderColor = "var(--Light-red)";
    return;
  }
  if (id === "month" && +input > 12) {
    curEl.style.borderColor = "var(--Light-red)";
    return;
  }
  curEl.style.borderColor = "var(--Light-grey)";
};
export const ValidateApril = () => {
  const monthInput = document.querySelector("#month")!;
};
