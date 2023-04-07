import "./AgeResults.css";

type ageObj = {
  years: string;
  months: string;
  days: string;
};

const AgeResults: React.FC<{ data: ageObj }> = (props) => {
  const data = props.data;
  return (
    <div className="results-container">
      <div>
        <span className="age-text text__highlight">{data.years}</span>
        <span className="age-text">{+data.years !== 1 ? "years" : "year"}</span>
      </div>
      <div>
        <span className="age-text text__highlight">{data.months}</span>
        <span className="age-text">
          {+data.months !== 1 ? "months" : "month"}
        </span>
      </div>
      <div>
        <span className="age-text text__highlight">{data.days}</span>
        <span className="age-text">{+data.months !== 1 ? "days" : "day"}</span>
      </div>
    </div>
  );
};
export default AgeResults;
