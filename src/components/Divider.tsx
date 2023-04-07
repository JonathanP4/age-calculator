import arrow from "/src/assets/img/icon-arrow.svg";
import "./Divider.css";
const Divider: React.FC<{ onClickEvent: () => void }> = (props) => {
  const clickHandler = () => props.onClickEvent();
  return (
    <div className="divider-container">
      <div className="divider__border"></div>
      <div onClick={clickHandler}>
        <img src={arrow} alt="arrow_img" />
      </div>
    </div>
  );
};
export default Divider;
