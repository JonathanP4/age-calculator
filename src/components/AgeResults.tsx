import "./AgeResults.css";

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
        <div className="results-container">
          <div>
            <span className="age-text text__highlight">{data.years}</span>
            <span className="age-text">
              {+data.years !== 1 ? "years" : "year"}
            </span>
          </div>
          <div>
            <span className="age-text text__highlight">{data.months}</span>
            <span className="age-text">
              {+data.months !== 1 ? "months" : "month"}
            </span>
          </div>
          <div>
            <span className="age-text text__highlight">{data.days}</span>
            <span className="age-text">
              {+data.months !== 1 ? "days" : "day"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default AgeResults;
