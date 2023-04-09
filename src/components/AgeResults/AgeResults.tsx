import styles from "./AgeResults.module.css";

type ageObj = {
  years: string;
  months: string;
  days: string;
};

const AgeResults: React.FC<{ data: ageObj }> = (props) => {
  const data = props.data;

  let condition = true;
  if (data.years !== "--" && +data.years > 0) {
    condition = true;
  } else if (+data.years < 0) {
    condition = false;
  }

  return (
    <div>
      {+data.years < 0 && (
        <div>
          <h2>Are you perhaps a time traveler?!</h2>
        </div>
      )}
      {condition && (
        <div className={styles.resultsContainer}>
          <div>
            <h1 className={`${styles.ageText} ${styles.textHighlight}`}>
              {data.years}
            </h1>
            <span className={styles.ageText}>
              {+data.years !== 1 ? "years" : "year"}
            </span>
          </div>
          <div>
            <h1 className={`${styles.ageText} ${styles.textHighlight}`}>
              {data.months}
            </h1>
            <span className={styles.ageText}>
              {+data.months !== 1 ? "months" : "month"}
            </span>
          </div>
          <div>
            <h1 className={`${styles.ageText} ${styles.textHighlight}`}>
              {data.days}
            </h1>
            <span className={styles.ageText}>
              {+data.months !== 1 ? "days" : "day"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default AgeResults;
