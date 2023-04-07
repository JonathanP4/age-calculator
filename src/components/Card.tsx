import "./Card.css";

const Card = (props: any) => {
  return <main className="card">{props.children}</main>;
};

export default Card;
